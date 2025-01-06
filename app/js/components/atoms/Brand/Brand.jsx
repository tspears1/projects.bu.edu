// Context =================================
import { useDatabase } from "@context/database/database-context.jsx";

/**
 * @component Brand - Main application component.
 *
 * @param {BrandProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Brand = ({ tag = "div", className = '', ...props }) => {
  const { org } = useDatabase();
  if (!org?.brand) return null;

  const Comp = tag;
  return (
    <Comp className={`brand ${className}`} {...props}>
      <span className="brand__name">{org.brand}</span>
      {org?.brand_parent && (
        <span className="brand__parent">{org?.brand_parent}</span>
      )}
      {org?.brand_subparent && (
        <span className="brand__sub-parent">{org?.brand_subparent}</span>
      )}
    </Comp>
  );
};

Brand.displayName = "Brand";

export { Brand };
