import './staticticblock.css';

const StatiscitBlock = ({ title1, title2, title3, description1, description2, description3 }) => {
  return (
    <>
      <div className="container custom-styles text-center my-5">
        <div className="row justify-content-center">
          <div className="col-4 mb-4">
            <div className="position-relative">
              <div className="circle-bg"></div>
              <h2 className="value">{title1}</h2>
              <p className="description">{description1}</p>
            </div>
          </div>
          <div className="col-4 mb-4">
            <div className="position-relative">
              <div className="circle-bg"></div>
              <h2 className="value">{title2}</h2>
              <p className="description">{description2}</p>
            </div>
          </div>
          <div className="col-4 mb-4">
            <div className="position-relative">
              <div className="circle-bg"></div>
              <h2 className="value">{title3}</h2>
              <p className="description">{description3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default StatiscitBlock;