export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="card-group">
          <div className="card">
            <h3 className="text-header">location</h3>
            <p className="text-description">2215 john daniel drive</p>
            <p className="text-description">Clark, MO 65243</p>
          </div>
          <div className="card">
            <h3 className="text-header">around the web</h3>
            <div className="icons ">
              <i className="fa-brands fa-facebook mx-1 icon"></i>
              <i className="fa-brands fa-twitter mx-1 icon"></i>
              <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
              <i className="fa-solid fa-globe mx-1 icon"></i>
            </div>
          </div>

          <div className="card">
            <h3 className="text-header">about freelancer</h3>
            <p className="text-description">
              freelance is a free to use, licensed bootstrap theme created by
              route
            </p>
          </div>
        </div>
      </div>
      <div className="last-section text-center">
        <p className="text-description">copyright © your website 2021</p>
      </div>
    </>
  );
}
