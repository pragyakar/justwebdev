interface IGalleryProps {
  isLanding: boolean;
}

const Gallery = (props: IGalleryProps) => {
  const { isLanding } = props;
  return (
    <div className={`gallery ${isLanding ? "hide" : "show"}`}>
      <div className="gallery--item"></div>
      <div className="gallery--item"></div>
      <div className="gallery--item"></div>
      <div className="gallery--item"></div>
      <div className="gallery--item"></div>
    </div>
  );
};

export default Gallery;
