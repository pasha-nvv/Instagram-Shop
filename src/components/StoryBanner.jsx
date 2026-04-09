import "./../App.css";
import sustainabilityImage from "./../assets/Banner/Sustainability.png";

const StoryBanner = () => {
  return (
    <section className="story-banner">
      <img
        src={sustainabilityImage}
        alt="Стійкість та природні матеріали"
        className="story-banner__image"
      />
      <div className="story-banner__content">
        <p className="story-banner__eyebrow">М'яко, природно, мінімалістично</p>
        <h3 className="story-banner__title">Природна краса, створений комфорт.</h3>
        <button type="button" className="story-banner__button">
          Переглянути
        </button>
      </div>
    </section>
  );
};

export default StoryBanner;
