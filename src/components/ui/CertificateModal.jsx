'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export function CertificateModal({ isOpen, onClose, title, image }) {
  // Lightweight React state for UI updates
  const [scaleDisplay, setScaleDisplay] = useState(1);
  const [isHoverGrabbing, setIsHoverGrabbing] = useState(false);

  // High-performance mutable DOM refs
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  
  const stateRef = useRef({ scale: 1, x: 0, y: 0 });
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0, lastX: 0, lastY: 0 });
  const pinchRef = useRef({ initialDist: null, initialScale: 1, centerX: 0, centerY: 0 });

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;

  // Render direct DOM updates to bypass React render cycle lag for 60fps performance
  const updateTransform = (animate = false) => {
    if (!imgRef.current) return;
    const { x, y, scale } = stateRef.current;
    
    if (animate) {
      imgRef.current.style.transition = 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
      setTimeout(() => {
        if (imgRef.current) imgRef.current.style.transition = 'none';
      }, 200);
    }
    
    imgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    setScaleDisplay(scale);
  };

  const setBoundedState = (newX, newY, newScale, animate = false) => {
    const container = containerRef.current;
    if (!container) return;
    
    if (newScale <= 1) {
      stateRef.current = { scale: newScale, x: 0, y: 0 };
    } else {
      const rect = container.getBoundingClientRect();
      // Allow panning exactly up to the scaled boundaries to prevent disappearing
      const maxX = Math.max(0, (rect.width * newScale - rect.width) / 2);
      const maxY = Math.max(0, (rect.height * newScale - rect.height) / 2);
      stateRef.current = {
        scale: newScale,
        x: clamp(newX, -maxX, maxX),
        y: clamp(newY, -maxY, maxY)
      };
    }
    updateTransform(animate);
  };

  // Reset state strictly when modal toggles
  useEffect(() => {
    if (isOpen) {
      stateRef.current = { scale: 1, x: 0, y: 0 };
      dragRef.current.isDragging = false;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsHoverGrabbing(false);
      setScaleDisplay(1);
      if (imgRef.current) {
        imgRef.current.style.transition = 'none';
        imgRef.current.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Wheel zoom and Touch gesture zoom & pan
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const cursorX = e.clientX - rect.left - rect.width / 2;
      const cursorY = e.clientY - rect.top - rect.height / 2;
      
      const { scale: currScale, x: currX, y: currY } = stateRef.current;
      const delta = -e.deltaY;
      const factor = delta > 0 ? 1.15 : 1 / 1.15;
      const newScale = clamp(currScale * factor, MIN_SCALE, MAX_SCALE);
      
      if (newScale !== currScale) {
        const scaleRatio = newScale / currScale;
        const newX = cursorX - (cursorX - currX) * scaleRatio;
        const newY = cursorY - (cursorY - currY) * scaleRatio;
        setBoundedState(newX, newY, newScale, true);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const rect = container.getBoundingClientRect();
        
        pinchRef.current = {
          initialDist: Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY),
          initialScale: stateRef.current.scale,
          centerX: (touch1.clientX + touch2.clientX) / 2,
          centerY: (touch1.clientY + touch2.clientY) / 2
        };
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && pinchRef.current.initialDist) {
        e.preventDefault(); // Prevent native browser pinch zoom and scroll
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDist = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
        
        const ratio = currentDist / pinchRef.current.initialDist;
        const newScale = clamp(pinchRef.current.initialScale * ratio, MIN_SCALE, MAX_SCALE);
        
        const { scale: currScale, x: currX, y: currY } = stateRef.current;
        
        if (newScale !== currScale) {
          const rect = container.getBoundingClientRect();
          const cursorX = pinchRef.current.centerX - rect.left - rect.width / 2;
          const cursorY = pinchRef.current.centerY - rect.top - rect.height / 2;
          
          const scaleRatio = newScale / currScale;
          const newX = cursorX - (cursorX - currX) * scaleRatio;
          const newY = cursorY - (cursorY - currY) * scaleRatio;

          requestAnimationFrame(() => {
            setBoundedState(newX, newY, newScale, false);
          });
        }
      }
    };

    const handleTouchEnd = (e) => {
      if (e.touches.length < 2) {
        pinchRef.current.initialDist = null;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Pointer Drag to Pan Logic
  const handlePointerDown = (e) => {
    if (stateRef.current.scale <= 1) return;
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      lastX: stateRef.current.x,
      lastY: stateRef.current.y
    };
    setIsHoverGrabbing(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDragging || stateRef.current.scale <= 1) return;
    
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    
    requestAnimationFrame(() => {
      setBoundedState(
        dragRef.current.lastX + dx, 
        dragRef.current.lastY + dy, 
        stateRef.current.scale, 
        false
      );
    });
  };

  const handlePointerUp = (e) => {
    if (dragRef.current.isDragging) {
      dragRef.current.isDragging = false;
      setIsHoverGrabbing(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  // Button Zoom Handlers
  const triggerCenterZoom = (targetScale) => {
    const { scale: currScale, x: currX, y: currY } = stateRef.current;
    if (targetScale === currScale) return;
    
    const ratio = targetScale / currScale;
    const newX = 0 - (0 - currX) * ratio;
    const newY = 0 - (0 - currY) * ratio;

    setBoundedState(newX, newY, targetScale, true);
  };

  const handleZoomIn = () => triggerCenterZoom(clamp(stateRef.current.scale + 0.5, MIN_SCALE, MAX_SCALE));
  const handleZoomOut = () => triggerCenterZoom(clamp(stateRef.current.scale - 0.5, MIN_SCALE, MAX_SCALE));
  const handleResetZoom = () => triggerCenterZoom(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className={cn(
              "relative flex flex-col w-[95vw] lg:w-[90vw] h-[90vh] overflow-hidden select-none",
              "bg-surface dark:bg-[#111214]",
              "border border-edge/60 dark:border-[rgba(255,255,255,0.08)] rounded-[20px] md:rounded-[24px]",
              "shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            )}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between p-4 md:px-6 border-b border-edge/60 dark:border-[rgba(255,255,255,0.06)] shrink-0 bg-surface dark:bg-[#111214] z-20 relative shadow-sm">
              <h2 id="modal-title" className="text-[15px] md:text-[16px] font-bold text-foreground tracking-tight pr-4 truncate flex-1">
                {title}
              </h2>

              <div className="flex items-center gap-2 md:gap-4 shrink-0">
                {/* Zoom Controls */}
                <div className="flex items-center bg-surface-elevated dark:bg-white/[0.03] border border-edge/40 dark:border-white/[0.06] rounded-full p-1 mr-2 md:mr-4">
                  <button
                    onClick={handleZoomOut}
                    disabled={scaleDisplay <= MIN_SCALE}
                    className="p-1.5 rounded-full text-secondary hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={handleResetZoom}
                    className="px-3 text-[12px] font-mono font-medium text-secondary hover:text-foreground transition-colors min-w-[3.5rem] text-center"
                    aria-label="Reset zoom"
                  >
                    {Math.round(scaleDisplay * 100)}%
                  </button>
                  
                  <button
                    onClick={handleZoomIn}
                    disabled={scaleDisplay >= MAX_SCALE}
                    className="p-1.5 rounded-full text-secondary hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 bg-surface-elevated dark:bg-white/[0.03] hover:bg-edge/40 dark:hover:bg-white/[0.08] text-secondary hover:text-foreground border border-edge/40 dark:border-white/[0.06] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Document Viewer Container */}
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={cn(
                "flex-1 bg-surface-elevated/30 dark:bg-[#0B0C0E] relative overflow-hidden flex items-center justify-center",
                scaleDisplay > 1 ? (isHoverGrabbing ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
              )}
            >
              <img
                ref={imgRef}
                src={image}
                alt={title}
                className="object-contain max-w-full max-h-full p-4 sm:p-8 select-none pointer-events-none will-change-transform"
                style={{ 
                  transform: `translate3d(0px, 0px, 0) scale(1)`,
                  transformOrigin: 'center center'
                }}
                loading="lazy"
                draggable={false}
              />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
