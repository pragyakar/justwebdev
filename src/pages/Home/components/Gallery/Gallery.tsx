import sites, { ISite } from "configs/sites";
import GalleryItem from "./GalleryItem";
interface IGalleryProps {
  isLanding: boolean;
}

const Gallery = (props: IGalleryProps) => {
  const { isLanding } = props;
  return (
    <div className={`gallery ${isLanding ? "hide" : "show"}`}>
      {sites.map((site: ISite) => (
        <GalleryItem
          key={site.id}
          label={site.label}
          description={site.description || ""}
          thumbnailUrl={site.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default Gallery;
