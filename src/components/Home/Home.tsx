import { useState } from "react";
import Gallery from "components/Home/Gallery";
import Landing from "components/Home/Landing";

const Home = () => {
  const [isLanding, setIsLanding] = useState(true);

  const onExplore = () => {
    setIsLanding(false);
  };

  return (
    <div className="home-container">
      <Landing isLanding={isLanding} onExplore={onExplore} />
      <Gallery isLanding={isLanding} />
    </div>
  );
};

export default Home;
