export default {
   phases: [
      {
         value: 'strategy',
         label: 'Strategy',
         icon: 'map-trifold'
      },
      {
         value: 'wireframes',
         label: 'Wireframes',
         icon: 'layout'
      },
      {
         value: 'styleboards',
         label: 'Styleboards',
         icon: 'palette'
      },
      {
         value: 'designs',
         label: 'Designs',
         icon: 'pencil-ruler'
      },
      {
         value: 'prototypes',
         label: 'Prototypes',
         icon: 'blueprint'
      },
      {
         value: 'imagery',
         label: 'Imagery',
         icon: 'images'
      }
   ],
   status: [
      {
         value: 'shared',
         label: 'Shared',
      },
      {
         value: 'reviewed',
         label: 'Reviewed',
      },
      {
         value: 'approved',
         label: 'Approved',
      },
      {
         value: 'rejected',
         label: 'Rejected',
      },
      {
         value: 'in-progress',
         label: 'In Progress',
      },
      {
         value: 'completed',
         label: 'Completed',
      }
   ],
   // figma, xd, pdf, url, [png, jpg, gif], svg, sheets, doc
   fileTypes: [
      {
         value: 'pdf',
         label: 'PDF',
         icon: 'file-pdf',
         regex: /\.pdf$/
      },
      {
         value: 'png',
         label: 'PNG',
         icon: 'file-png',
         regex: /\.png$/
      },
      {
         value: 'jpg',
         label: 'JPG',
         icon: 'file-jpg',
         regex: /\.jpg$/
      },
      {
         value: 'jpeg',
         label: 'JPEG',
         icon: 'file-jpg',
         regex: /\.jpeg$/
      },
      {
         value: 'gif',
         label: 'GIF',
         icon: 'file-image',
         regex: /\.gif$/
      },
      {
         value: 'svg',
         label: 'SVG',
         icon: 'file-svg',
         regex: /\.svg$/
      },
      {
         value: 'sheets',
         label: 'GoogleSheets',
         icon: 'table',
         regex: /docs\.google\.com\/spreadsheets/
      },
      {
         value: 'excel',
         label: 'Excel',
         icon: 'microsoft-excel-logo',
         regex: /\.xlsx$/
      },
      {
         value: 'doc',
         label: 'Google Doc',
         icon: 'file-doc',
         regex: /docs\.google\.com\/document/
      },
      {
         value: 'word',
         label: 'Word',
         icon: 'microsoft-word-logo',
         regex: /\.docx$/
      },
      {
         value: 'figma',
         label: 'Figma',
         icon: 'figma-logo',
         regex: /figma\.com\/design/
      },
      {
         value: 'codepen',
         label: 'Codepen',
         icon: 'codepen-logo',
         regex: /codepen\.io/
      }
   ]
}