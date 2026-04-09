import "./../App.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer__content">
        <div className="footer__newsletter">
          <h3 className="footer__title">Підпишіться та отримайте 10% на перше замовлення</h3>
          <form className="footer__form">
            <input
              className="footer__input"
              type="email"
              placeholder="Введіть email"
              aria-label="Електронна пошта"
            />
            <button className="footer__button" type="button">
              Підписатись
            </button>
          </form>
        </div>

        <div className="footer__links">
          <a href="#popular">Магазин</a>
          <a href="#collection">Колекція</a>
          <a href="#modiweek">Модівік</a>
          <a href="#follow">Соцмережі</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">(c) 2026 Modimal. Усі права захищені.</p>
        <div className="footer__social">
          <span />
          <span />
          <span />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
