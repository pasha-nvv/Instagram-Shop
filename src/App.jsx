import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Banner from "./components/Banner"
import Categories from "./components/Categories"
import StoryBanner from "./components/StoryBanner"
import FollowSection from "./components/FollowSection"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />
        <Products/>
        <Banner/>
        <Categories />
        <StoryBanner />
        <FollowSection />
      </main>

      <Footer/>
    </>
  );
}

export default App;
