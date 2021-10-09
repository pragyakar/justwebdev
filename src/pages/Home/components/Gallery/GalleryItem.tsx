import { getStaticImageUrl } from "utils/image";
import { FiExternalLink, FiFolder } from "react-icons/fi";

interface IGalleryItemProps {
  label: string;
  thumbnailUrl: string;
  description: string;
}

const GalleryItem = (props: IGalleryItemProps) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item--overlay">
        <span>{props.label}</span>
        <div className="gallery-item--icons">
          <FiFolder className="external-icon" />
          <FiExternalLink className="external-icon" />
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
