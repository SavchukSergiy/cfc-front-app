import './infoblock.css';
import { useMediaQuery } from 'react-responsive';

const InfoBlock = ({ backImage, image, arrowImage, title, subTitle, description, isArrow, isBtn, isRevert, isbackImage }) => {

  let pos1, pos2, pos3, infoImgBlock;

  if (isRevert) {
    pos1 = 3;
    pos2 = 2;
    pos3 = 1;
    infoImgBlock = "info-img-block-revert"
  } else {
    pos1 = 1;
    pos2 = 2;
    pos3 = 3;
    infoImgBlock = "info-img-block"
  }

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767.98px)' });

  return (
    <>
      <div className='info-us-main'>
        <div className='row'>
          <div className={!isSmallScreen ? `col-md-5 ${infoImgBlock} order-${pos1}` : `col-md-5 ${infoImgBlock} order-1`}>
            {!isRevert ? (
              <>
                <div className='infoimg-border'></div>
                <div className='info-overlay'>
                  <img src={image} alt="info image" class="img-fluid w-100"></img>
                </div>
              </>
            ) : (
              <>
                <div className='infoimg-border-revert'></div>
                <div className='info-overlay-revert'>
                  <img src={image} alt="info image" class="img-fluid w-100"></img>
                </div>
              </>
            )}

          </div>
          <div className={!isSmallScreen ? `col-md-4 info-text-block  order-first order-${pos2}` : 'col-md-4 info-text-block  order-first order-2'}>
            {isArrow ? (
              <div className='arow-block d-none d-sm-block'>
                <img src={arrowImage} alt="Arrow image" class="img-fluid"></img>
              </div>
            ) : (
              <></>
            )}

            <div className='text-block'>
              <h1 className='info-title'>{title}</h1>
              <span className='info-subtitle'>{subTitle}</span>
              <p className='info-description'>
                {description}
              </p>
              {isBtn ? (
                <div class="buttons-info-block">
                  <a href="#" class="btn btn-filled">Детальніше</a>
                </div>
              ) : (
                <> </>
              )}

            </div>
          </div>

          <div className={!isSmallScreen ? `col-md-3 info-back-image d-none d-md-block order-${pos3}` : 'col-md-3 info-back-image d-none d-md-block order-3'}>
            {!isRevert ? (
              <img src={backImage} alt="Background image" class="back-image-vector img-fluid w-100"></img>
            ) : (
              <img src={backImage} alt="Background image" class="back-image-vector mirrow img-fluid w-100"></img>
            )}

          </div>
        </div>
      </div>
    </>
  )
};

export default InfoBlock;