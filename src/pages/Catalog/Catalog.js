import './Catalog.css';
import { useTranslation } from "react-i18next";

const Catalog = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <h1>Catalog</h1>
    </div>
  );
};

export default Catalog;