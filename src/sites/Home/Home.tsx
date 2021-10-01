import { useState } from "react";
import Gallery from "sites/Home/components/Gallery";
import Landing from "sites/Home/components/Landing";
import Footer from "./components/Footer";

const Home = () => {
  const [isLanding, setIsLanding] = useState(true);

  const onExplore = () => {
    setIsLanding(false);
  };

  return (
    <div className="home-container">
      <Landing isLanding={isLanding} onExplore={onExplore} />
      {!isLanding && (
        <>
          <div className="body-container">
            <Gallery isLanding={isLanding} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
