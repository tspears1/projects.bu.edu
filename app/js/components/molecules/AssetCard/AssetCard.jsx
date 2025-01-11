// React ====================================
import React from "react";

// Components ===============================
import { Button } from "@components/atoms/Button/Button.jsx";

/**
 * @component AssetCard - Main application component.
 *
 * @param {AssetCardProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AssetCard = ({ asset, className = "", ...props }) => {
  const getFileType = (url, types) => {
    if (!url) return null;
    return types.find((fileType) => fileType.regex.test(fileUrl));
  };

  const { title, description, lastModified, fileUrl, status } = asset;
  const { icon, label } = getFileType(fileUrl);

  const _lastModified = new Date(lastModified).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className={`asset-card ${className}`} {...props}>
      <div className="asset-card__title">{title}</div>
      <div className="asset-card__description">{description}</div>
      <div className="asset-card__last-modified">{_lastModified}</div>
      <Button className="asset-card__file-url" variant="icon" asChild={true}>
        <a href={fileUrl} target="_blank" rel="noreferrer">{label}</a>
      </Button>
      <div className="asset-card__status">{status}</div>
    </article>
  );
};

AssetCard.displayName = "AssetCard";

export { AssetCard };

/**
 * @typedef {Object} AssetCardProps - AssetCard component props.
 *
 * @property {Object} asset - Asset object.
 * @property {string} className - AssetCard className.
 */
