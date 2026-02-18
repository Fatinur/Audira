import Tag from "/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from 'react'
import gsap from "gsap";


const Navbar = () => {
    const [isOpen , setIsOpen] = useState (false)

 const  navbarPhoneInit = () => {
    
    gsap.fromTo(".bar-open", {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease:"sine.inOut",})
 }
  return (
      <nav className='flex items-center justify-between  w-[99vw] h-12 md:h-[12vh] flex-row z-[100] relative'>
        <div className='text-brand font-bold text-2xl  w-[20vw]'>
              <img src={Tag} alt="Logo" /> 
        </div>

        <div>
          <TiThMenuOutline className="md:hidden text-4xl cursor-pointer text-sec relative" onClick={() => { setIsOpen(!isOpen); navbarPhoneInit(); }}  />

          <div className={`md:flex md:items-center self-center  gap-8 
  ${isOpen ? "flex flex-col justify-center items-center rounded-lg bg-amber-50 absolute top-[12vh] right-[5vw] shadow-2xl w-[40vw] bar-open " : "hidden"}`}>
                <div className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg text-center nav-phone"  ><a href="/">Home</a></div>
                <div className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg text-center nav-phone"  ><a href="/">About</a></div>
                <div className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg text-center nav-phone"  ><a href="/">Services</a></div>
                <div className="text-sec hover:bg-sec hover:text-white hover:scale-110 w-full rounded-lg text-center nav-phone"  ><button className="cta-btn">Shop</button></div>      
                
          
            </div>
        </div>
      </nav>
  )
}

export default Navbar