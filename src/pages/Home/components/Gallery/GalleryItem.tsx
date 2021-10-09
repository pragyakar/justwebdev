import { getStaticImageUrl } from "utils/image";

interface IGalleryItemProps {
  label: string;
  thumbnailUrl: string;
  description: string;
}

const GalleryItem = (props: IGalleryItemProps) => {
  return (
    <div className="gallery-item">
      <span className="gallery-item--label">{props.label}</span>
      <img
        src={getStaticImageUrl(props.thumbnailUrl)}
        className="gallery-item--image"
        alt={props.label}
      />
    </div>
  );
};

export default GalleryItem;
