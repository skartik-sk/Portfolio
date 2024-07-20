import { useMotionValue, useDeprecatedInvertedScale } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Avoid the stretch/squashing of border radius by using inverting them
 * throughout the component's layout transition.
 *
 * It would be possible to animate to/from different radius, for instance
 * in mobile mode from rounded to square for full-screen panels, by passing
 * the calculated inverted transform to `layoutTransition` when set as a function.
 *
 * Those inverted scales could be provided here to act as a `from` value,
 * then we can use Popcorn's `mix` function to get our
 *
 * @param {number} radius - The border radius value to use.
 */
export function useInvertedBorderRadius(radius) {
  // Create motion values for the X and Y scales
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  // Get the inverted scale values
  const inverted = useDeprecatedInvertedScale({ scaleX, scaleY });

  // Create a motion value for the border radius
  const borderRadius = useMotionValue(`${radius}px`);

  useEffect(() => {
    // Function to update the border radius based on inverted scales
    function updateRadius() {
      const latestX = inverted.scaleX.get();
      const latestY = inverted.scaleY.get();
      const xRadius = latestX * radius + 'px';
      const yRadius = latestY * radius + 'px';

      // Set the border radius value
      borderRadius.set(`${xRadius} ${yRadius}`);
    }

    // Subscribe to changes in the scale values
    const unsubScaleX = inverted.scaleX.onChange(updateRadius);
    const unsubScaleY = inverted.scaleY.onChange(updateRadius);

    // Cleanup the subscriptions on component unmount
    return () => {
      unsubScaleX();
      unsubScaleY();
    };
  }, [radius]);

  // Return the scale values and the computed border radius
  return {
    scaleX,
    scaleY,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius
  };
}
