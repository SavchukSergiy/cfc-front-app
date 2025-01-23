import './modal.css';

const Modal = () => {
  return (
    <>
      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">НАПИШІТЬ НАМ!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-center text-muted">Знайдіть відповіді на свої питання з нашим менеджером</p>
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">ІМ’Я*</label>
                  <input type="text" className="form-control" id="name" placeholder="Олександр/Анастасія" required></input>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">E-MAIL</label>
                  <input type="email" className="form-control" id="email" placeholder="post@gmail.com"></input>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">ТЕЛЕФОН*</label>
                  <input type="tel" className="form-control" id="phone" placeholder="+380 (00) 000 00 00" required></input>
                </div>
                <div className="mb-3">
                  <label for="message" class="form-label">ПОВІДОМЛЕННЯ</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Я хочу дізнатися, як купити будинок..."></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">НАДІСЛАТИ</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <p className="text-muted">*Обов’язково для заповнення</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;