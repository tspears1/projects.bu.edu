// React ====================================
import React, { useEffect } from "react";

// Components ===============================
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail
} from "../../ui/Sidebar/Sidebar.jsx"
import { ProjectSwitcher } from "@components/molecules/ProjectSwitcher/ProjectSwitcher.jsx";
import { NavPhases } from "@components/molecules/NavPhases/NavPhases.jsx";

// Context ==================================
import { useDatabase } from "@context/database/database-context.jsx";

/**
 * @component AppSidebar - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AppSidebar = ({ ...props }) => {
   const { projects, sprints, org, taxonomy } = useDatabase();

   return (
      <>
         <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
               <ProjectSwitcher projectData={projects} />
            </SidebarHeader>
            <SidebarContent>
               <NavPhases />
            </SidebarContent>
            <SidebarFooter>
               <div>Footer</div>
            </SidebarFooter>
            <SidebarRail />
         </Sidebar>
      </>
   )
}

AppSidebar.displayName = "AppSidebar";

export { AppSidebar }