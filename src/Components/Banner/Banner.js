import React from "react";
const bannerImages = require.context("../../assets/banner", true);

function Banner() {
  const velocityBanner = 3000;

  return (
    <div className="row w-100 m-0">
      <div
        id="carouselExampleCaptions"
        className="carousel slide p-0 "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval={velocityBanner}
          >
            <img
              /* style={{height:"400px"}} */
              src={bannerImages(`./BannerCrer1.png`)}
              className="d-block w-100"
              alt="..."
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval={velocityBanner}>
            <img
              src={bannerImages(`./BannerCrer2.png`)}
              className="d-block w-100"
              alt="..."
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval={velocityBanner}>
            <img
              src={bannerImages(`./BannerCrer3.png`)}
              className="d-block w-100"
              alt="..."
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval={velocityBanner}>
            <img
              src={bannerImages(`./BannerCrer4.png`)}
              className="d-block w-100"
              alt="..."
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
