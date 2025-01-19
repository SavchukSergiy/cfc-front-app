import './Home.css';
import Image from './images/A-Frame-Main.png';

const Home = () => {
  return (
    <div >
      <div class="background-container">
        <div class="overlay">
          <div class="content">
            <div>Власне житло за <span className='digitStyle'>8</span> тижнів</div>
          </div>
        </div>
      </div>
      <div className='testBlock'>
        New Block
      </div>
    </div>
  );
};

export default Home;