import React from 'react'
import MenuOpenIcon from '../assets/images/icon-menu.svg';
import MenuCloseIcon from '../assets/images/icon-close-menu.svg';
import MobileHeroImg from '../assets/images/image-hero-mobile.png';
import DesktopHeroIcon from '../assets/images/image-hero-desktop.png/'
import Client1 from '../assets/images/client-audiophile.svg'
import Client2 from '../assets/images/client-databiz.svg'
import Client3 from '../assets/images/client-maker.svg'
import Client4 from '../assets/images/client-meet.svg'
import ArrDown from '../assets/images/icon-arrow-down.svg'
import ArrUp from '../assets/images/icon-arrow-up.svg'
import TodoIcon from '../assets/images/icon-todo.svg'
import CalenderIcon from '../assets/images/icon-calendar.svg'
import ReminderIcon from '../assets/images/icon-reminders.svg'
import PlanningIcon from '../assets/images/icon-planning.svg'

function LandingPage() {
    let menuOpenIcon = document.getElementById('menu-open');
    let menuCloseIcon = document.getElementById('menu-close-icon')
    let mobileMenu = document.getElementById('mobile-menu');
    let overlay = document.getElementById('overlay')
    let featureOpenIcon = document.getElementById('feature-open-icon');
    let featureCloseIcon = document.getElementById('feature-close-icon');
    let featureSubMenu = document.getElementById('feature-sub-menu');
    let companyOpenIcon = document.getElementById('company-open-icon');
    let companyCloseIcon = document.getElementById('company-close-icon');
    let companySubMenu = document.getElementById('company-sub-menu');

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

    function openFeatureSub()
    {
        featureSubMenu = document.getElementById('features-sub-menu').style.display = "flex"
        featureOpenIcon = document.getElementById('feature-open-icon').style.display = "none"
        featureCloseIcon = document.getElementById('feature-close-icon').style.display = "block"
    }

    function closeFeatureSub()
    {
        featureSubMenu = document.getElementById('features-sub-menu').style.display = "none"
        featureOpenIcon = document.getElementById('feature-open-icon').style.display = "block"
        featureCloseIcon = document.getElementById('feature-close-icon').style.display = "none"

    }

    function companyMenuOpen()
    {
        companyOpenIcon = document.getElementById('company-open-icon').style.display = "none"
        companyCloseIcon = document.getElementById('company-close-icon').style.display = "block";
        companySubMenu = document.getElementById('company-sub-menu').style.display = "flex"
    }

    function companyMenuClose()
    {
        companyOpenIcon = document.getElementById('company-open-icon').style.display = "block"
        companyCloseIcon = document.getElementById('company-close-icon').style.display = "none";
        companySubMenu = document.getElementById('company-sub-menu').style.display = "none"
    }
  return (
    <div className=''>
        {/** Mobile view */}
        <div className='md:hidden'>
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
            <p className='font-bold text-4xl px-4'>Make remote work</p>
            <p className='w-[300px] text-sm m-auto mt-4'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className='bg-black text-white py-2 px-4 rounded-lg mt-4'>Learn more</button>
        </section>

        <section className='flex justify-evenly items-center mt-8 pb-4'>
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
                            <p className=''>Features</p>
                           <div  onClick={openFeatureSub}>
                             <img src={ArrDown} alt="down arrow" id='feature-open-icon' />
                           </div>
                            <div onClick={closeFeatureSub} className='-ml-4'>
                                <img className='hidden' src={ArrUp} alt="Arrow up" id='feature-close-icon'/>
                            </div>
                        </div>

                    <div className='ml-6 flex-col gap-2 mb-4 hidden' id='features-sub-menu'>
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
                            <p className=''>Company</p>
                           <div onClick={companyMenuOpen}>
                             <img src={ArrDown} alt="down arrow" id='company-open-icon'
                             />
                           </div>
                           <div className='-ml-4' onClick={companyMenuClose}>
                             <img className='hidden' src={ArrUp} alt="down arrow" id='company-close-icon'/>
                           </div>
                        </div>
                        <div className='ml-6 flex-col gap-2 mb-4 hidden' id='company-sub-menu'>
                                <p>History</p>
                                <p>Our Team</p>
                                <p>Blog</p>
                        </div>
                        <p className='mb-4'>Careers</p>
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
{/** --------------End of mobile view----------- */}

{/** --------------Desktop view----------------- */}
<div className='hidden md:block'>
    <header className='flex items-center justify-between p-4'>
       <div className='flex items-center gap-10'>
         <p className='font-bold text-4xl'>Snap</p>
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p>Features</p>
                <div onClick={openFeatureSub} className=''>
                    <img src={ArrDown} alt="" id='feature-open-icon'/>
                </div>
                <div onClick={closeFeatureSub} className='-ml-4'>
                    <img className='hidden' src={ArrUp} alt="Arrow up" id='feature-close-icon'/>
                </div>
           </div>


            <div className='flex items-center gap-2 cursor-pointer'>
                <p>Company</p>
                <img src={ArrDown} alt="" />
            </div>
            <p>Careers</p>
            <p>About</p>
        </div>
       </div>
        <div className='flex items-center gap-10'>
            <div>
            <p>Login</p>
        </div>
        <div>
            <button className='border border-black py-2 px-4 rounded-xl'>Register</button>
        </div>
        </div>
    </header>

    <section className='w-[100%] h-[100%] p-[20px] flex justify-center gap-[120px]'>
        <div className=''>
       <div>
        <div className='leading-10'>
         <p className='text-[70px] font-bold mt-[80px]'>Make</p>
        <p className='text-7xl font-bold'>remote work</p>
       </div>
       <div className='w-[400px] mt-6'>
            <p className='opacity-70'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
       </div>
       <button className='bg-black text-white py-2 px-4 rounded-xl mt-6'>Learn More</button>
       <section className='flex items-center gap-6 mt-10 pb-4'>
            <img className='w-12' src={Client2} alt="" />
            <img className='w-12' src={Client1} alt="" />
            <img className='w-12' src={Client4} alt="" />
            <img className='w-12' src={Client3} alt="" />
        </section>
       </div>
        </div>
        <div className=''>
            <img className='h-[80vh] w-[100%]' src={DesktopHeroIcon} alt="" />
        </div>
    </section>
</div>
{/** ------------End of Desktop view------------ */}
    </div>
  )
}

export default LandingPage