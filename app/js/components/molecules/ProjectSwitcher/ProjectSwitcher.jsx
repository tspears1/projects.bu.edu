// React ====================================
import React, { useEffect, useState } from "react";

// Components ===============================
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
} from "@components/ui/DropdownMenu/DropdownMenu.jsx";
import { Icon } from "@components/atoms/Icon/Icon.jsx";
import {
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@components/ui/Sidebar/Sidebar.jsx'

// Context ==================================
import { useSidebar } from "@context/sidebar/sidebar-context.jsx";

/**
 * @component ProjectSwitcher - Main application component.
 *
 * @param {import("react").ComponentProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const ProjectSwitcher = ({ projectData }) => {
   if (!projectData) return null;
   const { selected, icon, projects } = projectData;
   const { isMobile } = useSidebar();

   const defaultProject = projects.find((project) => project.slug === selected)

   const [activeProject, setActiveProject] = useState(defaultProject);

   useEffect(() => {
      console.log('projectData', { selected, icon, projects })
   })

   return (
      <SidebarMenu className="project-switcher">
         <SidebarMenuItem>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                     size="lg"
                     className="project-switcher__trigger"
                  >

                  </SidebarMenuButton>
               </DropdownMenuTrigger>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   )
}

export { ProjectSwitcher }