import LogoWhite from '../../static/images/logo-white.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer>
      <div className="footer__area footer-bg">
        <div className="footer__top pt-90 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <a href="index.html">
                        <Image src={LogoWhite} width="100" height="100" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="footer__widget-body">
                    <p>
                      Great lesson ideas and lesson plans for ESL teachers!
                      Educators can customize lesson plans to best.
                    </p>

                    <div className="footer__social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="social_facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="tw">
                            <i className="social_twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pin">
                            <i className="social_pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Company</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link">
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Courses</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Instructor</a>
                        </li>
                        <li>
                          <a href="#">Career</a>
                        </li>
                        <li>
                          <a href="#">Become a Teacher</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Platform</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link">
                      <ul>
                        <li>
                          <a href="#">Browse Library</a>
                        </li>
                        <li>
                          <a href="#">Library</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">News & Blogs</a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Subscribe</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe">
                      <form action="#">
                        <div className="footer__subscribe-input mb-15">
                          <input
                            type="email"
                            placeholder="Your email address"
                          />
                          <button type="submit">
                            <i className="far fa-arrow-right"></i>
                            <i className="far fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                      <p>
                        Get the latest news and updates right at your inbox.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__copyright text-center">
                  <p>
                    © 2022 ENGLISH ZONE, All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;