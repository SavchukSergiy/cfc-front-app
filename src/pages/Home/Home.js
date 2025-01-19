import './Home.css';
import Image from './images/A-Frame-Main.jpg';

const Home = () => {
  return (
    // <div className='container-img'>
    //   <img src={Image} alt="A-Frame foto" class="img-fluid w-100"></img>
    // </div>
    <>

      <div className='full-screen-block '>
      <img src={Image} alt="A-Frame foto" class="img-fluid w-100"></img>
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