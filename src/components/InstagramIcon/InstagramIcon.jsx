import '../../App.css'
import Instagram from'../../assets/Icons/instagram_icon.png'


const InstagramIcon = () => {
  return (
    <a href="https://www.instagram.com/pasha.fdev" 
    target="_blank"   
    rel="noopener noreferrer"> 
    <img className='img__inst' src={Instagram} alt="" />
    </a>
  )
}

export default InstagramIcon;