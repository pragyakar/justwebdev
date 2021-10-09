import { getStaticImageUrl } from "utils/image";
import { FiExternalLink, FiFolder } from "react-icons/fi";

interface IGalleryItemProps {
  label: string;
  thumbnailUrl: string;
  siteUrl: string;
  repoUrl: string;
  description: string;
}

const GalleryItem = (props: IGalleryItemProps) => {
  const visitRepo = () => {
    window.open(props.repoUrl, "_blank");
  };

  const visitSite = () => {
    window.open(props.siteUrl, "_blank");
  };

  return (
    <div className="gallery-item">
      <div className="gallery-item--overlay">
        <span>{props.label}</span>
        <div className="gallery-item--icons">
          <FiFolder className="external-icon" onClick={visitRepo} />
          <FiExternalLink className="external-icon" onClick={visitSite} />
        </div>
      </div>
      <img
        src={getStaticImageUrl(props.thumbnailUrl)}
        className="gallery-item--image"
        alt={props.label}
      />
    </div>
  );
};

export default GalleryItem;
