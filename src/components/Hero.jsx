import './../App.css'
import heroBg from './../assets/hero.png'
import ButtonHero from './Button/ButtonHero'

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className='h1__hero'>
          Елеганс у
          <br /> простоті.
          <br /> Гармонія Землі
        </h1>
        <ButtonHero />
      </div>
    </section>
  )
}

export default Hero;
