import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Icon } from "@components/atoms/Icon/Icon.jsx";

const Breadcrumb = forwardRef(({ ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className="breadcrumb"
    {...props}
  />
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = forwardRef(({ ...props }, ref) => (
  <ol
    ref={ref}
    className="breadcrumb__list"
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = forwardRef(({ ...props }, ref) => (
  <li
    ref={ref}
    className="breadcrumb__item"
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = forwardRef(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className="breadcrumb__link"
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = forwardRef(({ ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className="breadcrumb__page"
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, ...props }) => (
  <li
    role="presentation"
    aria-hidden="true"
    className="breadcrumb__separator"
    {...props}
  >
    {children ?? <Icon icon="caret-right" />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ ...props }) => (
  <span
    role="presentation"
    aria-hidden="true"
    className="breadcrumb__ellipsis"
    {...props}
  >
    <Icon icon='dots-three' size="1rem" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
