import React from 'react'
import HomeBody from './goodys-homepage-components/HomeBody';
import HomeJoinUs from './goodys-homepage-components/HomeJoinUs';
import HomeNav from './goodys-homepage-components/HomeNav';
import HomeWelcome from './goodys-homepage-components/HomeWelcome';


function Home() {
    return (
        <div>
            <HomeNav />
            <HomeWelcome />
            <HomeJoinUs />
            <HomeBody />
        </div>
    )
}

export default Home
