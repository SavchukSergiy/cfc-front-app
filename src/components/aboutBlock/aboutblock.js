import './aboutblock.css';
import BgdImage from '../generalImages/vector.jpg';
import AboutImage from './images/45.jpg';
import AboutArrow from './images/Arrow 8.jpg';

const AboutBlock = () => {
  return (
    <>
      <div className='about-us-main'>
        <div className='row'>
          <div className='col-md-5 about-img-block order-1'>
            <div className='aboutimg-border'></div>
            <div className='about-overlay'>
              <img src={AboutImage} alt="About image" class="img-fluid w-100"></img>
            </div>
          </div>
          <div className='col-md-4 about-text-block order-2'>
            <div className='arow-block d-none d-sm-block'>
              <img src={AboutArrow} alt="Arrow image" class="img-fluid"></img>
            </div>

            <div className='text-block'>
              <h1 className='about-title'>COMFORT FRAME</h1>
              <span className='about-subtitle'>COMPANY</span>
              <p className='about-description'>
                <b>Comfort Frame Company</b> – виробник модульних каркасних будинків, що пропонує високоякісне, мобільне, доступне та енергоефективне житло. Ми будуємо мобільне, екологічне та енергоефективне, а головне
                за доступними цінами!
              </p>
            </div>
          </div>
          <div className='col-md-3 about-back-image d-none d-sm-block order-3'>
            <img src={BgdImage} alt="Background image" class=" back-image-vector img-fluid w-100 "></img>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutBlock;