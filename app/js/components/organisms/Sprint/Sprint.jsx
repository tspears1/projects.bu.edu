import { AssetCard } from "@components/molecules/AssetCard/AssetCard.jsx";

/**
 * @component Sprint - Main application component.
 *
 * @param {SprintProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Sprint = ({ sprint }) => {
  const { title, date, assetList } = sprint;
  const _date = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="project-sprint">
      <div className="project-sprint__header">
        <h3 className="project-sprint__title">{title}</h3>
        <div className="project-sprint__date">{_date}</div>
      </div>
      <ul className="project-sprint__list" data-sprint-display="table">
        <li className="project-sprint__list-header">
        </li>
        {assetList.map((asset, index) => (
          <li className="project-sprint__list-item" key={`asset-${index}`}>
            <AssetCard asset={asset} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sprint;
