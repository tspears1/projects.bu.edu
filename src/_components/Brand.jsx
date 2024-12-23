const Brand = ({ tag: Tag = 'div', org = {} }) => {
   const { brand, brand_parent, brand_subparent } = org
   if (!brand) return null

   return (
      <Tag className='site-brand'>
         <span className='site-brand__name'>{brand}</span>
         {brand_parent && <span className='site-brand__parent'>{brand_parent}</span>}
         {brand_subparent && <span className='site-brand__subparent'>{brand_subparent}</span>}
      </Tag>
   )
}

export default Brand