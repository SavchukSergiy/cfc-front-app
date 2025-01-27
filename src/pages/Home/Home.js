import './Home.css';
import Image from './images/A-Frame-Main.jpg';
import ImageMobile from './images/A-Frame-Main-Mobile.jpg';
import StatisticBlock from '../../components/statisticBlock/staticticblock';
import InfoBlock from '../../components/infoBlock/infoblock';
import BgdImage from '../../components/generalImages/vector.jpg';
import AboutImage from '../../components/generalImages/45.jpg';
import AboutArrow from '../../components/generalImages/Arrow 8.jpg';
import DachaImage from '../../components/generalImages/dacha-new.jpg';
import ArchiveImage from '../../components/generalImages/archive-photo.jpg';
import Modal from '../../components/modal/modal';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const desctiption = (
    <p><b>{t('info-block-1-description1')}</b> {t('info-block-1-description2')}</p>
  );

  const menuAboutUsLink = "/aboutus";
  const menuCottageNewWayLink = "/cottagenewway";
  const menuArchiveLink = "/archive";
  const videoLink = "https://www.youtube.com/embed/_VECI_d-8vI";

  return (
    <>
      <div className='image-wrapper d-none d-md-block'>
        <img src={Image} alt="A-Frame foto" className="img-fluid w-100"></img>
        <div className='overlay'>
          <div className='content-wrapper'>
            <h1>{t('homepage-slider-title')}</h1>
            <h2>{t('homepage-slider-in')} <span className="highlight">8</span> {t('homepage-slider-weeks')}</h2>
            <p>{t('homepage-slider-description1')} <br />
              {t('homepage-slider-description2')}</p>
            <div className="buttons">
              <a href="#" className="btn btn-outline">{t('homepage-slider-btn1')}</a>
              <a href="#" className="btn btn-filled">{t('homepage-slider-btn2')}</a>
            </div>
            <div className='pagination'>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className='image-wrapper d-md-none d-sm-block'>
        <img src={ImageMobile} alt="A-Frame foto" className="img-fluid w-100"></img>
        <div className='overlay'>
          <div className='content-wrapper'>
            <h1>{t('homepage-slider-title')}</h1>
            <h2>{t('homepage-slider-in')} <span className="highlight">8</span> {t('homepage-slider-weeks')}</h2>
            <p>{t('homepage-slider-description1')} <br />
              {t('homepage-slider-description2')}</p>
            <div className="buttons">
              <a href="#" className="btn btn-filled">{t('homepage-slider-btn3')}</a>
              <a href="tel:+380954198334" className="btn-phone">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
            <div className='pagination'>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <StatisticBlock title1={t('statistic-block-1-title1')} title2={t('statistic-block-1-title2')} title3={t('statistic-block-1-title3')} description1={t('statistic-block-1-description1')} description2={t('statistic-block-1-description2')} description3={t('statistic-block-1-description3')} />

      <InfoBlock backImage={BgdImage} image={AboutImage} arrowImage={AboutArrow}
        title={t('info-block-1-title')} subTitle={t('info-block-1-subtitle')} description={desctiption} isArrow={true} isBtn={false} isRevert={false} link={menuAboutUsLink} />

      <InfoBlock backImage={BgdImage} image={DachaImage} arrowImage={AboutArrow}
        title={t('info-block-2-title')} subTitle={t('info-block-2-subtitle')} description={desctiption} isArrow={false} isBtn={true} isRevert={true} link={menuCottageNewWayLink} />


      {/* <StatisticBlock title1="ЕКО" title2="ЕНЕРГО" title3="РОЗШИРЕННЯ" description1="Екологічно безпечні матеріали та технології"
        description2="Енергоефективна технологія будівництва та якісні утеплюваніі матеріали" description3="Можливість розширення площі шляхом приєднання додаткового модулю" /> */}

      <div className="video-container">
        <iframe width="100%" height="250vh" src={videoLink} frameborder="0" allowFullScreen="true"></iframe>
      </div>

      <InfoBlock backImage={BgdImage} image={ArchiveImage} arrowImage={AboutArrow}
        title={t('info-block-3-title')} subTitle={t('info-block-3-subtitle')} description={desctiption} isArrow={true} isBtn={false} isRevert={false} link={menuArchiveLink} />

      <div className='d-flex justify-content-center align-items-center mb-5'>
        <div className="buttons-info-block" id="myButton" data-bs-toggle="modal" data-bs-target="#contactModal">
          <a href="#" className="btn btn-filled">{t('writeus')}</a>
        </div>
      </div>

      <Modal />
    </>
  );
};

export default Home;