import port1 from "../../assets/imgs/poert1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-section">
        <h2 className="text-header">portfolio component</h2>
        <div className="text-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="row g-5 ">
            <div className="col-lg-4 col-md-6">
              <div className="position-relative ">
                <img src={port1} alt="port1"></img>
                <div className="layer  ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative ">
                <img src={port2} alt="port2"></img>
                <div className="layer ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative  ">
                <img src={port3} alt="port3"></img>
                <div className="layer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative ">
                <img src={port1} alt="port1"></img>
                <div className="layer layer2  ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative ">
                <img src={port2} alt="port2"></img>
                <div className="layer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="position-relative overflow-hidden">
                <img src={port3} alt="port3"></img>
                <div className="layer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
