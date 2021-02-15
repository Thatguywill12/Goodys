import React from 'react'
import UsersHomePagePromo from './users-homepage-components/UsersHomePagePromo'
import UsersPopularProducts from './users-homepage-components/UsersPopularProducts'
import UsersDealProducts from './users-homepage-components/UsersDealProducts'
import UsersFavoriteProducts from './users-homepage-components/UsersFavoriteProducts'
import UsersMeetBuddy from './users-homepage-components/UsersMeetBuddy'
import MenuNav from '../menu-nav/MenuNav';

function UsersHomePage() {
    return (
        <div>
            <MenuNav />
            <UsersHomePagePromo />
            <UsersPopularProducts />
            <UsersDealProducts />
            <UsersFavoriteProducts />
            <UsersMeetBuddy />
        </div>
    )
}

export default UsersHomePage;