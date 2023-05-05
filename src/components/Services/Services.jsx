import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [modal, setModal] = useState(0);

  const toggleModal = (index) => {
    setModal(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 1 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Product Designer</h3>
              <p className="services-modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit similique sequi magni iusto, consequatur laborum.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services title">
              UI/Ux <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 2 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">UI/UX Designer</h3>
              <p className="services-modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit similique sequi magni iusto, consequatur laborum.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 3 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit similique sequi magni iusto, consequatur laborum.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user Interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
