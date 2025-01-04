"use client"

import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail
} from "@components/organisms/Sidebar/Sidebar.jsx"
import { ProjectSwitcher } from "@components/molecules/ProjectSwitcher/ProjectSwitcher.jsx";
import { NavPhases } from "@components/molecules/NavPhases/NavPhases.jsx";

/**
 * @component AppSidebar - Main application component.
 *
 * @param {Object} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AppSidebar = ({ ...props }) => {

   return (
      <Sidebar collapsible="icon" {...props}>
         <SidebarHeader>
            <ProjectSwitcher />
         </SidebarHeader>
         <SidebarContent>
            <NavPhases />
         </SidebarContent>
         <SidebarFooter>
            <div>Footer</div>
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   )
}

export { AppSidebar }