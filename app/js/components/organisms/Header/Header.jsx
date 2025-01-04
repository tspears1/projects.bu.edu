"use client";

import { useEffect } from "react";
import { useDatabase } from "@context/database/database-context.jsx";
import { Button } from "@components/ui/Button/Button.jsx";
import { Icon } from "@components/atoms/Icon/Icon.jsx";
import { SidebarTrigger } from "../../ui/Sidebar/Sidebar.jsx";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem } from "@components/ui/Breadcrumbs/Breadcrumbs.jsx";
/**
 * @component Header - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  const db = useDatabase();

  useEffect(() => {
    db && console.log("db", db);
  }, [db]);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Button variant="ghost" size="icon">
          <Icon icon="bird" weight='light' color='honeydew'/>
        </Button>
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>Projects</BreadcrumbItem>
            <BreadcrumbItem>Sprints</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>brand</div>
        <div>theme-toggle</div>
      </div>
    </header>
  );
};

export default Header;
