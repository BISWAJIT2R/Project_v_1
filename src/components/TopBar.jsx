import logo from "../assets/logo-icon.jpeg";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-box flex-between gap-5 relative h-full">
        <img
          src={logo}
          alt="LOGO"
          className=" h-full w-20 rounded-full relative"
        />
        <h3 className="font-base">Hello Studio</h3>
      </div>
    </div>
  );
};

export default TopBar;
