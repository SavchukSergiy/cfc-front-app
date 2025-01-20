import './staticticblock.css';

const StatiscitBlock = ({ title1, title2, title3, description1, description2, description3 }) => {
  return (
    <>
      <div class="container custom-styles text-center my-5">
        <div class="row justify-content-center">
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">{title1}</h2>
              <p class="description">{description1}</p>
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">{title2}</h2>
              <p class="description">{description2}</p>
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">{title3}</h2>
              <p class="description">{description3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default StatiscitBlock;