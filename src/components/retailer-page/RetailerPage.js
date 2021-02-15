import React from 'react'
import RetailerPageNav from './retailer-page-components/RetailerPageNav';
import RetailerPagePromo from './retailer-page-components/RetailerPagePromo';
import RetailerPagePopularProduct from './retailer-page-components/RetailerPagePopularProduct';
import MenuNav from '../menu-nav/MenuNav';


function PartnersPage() {
    return (
        <div>
            {/*<RetailerPageNav />*/}
            <MenuNav />
            <RetailerPagePromo />
            <RetailerPagePopularProduct />
        </div>
    )
}

export default PartnersPage;