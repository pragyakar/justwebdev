import { useState } from "react";
import Gallery from "sites/Home/components/Gallery";
import Landing from "sites/Home/components/Landing";

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
