import "./../App.css";
import tailoredStretch from "./../assets/Products/tailored-stretch.png";
import technicalSilk from "./../assets/Products/silk.png";
import coolWeave from "./../assets/Products/Weave.png";
import urbanFlow from "./../assets/Products/Flow.png";
import linenEase from "./../assets/Products/linen-ease.png";
import softMotion from "./../assets/Products/Dress.png";
import ProductCard from "./ProductCard";

const productsMock = [
  {
    id: 1,
    image: tailoredStretch,
    title: "Стрейч-брюки",
    subtitle: "Прямий повсякденний крій",
    price: 2890,
    colors: ["#1c1f26", "#355070", "#d8ded5"],
  },
  {
    id: 2,
    image: technicalSilk,
    title: "Шовкова сукня",
    subtitle: "Легкий літній силует",
    price: 3490,
    colors: ["#6f7f40", "#2a3d55", "#111111"],
  },
  {
    id: 3,
    image: coolWeave,
    title: "Сукня міді",
    subtitle: "Базовий елегантний образ",
    price: 3290,
    colors: ["#cbb7e5", "#8f9a72", "#4d6456"],
  },
  {
    id: 4,
    image: urbanFlow,
    title: "Міський комплект",
    subtitle: "Комфорт на кожен день",
    price: 2590,
    colors: ["#1a3110", "#a9b4c2", "#d1c2ad"],
    imagePosition: "center 38%",
  },
  {
    id: 5,
    image: linenEase,
    title: "Лляний образ",
    subtitle: "Легкий верхній шар",
    price: 2190,
    colors: ["#f0e3d0", "#6b6f6a", "#293241"],
    imagePosition: "center 35%",
  },
  {
    id: 6,
    image: softMotion,
    title: "Мінімалістична сукня",
    subtitle: "Чистий витончений крій",
    price: 3790,
    colors: ["#1d3557", "#8d99ae", "#adb5bd"],
    imagePosition: "center 36%",
  },
];

const Products = () => {
  return (
    <section className="products">
      <div className="products__top">
        <h2 id="popular" className="h2__product">Популярні товари</h2>
        <a href="#modiweek" className="products__view-all">
          Дивитись більше
        </a>
      </div>

      <div className="products-flex">
        {productsMock.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            colors={product.colors}
            imagePosition={product.imagePosition}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
