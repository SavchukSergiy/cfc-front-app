import './modal.css';
import { useTranslation } from "react-i18next";

const Modal = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="contactModalLabel">{t('writeus')}</h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">{t('modal-name')}</label>
                  <input type="text" className="form-control" id="name" placeholder={t('modal-placeholder-name')} required></input>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">{t('modal-mail')}</label>
                  <input type="email" className="form-control" id="email" placeholder="post@gmail.com"></input>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">{t('modal-phone')}</label>
                  <input type="tel" className="form-control" id="phone" placeholder="+380 (00) 000 00 00" required></input>
                </div>
                <div className="mb-3">
                  <label for="message" class="form-label">{t('modal-message')}</label>
                  <textarea className="form-control" id="message" rows="3" placeholder={t('modal-placeholder-msg')}></textarea>
                </div>
                <div className="d-grid btn-write-us">
                  <button type="submit" className="btn btn-primary custom-button">{t('modal-send-btn')}</button>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <div class="p-3 me-3">
                <h5>
                  +380954198334
                </h5></div>
              <div class="p-3">
                <div className="d-flex justify-content-center gap-3 social-media">
                  <a href="#" className="text-black icon-custom">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-black icon-custom">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-black icon-custom">
                    <i className="bi bi-telegram"></i>
                  </a>
                  <a href="#" className="text-black icon-custom">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;