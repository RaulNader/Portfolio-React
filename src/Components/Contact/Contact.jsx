export default function Contact() {
  return (
    <>
      <div className="contact-us">
        <h2 className="text-header">contact section</h2>
        <div className="text-center mb-3">
          <div className="line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line"></div>
          <form className="w-50 p-3 mx-auto mt-5 p-5">
            <input
              type="text"
              className="styled-input"
              placeholder="userName"
            />
            <input
              type="number"
              className="styled-input"
              placeholder="userAge"
            />
            <input
              type="email"
              className="styled-input"
              placeholder="userEmail"
            />
            <input
              type="password"
              className="styled-input"
              placeholder="userPassword"
            />
            <button className="btn text-white">send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
