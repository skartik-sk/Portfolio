import { useState, useEffect } from 'react';

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 *
 * @param {React.RefObject} ref - The reference to the element whose constraints are being measured.
 * @param {boolean} measureConstraints - Flag to enable/disable the measurement of constraints.
 * @returns {Object} - The top and bottom scroll constraints.
 */
export function useScrollConstraints(ref, measureConstraints) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    if (!measureConstraints) return;

    const element = ref.current;
    const viewportHeight = window.innerHeight;
    const contentTop = element.offsetTop;
    const contentHeight = element.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;
    const top = Math.min(scrollableViewport - (contentHeight+100), 0);

    setConstraints({ top, bottom: 0 });
  }, [measureConstraints]);

  return constraints;
}
