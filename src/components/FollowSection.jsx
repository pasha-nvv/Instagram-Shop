import "./../App.css";
import look1 from "./../assets/Follow/follow1.png";
import look2 from "./../assets/Follow/follow2.png";
import look3 from "./../assets/Follow/follow3.png";
import look4 from "./../assets/Follow/follow4.png";
import look5 from "./../assets/Follow/follow5.png";

const FollowSection = () => {
  return (
    <section id="follow" className="follow">
      <div className="follow__top">
        <h2 className="follow__title">Стежте за нами @modimal</h2>
      </div>

      <div className="follow__layout">
        <article className="follow__item follow__item--lead">
          <img src={look1} alt="Міський образ зі спідницею та жакетом" className="follow__image" />
        </article>

        <div className="follow__side">
          <div className="follow__row">
            <article className="follow__item follow__item--small">
              <img src={look2} alt="Повсякденний образ з блузою та штанами" className="follow__image" />
            </article>
            <article className="follow__item follow__item--small">
              <img src={look3} alt="Класичний образ із темним верхнім одягом" className="follow__image" />
            </article>
          </div>

          <div className="follow__row">
            <article className="follow__item follow__item--small">
              <img src={look4} alt="Монохромний образ на щодень" className="follow__image" />
            </article>
            <article className="follow__item follow__item--small">
              <img src={look5} alt="Мінімалістичний образ у нейтральних тонах" className="follow__image" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowSection;
