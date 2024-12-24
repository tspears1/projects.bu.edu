import taxonomy from '../_setup/taxonomy.js'

const getFileType = (fileUrl) => {
   if (!fileUrl) return null
   return taxonomy.fileTypes.find(fileType => fileType.regex.test(fileUrl))
}

const Asset = ({ asset, ui }) => {
   const { title, description, lastModified, fileUrl, status } = asset
   const { icon, label } = getFileType(fileUrl)

   const _lastModified = new Date(lastModified).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
   return (
      <article className="asset">
         <div className="asset__title">{title}</div>
         <div className="asset__description">{description}</div>
         <div className="asset__last-modified">{_lastModified}</div>
         <ui.Button label={label} classes='asset_file-url' icon={icon} href={fileUrl} target="_blank" rel="noreferrer" />
         <div className="asset__status">{status}</div>
      </article>
   )
}

export default Asset