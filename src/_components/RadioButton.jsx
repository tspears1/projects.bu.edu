import { TOOLTIP_PLACEMENTS } from "../_includes/js/constants/tooltip-placements.js"

const RadioButton = ({
   label = '',
   group = '',
   value = '',
   checked = false,
   classes = '',
   icon = null,
   tooltip = null,
   attrs = null,
   ui
}) => {
   const iconStart = icon && Array.isArray(icon) ? icon[0] : icon ?? null
   const iconEnd = icon && Array.isArray(icon) ? icon[1] : null ?? null

   const Btn = () => (
      <div className={`radio-button ${classes}`}>
         {iconStart && <ui.Icon icon={iconStart} classes="radio-button__icon radio-button__icon--start" />}
         <label className="radio-button__label">
            <input
               type="radio"
               className="radio-button__input"
               name={group}
               value={value}
               checked={checked}
               {...attrs}
            />
            <span className="radio-button__text">{label}</span>
         </label>
         {iconEnd && <ui.Icon icon={iconEnd} classes="radio-button__icon radio-button__icon--end" />}
      </div>
   )

   const TooltipBtn = () => (
      <sl-tooltip
         content={label}
         placement={TOOLTIP_PLACEMENTS.includes(tooltip) ? tooltip : 'top'}
         style={{'--sl-tooltip-arrow-size': 0}}
      >
         {Btn()}
      </sl-tooltip>
   )

   return (
      <>
         {tooltip && <TooltipBtn />}
         {!tooltip && <Btn />}
      </>
   )
}

export default RadioButton