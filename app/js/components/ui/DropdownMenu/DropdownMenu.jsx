"use client"

import React, { forwardRef } from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Icon } from "@components/atoms/Icon/Icon.jsx"
import cn from 'classnames'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = forwardRef(({ inset, children, ...props }, ref) => (
   <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
         'dropdown-menu__sub-trigger',
         { 'dropdown-menu__sub-trigger--inset' : inset }
      )}
      {...props}
   >
      {children}
      <Icon icon='caret-right' className="dropdown-menu__sub-trigger-icon" />
   </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = forwardRef(({ ...props }, ref) => (
   <DropdownMenuPrimitive.SubContent
      ref={ref}
      className='dropdown-menu__sub-content'
      {...props}
   />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = forwardRef(({ sideOffset = 4, ...props }, ref) => (
   <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
         ref={ref}
         sideOffset={sideOffset}
         className='dropdown-menu__content'
         {...props}
      />
   </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = forwardRef(({ inset, ...props }, ref) => (
   <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
         'dropdown-menu__item',
         { 'dropdown-menu__item--inset' : inset }
      )}
      {...props}
   />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = forwardRef(({ children, checked, ...props }, ref) => (
   <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className='dropdown-menu__checkbox-item'
      checked={checked}
      {...props}
   >
      <span className='dropdown-menu__checkbox-item-span'>
         <DropdownMenuPrimitive.ItemIndicator>
            <Icon icon='check' size='1rem' />
         </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
   </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = forwardRef(({ children, ...props }, ref) => (
   <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className='dropdown-menu__radio-item'
      {...props}
   >
      <span className='dropdown-menu__radio-item-span'>
         <DropdownMenuPrimitive.ItemIndicator>
            <Icon
               icon='circle'
               color="currentColor"
               size='0.5rem'
            />
         </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
   </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = forwardRef(({ inset, ...props }, ref) => (
   <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
         'dropdown-menu__label',
         { 'dropdown-menu__label--inset' : inset }
      )}
      {...props}
   />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = forwardRef(({ ...props }, ref) => (
   <DropdownMenuPrimitive.Separator
      ref={ref}
      className='dropdown-menu__separator'
      {...props}
   />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ ...props }) => {
   return (
      <span
         className='dropdown-menu__shortcut'
         {...props}
      />
   )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuCheckboxItem,
   DropdownMenuRadioItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuGroup,
   DropdownMenuPortal,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuRadioGroup
}
