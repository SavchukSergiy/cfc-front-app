import './staticticblock.css';

const StatiscitBlock = () => {
  return (
    <>
      <div class="container text-center my-5">
        <div class="row justify-content-center">
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">10</h2>
              <p class="description">Років досвіду</p>
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">50+</h2>
              <p class="description">Років гарантії</p>
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="position-relative">
              <div class="circle-bg"></div>
              <h2 class="value">100%</h2>
              <p class="description">Фіксована ціна</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default StatiscitBlock;