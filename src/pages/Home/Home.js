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

const Home = () => {
  const desctiption = (
    <p><b>Comfort Frame Company</b> – виробник модульних каркасних будинків, що пропонує високоякісне, мобільне, доступне та енергоефективне житло. Ми будуємо мобільне, екологічне та енергоефективне, а головне за доступними цінами!</p>
  );
  return (
    <>
      <div className='image-wrapper d-none d-md-block'>
        <img src={Image} alt="A-Frame foto" class="img-fluid w-100"></img>
        <div className='overlay'>
          <div className='content-wrapper'>
            <h1>ВЛАСНЕ ЖИТЛО</h1>
            <h2>ЗА <span class="highlight">8</span> ТИЖНІВ</h2>
            <p>Ми Comfort Frame Company, і ми робимо модульні каркасні будинки, <br />
              в яких ти можеш жити, відпочивати, працювати та творити!</p>
            <div class="buttons">
              <a href="#" class="btn btn-outline">ДАЧА ПО-НОВОМУ</a>
              <a href="#" class="btn btn-filled">ОБРАТИ ДІЛЯНКУ</a>
            </div>
            <div className='pagination'>
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className='image-wrapper d-md-none d-sm-block'>
        <img src={ImageMobile} alt="A-Frame foto" class="img-fluid w-100"></img>
        <div className='overlay'>
          <div className='content-wrapper'>
            <h1>ВЛАСНЕ ЖИТЛО</h1>
            <h2>ЗА <span class="highlight">8</span> ТИЖНІВ</h2>
            <p>Ми Comfort Frame Company, і ми робимо модульні каркасні будинки, <br />
              в яких ти можеш жити, відпочивати, працювати та творити!</p>
            <div class="buttons">
              <a href="#" class="btn btn-filled">Калькулятор</a>
              <a href="tel:+380954198334" class="btn-phone">
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
            <div className='pagination'>
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <StatisticBlock title1="10" title2="50" title3="100%" description1="Років досвіду" description2="Років гарантії" description3="Фіксована ціна" />

      <InfoBlock backImage={BgdImage} image={AboutImage} arrowImage={AboutArrow}
        title={"COMFORT FRAME"} subTitle={"COMPANY"} description={desctiption} isArrow={true} isBtn={false} isRevert={false} />

      <InfoBlock backImage={BgdImage} image={DachaImage} arrowImage={AboutArrow}
        title={"ДАЧА"} subTitle={"ПО НОВОМУ"} description={desctiption} isArrow={false} isBtn={true} isRevert={true} />


      <StatisticBlock title1="ЕКО" title2="ЕНЕРГО" title3="РОЗШИРЕННЯ" description1="Екологічно безпечні матеріали та технології"
        description2="Енергоефективна технологія будівництва та якісні утеплюваніі матеріали" description3="Можливість розширення площі шляхом приєднання додаткового модулю" />

      <InfoBlock backImage={BgdImage} image={ArchiveImage} arrowImage={AboutArrow}
        title={"АРХІВ"} subTitle={"ЯК ЦЕ БУЛО"} description={desctiption} isArrow={true} isBtn={false} isRevert={false} />
    </>
  );
};

export default Home;