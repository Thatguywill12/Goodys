import React from 'react'
import HomeBody from './goodys-homepage-components/HomeBody';
import HomeJoinUs from './goodys-homepage-components/HomeJoinUs';
import HomeWelcome from './goodys-homepage-components/HomeWelcome';
import MenuNav from '../menu-nav/MenuNav';


function Home() {
    return (
        <div>
            <MenuNav />
            <HomeWelcome />
            <HomeJoinUs />
            <HomeBody />
        </div>
    )
}

export default Home
