/**
 * @component Brand - Main application component.
 *
 * @param {BrandProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Brand = ({ tag = "div", org = {}, ...props }) => {
  const { brand, brand_parent, brand_subparent } = org;
  if (!brand) return null;

  const Comp = tag;
  return (
    <Comp className="site-brand" {...props}>
      <span className="site-brand__name">{brand}</span>
      {brand_parent && (
        <span className="site-brand__parent">{brand_parent}</span>
      )}
      {brand_subparent && (
        <span className="site-brand__sub-parent">{brand_subparent}</span>
      )}
    </Comp>
  );
};

Brand.displayName = "Brand";

export { Brand };
