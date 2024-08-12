import { useDomEvent, MotionValue } from 'framer-motion';
import { spring } from 'popmotion';
import { mix } from '@popmotion/popcorn';
import { debounce } from 'lodash';

// Constants for wheel scroll behavior
const deltaThreshold = 5; // Distance in pixels for snap back animation
const elasticFactor = 0.2; // Factor to control the elasticity of the scroll

/**
 * Create a spring animation to move the motion value from `from` to `to`.
 * @param {MotionValue} value - The motion value to animate.
 * @param {number} from - The starting value of the animation.
 * @param {number} to - The target value of the animation.
 */
function springTo(value, from, to) {
  if (value.isAnimating()) return;

  value.start(complete => {
    const animation = spring({
      from,
      to,
      velocity: value.getVelocity(),
      stiffness: 400,
      damping: 40
    }).start({
      update: (v) => value.set(v),
      complete
    });

    return () => animation.stop();
  });
}

const debouncedSpringTo = debounce(springTo, 100);

/**
 * Custom hook to handle wheel scroll events for elements with `overflow: hidden`.
 * Adds constraints for scrolling and a spring animation for "snap back" behavior.
 * @param {React.RefObject} ref - The ref of the element to attach the event listener to.
 * @param {MotionValue} y - The MotionValue for the scrollable element.
 * @param {Object|null} constraints - The scroll constraints (top and bottom bounds).
 * @param {Function} onWheelCallback - Callback function to handle wheel events.
 * @param {boolean} isActive - If `true`, the wheel event listener is active.
 */
export function useWheelScroll(ref, y, constraints, onWheelCallback, isActive) {
  const onWheel = (event) => {
    event.preventDefault();

    const currentY = y.get();
    let newY = currentY - event.deltaY;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, 0);
        }
      }

      if (newY > (constraints.bottom-38)) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, 0);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, 0);
        }
      }
    }

    if (!startedAnimation) {
      y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    onWheelCallback(event);
  };

  useDomEvent(ref, 'wheel', isActive && onWheel, { passive: false });
}
