"use client";

import { useEffect } from "react";
import { useDatabase } from "@context/database/database-context.jsx";
import { Button } from "@components/atoms/Button/Button.jsx";
import { Icon } from "@components/atoms/Icon/Icon.jsx";
/**
 * @component Header - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  const { sprints } = useDatabase();

  useEffect(() => {
    console.log("db", sprints);
  }, [sprints]);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Button>Click Me</Button>
        <Icon icon="bird" weight='light' size={32}/>
        <div>sidebar-toggle</div>
        <div>breadcrumbs</div>
        <div>brand</div>
        <div>theme-toggle</div>
      </div>
    </header>
  );
};

export default Header;
