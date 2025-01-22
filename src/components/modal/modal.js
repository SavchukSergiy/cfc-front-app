import './modal.css';

const Modal = () => {
  return (
    <>
      <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="contactModalLabel">НАПИШІТЬ НАМ!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="text-center text-muted">Знайдіть відповіді на свої питання з нашим менеджером</p>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">ІМ’Я*</label>
                  <input type="text" class="form-control" id="name" placeholder="Олександр/Анастасія" required></input>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">E-MAIL</label>
                  <input type="email" class="form-control" id="email" placeholder="post@gmail.com"></input>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">ТЕЛЕФОН*</label>
                  <input type="tel" class="form-control" id="phone" placeholder="+380 (00) 000 00 00" required></input>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">ПОВІДОМЛЕННЯ</label>
                  <textarea class="form-control" id="message" rows="3" placeholder="Я хочу дізнатися, як купити будинок..."></textarea>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">НАДІСЛАТИ</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <p class="text-muted">*Обов’язково для заповнення</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;