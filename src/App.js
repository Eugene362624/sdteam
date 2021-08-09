import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import SideBar from "./components/SideBar/SideBar";
import Stack from "./components/Stack/Stack";
import Services from "./components/Services/Services";

function App() {

  document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#promo').style.cssText = `animation: fade-in .7s ease`
      document.querySelector('.intro > .intro-left > .left-content > p').style.cssText = `animation: fade-in .7s ease; animation-delay: .5s;`
      setTimeout(() => document.querySelector('.intro > .intro-left > .left-content > p').style.cssText = 'opacity:1', 1200)
      document.querySelector('.intro > .intro-left > .left-content > #read-more').style.cssText = `animation: fade-in .7s ease; animation-delay: 1s;`
      setTimeout(() => document.querySelector('.intro > .intro-left > .left-content > #read-more').style.cssText = 'opacity:1', 1700)
      document.querySelector('.intro > .intro-right > img').style.cssText = `animation: fadeSW 2.5s ease`
      document.querySelector('#dog').addEventListener('click', () => alert("Гав-гав!"))
      
  })

  window.onscroll = (e) => {
    
    document.getElementsByClassName('left-content')[0].style.cssText = `transform: translate3d(0,${Math.floor(.3*window.pageYOffset) < 180 ? Math.floor(.3*window.pageYOffset) : 180}px,0)` 
    if (window.innerWidth < 576 && (document.querySelector('.about-right').offsetTop <= (window.scrollY+window.innerHeight/1.5)) && !document.querySelector('.about-right').classList.contains('shown')) {
      document.querySelector(".about-right").style.cssText = "animation: fadeW .7s ease; animation-delay: .5s"
      document.querySelector('.about-right').classList.add('shown')
      setTimeout(() => document.querySelector('.about-right').style.cssText = 'opacity:1', 1200)
    }
    document.querySelector('.about-left > img').style.cssText = `transform: translate3d(${Math.floor(.3*window.pageYOffset) - 150 > 100 ? 100 : Math.floor(.3*window.pageYOffset) - 150}px, -${Math.floor(.05*window.pageYOffset) > 45 ? 45 : Math.floor(.05*window.pageYOffset)}px, 0)`
    if (document.querySelector('.num-1').offsetTop <= (window.scrollY+window.innerHeight/1.5) && !document.querySelector('.num-1').classList.contains('shown')) 
    {
      document.querySelector('.num-1').style.cssText = 'animation: fade-in .7s ease'
      document.querySelector('.num-1').classList.add('shown')
      setTimeout(() => document.querySelector('.num-1').style.cssText = 'opacity: 1', 700)
    }
    if (document.querySelector('.num-2').offsetTop <= (window.scrollY+window.innerHeight/1.5) && !document.querySelector('.num-2').classList.contains('shown')) 
    {
      document.querySelector('.num-2').style.cssText = 'animation: fade-in .7s ease'
      document.querySelector('.num-2').classList.add('shown')
      setTimeout(() => document.querySelector('.num-2').style.cssText = 'opacity: 1', 700)
    }
    if (document.querySelector('.num-3').offsetTop <= (window.scrollY+window.innerHeight/1.5) && !document.querySelector('.num-3').classList.contains('shown')) 
    {
      document.querySelector('.num-3').style.cssText = 'animation: fade-in .7s ease'
      document.querySelector('.num-3').classList.add('shown')
      setTimeout(() => document.querySelector('.num-3').style.cssText = 'opacity: 1', 700)
    }
  }  

  return (
    <div className="App">
      
      <Header/>
      <Intro/>
      <About/>
      {/* <Stack/> */}
      <Projects/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
