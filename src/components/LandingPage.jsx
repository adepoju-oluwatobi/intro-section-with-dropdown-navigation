import React from 'react'
import MenuOpenIcon from '../assets/images/icon-menu.svg';
import MenuCloseIcon from '../assets/images/icon-close-menu.svg';
import MobileHeroImg from '../assets/images/image-hero-mobile.png';
import Client1 from '../assets/images/client-audiophile.svg'
import Client2 from '../assets/images/client-databiz.svg'
import Client3 from '../assets/images/client-maker.svg'
import Client4 from '../assets/images/client-meet.svg'
import ArrDown from '../assets/images/icon-arrow-down.svg'
import TodoIcon from '../assets/images/icon-todo.svg'
import CalenderIcon from '../assets/images/icon-calendar.svg'
import ReminderIcon from '../assets/images/icon-reminders.svg'
import PlanningIcon from '../assets/images/icon-planning.svg'

function LandingPage() {
    let menuOpenIcon = document.getElementById('menu-open');
    let menuCloseIcon = document.getElementById('menu-close-icon')
    let mobileMenu = document.getElementById('mobile-menu');
    let overlay = document.getElementById('overlay')

    function openMenu()
    {
        menuOpenIcon = document.getElementById('menu-open').style.display = "none";
        mobileMenu = document.getElementById('mobile-menu').style.display = "block"
        menuCloseIcon = document.getElementById('menu-close-icon').style.display = "block"
        overlay = document.getElementById('overlay').style.display = "block"

    }

    function closeMenu()
    {
        menuCloseIcon = document.getElementById('menu-close-icon').style.display = "none"
        menuOpenIcon = document.getElementById('menu-open').style.display = "block";
        mobileMenu = document.getElementById('mobile-menu').style.display = "none"
        overlay = document.getElementById('overlay').style.display = "none"
    }
  return (
    <div className=''>
        <div id='overlay' className='overlay hidden'></div>
         <header className='flex justify-between items-center p-2'>
            <p className='font-bold text-3xl'>Snap</p>
            <div>
                <img src={MenuOpenIcon} alt="menu open icon" id= 'menu-open' onClick={openMenu}/>
            </div>
        </header>

        <section className='mt-3'>
            <img src={MobileHeroImg} alt="" />
        </section>

        <section className='text-center mt-6'>
            <p className='font-bold text-4xl'>Make remote work</p>
            <p className='w-[300px] m-auto mt-4'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className='bg-black text-white py-2 px-4 rounded-lg mt-4'>Learn more</button>
        </section>

        <section className='flex justify-evenly items-center mt-8'>
            <img className='w-12' src={Client2} alt="" />
            <img className='w-12' src={Client1} alt="" />
            <img className='w-12' src={Client4} alt="" />
            <img className='w-12' src={Client3} alt="" />
        </section>

        {/***--------------------------- */}

       <div id='mobile-menu' className='absolute h-[100vh] w-[70%] top-0 left-[30%] bg-white hidden'>
                <div onClick={closeMenu}>
                    <img className='p-4 ml-[75%]' src={MenuCloseIcon} id='menu-close-icon' alt="menu close icon" />
                </div>

                <div className='p-4 ml-2'>
                       <div>
                         <div className='flex items-center gap-4 mb-4'>
                            <p>Features</p>
                            <img src={ArrDown} alt="down arrow" />
                        </div>

                    <div className='ml-6 flex flex-col gap-2 mb-4'>
                         <div className='flex items-center gap-4'>
                            <img src={TodoIcon} alt="" />
                            <p>Todo List</p>
                        </div>
                         <div className='flex items-center gap-4'>
                            <img src={CalenderIcon} alt="" />
                            <p>Calendar</p>
                        </div>
                         <div className='flex items-center gap-4'>
                            <img src={ReminderIcon} alt="" />
                            <p>Reminders</p>
                        </div>
                         <div className='flex items-center gap-4'>
                            <img src={PlanningIcon} alt="" />
                            <p>Planning</p>
                        </div>

                    </div>
                       </div>

                        <div className='flex items-center gap-4 mb-4'>
                            <p>Company</p>
                            <img src={ArrDown} alt="down arrow" />
                        </div>
                            <p className='mb-4'>Career</p>
                            <p>About</p>
                </div>

                <div className='text-center'>
                    <div className='my-4'>
                        <p>Login</p>
                    </div>
                    <div>
                        <button className='border border-black p-2 px-10 rounded-xl'>Register</button>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default LandingPage