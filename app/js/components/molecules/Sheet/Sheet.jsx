"use client"

import { forwardRef } from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "@phosphor-icons/react"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = forwardRef(({ ...props }, ref) => (
   <SheetPrimitive.Overlay
      className='sheet__overlay'
      {...props}
      ref={ref}
   />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const SheetContent = forwardRef(({ side = "right", children, ...props }, ref) => (
   <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
         ref={ref}
         className='sheet__content'
         data-sheet-side={side}
         {...props}
      >
         {children}
         <SheetPrimitive.Close className='sheet__content-close'>
            <X style={{
               width: '1rem',
               height: '1rem'
            }} />
            <span className="sr-only">Close</span>
         </SheetPrimitive.Close>
      </SheetPrimitive.Content>
   </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({...props }) => (
   <div
      className='sheet__header'
      {...props}
   />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({...props }) => (
   <div
      className='sheet__footer'
      {...props}
   />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = forwardRef(({ ...props }, ref) => (
   <SheetPrimitive.Title
      ref={ref}
      className='sheet__title'
      {...props}
   />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef(({ ...props }, ref) => (
   <SheetPrimitive.Description
      ref={ref}
      className='sheet__description'
      {...props}
   />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
   Sheet,
   SheetPortal,
   SheetOverlay,
   SheetTrigger,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetFooter,
   SheetTitle,
   SheetDescription
}
