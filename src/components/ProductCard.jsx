import "./../App.css";

const ProductCard = ({
  image,
  title,
  subtitle,
  price,
  colors = [],
  imagePosition = "center center",
}) => {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="product-card__image"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__subtitle">{subtitle}</p>

      <div className="product-card__bottom">
        <div className="product-card__colors">
          {colors.map((color) => (
            <span
              key={`${title}-${color}`}
              className="product-card__dot"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span className="product-card__price">{price} грн</span>
      </div>
    </article>
  );
};

export default ProductCard;
