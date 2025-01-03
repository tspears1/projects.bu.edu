import { forwardRef, useMemo } from "react";
import cn from "classnames";

// Components ==============================================
import { Slot } from "@radix-ui/react-slot";
import { SidebarSimple } from "@phosphor-icons/react";
import { Button } from "@components/atoms/Button/Button.jsx";
import { Separator } from "@components/atoms/Separator/Separator.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@components/molecules/Tooltip/Tooltip.jsx";
import { Skeleton } from "@components/atoms/Skeleton/Skeleton.jsx";

// Constants ==============================================
import { SIDEBAR_WIDTH_MOBILE } from "@constants/sidebar-contants.js";

// Context ==============================================
import { useSidebar } from "@context/sidebar/sidebar-context.jsx";

/**
 * @typedef {Object} SidebarProps - Sidebar component props.
 * @property {'left' | 'right'} side - Sidebar side.
 * @property {'sidebar' | 'floating' | 'inset'} variant - Sidebar variant.
 * @property {'offcanvas' | 'icon' | 'none'} collapsible - Sidebar collapsible.
 * @property {Object} className - Sidebar className.
 * @property {Object} style - Sidebar style.
 * @property {Object} children - Sidebar children.
 * @property {Object} ref - Sidebar ref.
 */

/**
 * @component Sidebar - Main application component.
 *
 * @param {SidebarProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Sidebar = forwardRef(({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "sidebar",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="sidebar__sheet"
          style={{
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
          }}
          side={side}
        >
          <div className="sidebar__something">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="sidebar sidebar--collapsible"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "sidebar__gap",
          {
            "sidebar__gap--extra": variant === "floating" ||
              variant === "inset",
          },
        )}
      />
      <div
        className={cn(
          "sidebar__wrapper",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="sidebar__inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <SidebarSimple />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn("sidebar__rail", className)}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

const SidebarInset = forwardRef(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "sidebar__inset",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "sidebar__input",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("sidebar__header", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("sidebar__footer", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("sidebar__separator", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "sidebar__content",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("sidebar__group", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "sidebar__group-label",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "sidebar__group-action",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("sidebar__group-content", className)}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("sidebar__menu", className)}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("sidebar__menu-item", className)}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

/**
 * @typedef {Object} SidebarMenuButtonProps - SidebarMenuButton component props.
 * @property {'default' | 'outline' } variant - SidebarMenuButton variant.
 * @property {'default' | 'sm' | 'lg' | 'icon' } size - SidebarMenuButton size.
 * @property {boolean} asChild - SidebarMenuButton as child.
 * @property {string | React.ComponentProps<typeof TooltipContent>} tooltip - SidebarMenuButton tooltip.
 */
const SidebarMenuButton = forwardRef(({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "sidebar__menu-button",
        { "sidebar__menu-button--active": isActive },
        { "sidebar__menu-button--size-sm": size === "sm" },
        { "sidebar__menu-button--size-lg": size === "lg" },
        { "sidebar__menu-button--size-icon": size === "icon" },
        { "sidebar__menu-button--variant-outline": variant === "outline" },
        { "sidebar__menu-button--variant-default": variant === "default" },
        className,
      )}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {button}
      </TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = forwardRef(
  ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-action"
        className={cn(
          "sidebar__menu-action",
          { "sidebar__menu-action--show-on-hover": showOnHover },
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "sidebar__menu-badge",
      className,
    )}
    {...props}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = forwardRef(
  ({ className, showIcon = false, ...props }, ref) => {
    // Random width between 50 to 90%.
    const width = useMemo(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);

    return (
      <div
        ref={ref}
        data-sidebar="menu-skeleton"
        className={cn("sidebar__menu-skeleton", className)}
        {...props}
      >
        {showIcon && (
          <Skeleton
            className="sidebar__menu-skeleton-icon"
            data-sidebar="menu-skeleton-icon"
          />
        )}
        <Skeleton
          className="sidebar__menu-skeleton-text"
          data-sidebar="menu-skeleton-text"
          style={{ "--skeleton-width": width }}
        />
      </div>
    );
  },
);
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "sidebar__menu-sub",
      className,
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = forwardRef(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

/**
 * @typedef {Object} SidebarMenuSubButtonProps - SidebarMenuSubButton component props.
 * @property {boolean} asChild - SidebarMenuSubButton as child.
 * @property {'sm' | 'md'} size - SidebarMenuSubButton size.
 * @property {boolean} isActive - SidebarMenuSubButton is active.
 */
const SidebarMenuSubButton = forwardRef(
  ({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-sub-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          "sidebar__menu-sub-button",
          { "sidebar__menu-sub-button--active": isActive },
          { "sidebar__menu-sub-button--size-sm": size === "sm" },
          { "sidebar__menu-sub-button--size-md": size === "md" },
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
};
