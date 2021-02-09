import React from 'react'
import UsersHomePageNav from './users-homepage-components/UsersHomePageNav'
import UsersHomePagePromo from './users-homepage-components/UsersHomePagePromo'
import UsersPopularProducts from './users-homepage-components/UsersPopularProducts'
import UsersDealProducts from './users-homepage-components/UsersDealProducts'
import UsersFavoriteProducts from './users-homepage-components/UsersFavoriteProducts'
import UsersMeetBuddy from './users-homepage-components/UsersMeetBuddy'


function UsersHomePage() {
    return (
        <div>
            <UsersHomePageNav />
            <UsersHomePagePromo />
            <UsersPopularProducts />
            <UsersDealProducts />
            <UsersFavoriteProducts />
            <UsersMeetBuddy />
        </div>
    )
}

export default UsersHomePage;