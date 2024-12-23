const Icon = ({ icon, classes = '', variant = 'light' }, filters) => {
   if (!icon) return null

   return (
      <div className={`icon icon-${icon} ${classes ?? ''}`}>
         <img className="icon__svg" src={filters.icon(icon, 'phosphor', variant)} inline="true" />
      </div>
   )
}

export default Icon