import "./../App.css";
import blouseImage from "./../assets/Banner/Blouse.png";
import pantsImage from "./../assets/Banner/Pants.png";
import dressesImage from "./../assets/Banner/Dreses.png";
import outerwearImage from "./../assets/Banner/Outwear.png";

const Banner = () => {
  return (
    <section className="banner">
      <h2 id="collection" className="banner__title">Колекція</h2>

      <div className="banner-grid">
        <div className="banner-column">
          <article className="banner-card banner-card--blouse">
            <img
              src={blouseImage}
              alt="Крупний план блузи"
              className="banner-card__image"
            />
          </article>

          <article className="banner-card banner-card--dresses">
            <img
              src={dressesImage}
              alt="Дівчина у бежевій сукні у кріслі"
              className="banner-card__image"
            />
          </article>
        </div>

        <div className="banner-column">
          <article className="banner-card banner-card--pants">
            <img
              src={pantsImage}
              alt="Дівчина у блузі та зелених штанах"
              className="banner-card__image"
            />
          </article>

          <article className="banner-card banner-card--outerwear">
            <img
              src={outerwearImage}
              alt="Крупний план коричневого пальта"
              className="banner-card__image"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;
