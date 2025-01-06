"use client";
// Components ===============================
import { Brand } from "@components/atoms/Brand/Brand.jsx";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@components/ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbLink } from "@components/ui/Breadcrumbs/Breadcrumbs.jsx";
import { BreadcrumbPage } from "@components/ui/Breadcrumbs/Breadcrumbs.jsx";
import { SidebarTrigger } from "@components/ui/Sidebar/Sidebar.jsx";
import { ThemeToggle } from "@components/ui/ThemeToggle/ThemeToggle.jsx";
import { Separator } from "@components/ui/Separator/Separator.jsx";

// Header ==================================
/**
 * @component Header - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Header = () => {

  return (
    <header className="header">
      <div className="header__container">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Sprints
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
