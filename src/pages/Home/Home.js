import './Home.css';
import Image from './images/A-Frame-Main.jpg';

const Home = () => {
  return (
    <>

      <div className='image-wrapper'>
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

      <div>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
        <p>asdfasdfsadfsadfsadfsadfsdaf</p>
      </div>
    </>
  );
};

export default Home;