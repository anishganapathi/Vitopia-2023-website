import React from "react";
import "./footerCSS/footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-footer">
          <div className="row">
            <div>
              <img
                className="white-logo"
                src="https://vtop2.vitap.ac.in/vtop/assets/img/new%20VIT_AP%20logo.png"
              ></img>
            </div>
            {/* <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Simply dummy text</a>
                  </li>
                  <li>
                    <a href="#">The printing and typesetting </a>
                  </li>
                  <li>
                    <a href="#">Standard dummy text</a>
                  </li>
                  <li>
                    <a href="#">Type specimen book</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/*- END COL */}
            {/* <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Page Link</h4>
                <ul>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Simply dummy text</a>
                  </li>
                  <li>
                    <a href="#">The printing and typesetting </a>
                  </li>
                  <li>
                    <a href="#">Standard dummy text</a>
                  </li>
                  <li>
                    <a href="#">Type specimen book</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/*- END COL */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                {/* <h4>Subscribe today</h4> */}
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    {/* <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Enter Email Address"
                    /> */}
                    {/* <button type="button" className="subscribe__btn">
                      <i className="fas fa-paper-plane" />
                    </button> */}
                    <div>
                      <h2 className="contact-page">Contact Us:</h2>
                    </div>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">
                Designed and Developed by <a href="#">Arize</a>
                {" and "}
                <a href="#">Team Next</a>
              </p>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
    </div>
  );
}
