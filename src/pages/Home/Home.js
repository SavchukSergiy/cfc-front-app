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

const Home = () => {

  const desctiption = (
    <p><b>Comfort Frame Company</b> – виробник модульних каркасних будинків, що пропонує високоякісне, мобільне, доступне та енергоефективне житло. Ми будуємо мобільне, екологічне та енергоефективне, а головне за доступними цінами!</p>
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
            <h1>ВЛАСНЕ ЖИТЛО</h1>
            <h2>ЗА <span className="highlight">8</span> ТИЖНІВ</h2>
            <p>Ми Comfort Frame Company, і ми робимо модульні каркасні будинки, <br />
              в яких ти можеш жити, відпочивати, працювати та творити!</p>
            <div className="buttons">
              <a href="#" className="btn btn-outline">ДАЧА ПО-НОВОМУ</a>
              <a href="#" className="btn btn-filled">ОБРАТИ ДІЛЯНКУ</a>
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
            <h1>ВЛАСНЕ ЖИТЛО</h1>
            <h2>ЗА <span className="highlight">8</span> ТИЖНІВ</h2>
            <p>Ми Comfort Frame Company, і ми робимо модульні каркасні будинки, <br />
              в яких ти можеш жити, відпочивати, працювати та творити!</p>
            <div className="buttons">
              <a href="#" className="btn btn-filled">Калькулятор</a>
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

      <StatisticBlock title1="10" title2="50+" title3="100%" description1="Років досвіду" description2="Років гарантії" description3="Фіксована ціна" />

      <InfoBlock backImage={BgdImage} image={AboutImage} arrowImage={AboutArrow}
        title={"COMFORT FRAME"} subTitle={"COMPANY"} description={desctiption} isArrow={true} isBtn={false} isRevert={false} link={menuAboutUsLink} />

      <InfoBlock backImage={BgdImage} image={DachaImage} arrowImage={AboutArrow}
        title={"ДАЧА"} subTitle={"ПО-НОВОМУ"} description={desctiption} isArrow={false} isBtn={true} isRevert={true} link={menuCottageNewWayLink} />


      {/* <StatisticBlock title1="ЕКО" title2="ЕНЕРГО" title3="РОЗШИРЕННЯ" description1="Екологічно безпечні матеріали та технології"
        description2="Енергоефективна технологія будівництва та якісні утеплюваніі матеріали" description3="Можливість розширення площі шляхом приєднання додаткового модулю" /> */}

      <div className="video-container">
        <iframe width="100%" height="250vh" src={videoLink} frameborder="0" allowFullScreen="true"></iframe>
      </div>

      <InfoBlock backImage={BgdImage} image={ArchiveImage} arrowImage={AboutArrow}
        title={"АРХІВ"} subTitle={"ЯК ЦЕ БУЛО"} description={desctiption} isArrow={true} isBtn={false} isRevert={false} link={menuArchiveLink} />

      <div className='d-flex justify-content-center align-items-center mb-5'>
        <div className="buttons-info-block" id="myButton" data-bs-toggle="modal" data-bs-target="#contactModal">
          <a href="#" className="btn btn-filled">НАПИШІТЬ НАМ</a>
        </div>
      </div>

      <Modal />
    </>
  );
};

export default Home;