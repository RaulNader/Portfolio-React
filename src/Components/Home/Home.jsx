export function Home() {
  return (
    <>
      <div className=" home-section flex-column d-flex align-items-center  ">
        <div className="avatar-img">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            alt="person-img"
          ></img>
        </div>
        <h2 className="text-header mb-3 ">start framework</h2>
        <div className="text-center">
          <div className="line"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line"></div>
          <p className="text-description mt-4">
            graphic Artist - web Designer - illustrator
          </p>
        </div>
      </div>
    </>
  );
}
