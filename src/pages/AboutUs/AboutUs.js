import './AboutUs.css';
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <h1>About Us</h1>
    </div>
  );
};

export default AboutUs;