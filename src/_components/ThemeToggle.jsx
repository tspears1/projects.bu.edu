const ThemeToggle = ({ ui }) => {
   return (
      <ui.Button
         label="Toggle Theme"
         classes="button--ui button--toggle"
         icon={['sun', 'moon']}
         attrs={{ 'data-theme-toggle': 'auto'}}
         tooltip="bottom"
         srOnly={true}
      />
   )
}

export default ThemeToggle