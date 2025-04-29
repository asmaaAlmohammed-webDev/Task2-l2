import "./FooterComponent.css";
const FooterComponent = () => {
  return (
    <footer className="" data-aos="zoom-in-down" data-aos-duration="1500">
      <div className="row1">
        <div className="col1">
          <div className="logo">
            <img src="/assets/imgs/Logo.svg" alt="logo-img" />
            <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="infos">
            <div className="info">
              <div className="icon">
                <img src="/assets/imgs/Subtract.svg" alt="logo-img" />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="info">
              <div className="icon">
                <img src="/assets/imgs/phone.svg" alt="logo-img" />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="info">
              <div className="icon">
                <img src="/assets/imgs/location.svg" alt="logo-img" />
              </div>
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="col2 ">
          <div className="links">
            <h5>Home</h5>
            <a href="#">Features</a>
            <a href="#Our Testimonials">Our Testimonials</a>
            <a href="#FAQ">FAQ</a>
          </div>
          <div className="links">
            <h5>About Us</h5>
            <a href="#Our Mission">Our Mission</a>
            <a href="#Our Testimonials">Our Testimonials</a>
            <a href="#Our Vission">Our Vission</a>
            <a href="#Awards and Recognitions">Awards and Recognitions</a>
            <a href="#History">History</a>
            <a href="#Teachers">Teachers</a>
          </div>
        </div>
        <div className="col3 ">
          <div className="links">
            <h5>Academics</h5>
            <a href="#">Special Features</a>
            <a href="#">Gallery</a>
          </div>
          <div className="links">
            <h5>Contact Us</h5>
            <a href="#">Information</a>
            <a href="#">Map & Direction</a>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="policy">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="socail-icons">
          <div className="icon">
            <img src="/assets/imgs/Icon(5).svg" alt="logo-img" />
          </div>
          <div className="icon">
            <img src="/assets/imgs/location.svg" alt="logo-img" />
          </div>
          <div className="icon">
            <img src="/assets/imgs/twitter.svg" alt="logo-img" />
          </div>
        </div>
      </div>
      <div className="row3">
        <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
