import { TOOLTIP_PLACEMENTS } from "../../app/js/constants/tooltip-placements.js"

const Button = ({
   label = '',
   href = null,
   target = null,
   classes = '',
   icon = null,
   hiddenText = null,
   tooltip = null,
   tag: Tag = 'button',
   attrs = null,
   ui
}) => {
   const iconStart = icon && Array.isArray(icon) ? icon[0] : icon ?? null
   const iconEnd = icon && Array.isArray(icon) ? icon[1] : null ?? null

   if (href && href !== '#' && href !== '') {
      Tag = 'a'
   }

   const Btn = () => (
      <Tag
         className={`button ${classes}`}
         target={target}
         href={href}
         {...attrs}
      >
         {iconStart && <ui.Icon icon={iconStart} classes="button__icon button__icon--start" />}
         <span className={`button__text ${hiddenText ? 'sr-only' : ''}`}>{label}</span>
         {iconEnd && <ui.Icon icon={iconEnd} classes="button__icon button__icon--end" />}
      </Tag>
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

export default Button