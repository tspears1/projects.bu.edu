import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";

/**
 * @component Button - Main application component.
 *
 * @param {ButtonProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Button = forwardRef(({ variant, className = "", size = "sm", asChild = false, ...props }, ref ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-size={size}
        data-variant={variant}
        className={`button ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };

/**
 * @typedef {Object} ButtonProps - Button component props.
 *
 * @property {'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'icon'} variant - Button variant.
 * @property {string} className - Button className.
 * @property {'sm' | 'lg' | 'icon'} size - Button size.
 * @property {boolean} asChild - Button as child.
 * @property {Object} ref - Button ref.
 */
