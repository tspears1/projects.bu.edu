const Header = ({ project, phase, ui }) => {
   return (
      <header className='site-header'>
         <div className='site-header__container'>
            <ui.SidebarToggle />
            <ui.Breadcrumbs project={project} phase={phase} />
            <ui.Brand tag='h2' />
            <ui.ThemeToggle />
         </div>
      </header>
   )
}

export default Header