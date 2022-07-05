import ImageCtaOne from '../../static/images/cta/cta-shape-1.png';
import ImageCtaTwo from '../../static/images/cta/cta-shape-2.png';
const test = () => {
  return (
    <section className="cta__area pb-150">
      <div className="container">
        <div className="cta__inner-3 p-relative grey-bg-2 pt-75 pb-75 fix">
          <div className="cta__shape-3">
            <img className="cta-2" src={ImageCtaOne.src} alt="" />
            <img className="cta-3" src={ImageCtaTwo.src} alt="" />
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content text-center p-relative">
                <span>Coming June</span>
                <h3 className="cta__title-2">Built to stand out.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__form grey-bg-2">
                <div className="cta__form-inner">
                  <form action="#">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <button type="submit" className="e-btn e-btn-6">
                      Take A Free Course
                    </button>
                  </form>
                </div>
                <div className="cta__agree d-flex align-items-center">
                  <input className="e-check-input" type="checkbox" id="e-agree" />
                  <label className="e-check-label">
                    By signing up you agree to our{" "}
                    <a href="#"> Terms & Conditions</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default test;
