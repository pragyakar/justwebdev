interface ILandingProps {
  isLanding: boolean;
  onExplore: () => void;
}

const Landing = (props: ILandingProps) => {
  const { isLanding, onExplore } = props;
  
  return (
    <div className={`landing ${isLanding ? "show" : "hide"}`}>
      <span className="landing--title">JustWebDev.</span>
      <span className="landing--button" onClick={onExplore}>
        Explore
      </span>
    </div>
  );
};

export default Landing;
