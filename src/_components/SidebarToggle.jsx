const SidebarToggle = ({ ui }) => {
   return (
      <ui.Button
         label="Toggle Sidebar"
         classes="button--ui button--toggle"
         icon="sidebar-simple"
         attrs={{ 'data-sidebar-toggle': ''}}
         tooltip="right"
         srOnly={true}
      />
   )
}

export default SidebarToggle