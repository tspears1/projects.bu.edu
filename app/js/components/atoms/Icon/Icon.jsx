// React ====================================
import React from "react";

// Libraries ================================
import SvgIcon from 'react-inlinesvg'

/**
 * Icon Component
 * Dynamically renders an icon from the @phosphor-icons/core package.
 *
 * @param {Object} props - Icon component props.
 * @param {string} props.name - Icon name.
 * @param {string} props.size - Icon size.
 * @param {string} props.className - Icon className.
 */
const Icon = ({ icon = null, size = "1rem", weight = 'regular', className = "", ...props }) => {

   const iconName = weight === 'regular' ? `${icon}.svg` : `${icon}-${weight}.svg`

   return (
      <div
         className={`icon icon--${icon} ${className}`}
      >
         <SvgIcon
            src={`https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2.1.1/assets/${weight}/${iconName}`}
            width={size}
            height={size}
            className={`icon__svg`}
            {...props}
         />
      </div>
   )
}

export { Icon }