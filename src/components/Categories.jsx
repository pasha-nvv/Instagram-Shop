import "./../App.css";
import mod1 from "./../assets/Modiweek/card1.png";
import mod2 from "./../assets/Modiweek/card2.png";
import mod3 from "./../assets/Modiweek/card3.png";
import mod4 from "./../assets/Modiweek/card4.png";

const modWeekItems = [
  { id: 1, image: mod1, name: "Неділя" },
  { id: 2, image: mod2, name: "Понеділок" },
  { id: 3, image: mod3, name: "Вівторок" },
  { id: 4, image: mod4, name: "Середа" },
];

const Categories = () => {
  return (
    <section id="modiweek" className="modiweek">
      <div className="modiweek__top">
        <h2 className="modiweek__title">Модівік</h2>
      </div>

      <div className="modiweek__grid">
        {modWeekItems.map((item) => (
          <article key={item.id} className="modiweek-card">
            <div className="modiweek-card__image-wrap">
              <img src={item.image} alt={item.name} className="modiweek-card__image" />
            </div>
            <div className="modiweek-card__meta">
              <p className="modiweek-card__name">{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
