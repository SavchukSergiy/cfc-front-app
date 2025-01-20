import './aboutblock.css';
import BgdImage from '../generalImages/vector.jpg';
import AboutImage from './images/45.jpg';

const AboutBlock = () => {
  return (
    <>
      <div className='about-us-main'>
        <div className='row'>
          <div className='col-5 about-img-block'>
            <div className='aboutimg-border'></div>
            <div className='overlay'>
              <img src={AboutImage} alt="About image" class="img-fluid w-100"></img>
            </div>
          </div>
          <div className='col-4 about-text'>
            <h1>Comfort Frame</h1>
            <h1>Company</h1>
            <p className=''>
              Comfort Frame Company – виробник модульних каркасних будинків, що пропонує високоякісне, мобільне, доступне та енергоефективне житло. Ми будуємо мобільне, екологічне та енергоефективне, а головне
              за доступними цінами!
            </p>
          </div>
          <div className='col-3 about-back-image'>
            <img src={BgdImage} alt="Background image" class=" back-image-vector img-fluid w-100 "></img>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutBlock;