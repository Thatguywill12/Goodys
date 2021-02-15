import React from 'react'
import UsersGeneralDeliveryServices from './users-general-product-page-commponents/UsersGeneralDeliveryServices'
import UsersGeneralMedical from './users-general-product-page-commponents/UsersGeneralMedical'
import UsersGeneralProdBrands from './users-general-product-page-commponents/UsersGeneralProdBrands'
import UsersGeneralProdPopular from './users-general-product-page-commponents/UsersGeneralProdPopular'
import UsersGeneralProdStoreFronts from './users-general-product-page-commponents/UsersGeneralProdStoreFront'
import UsersGeneralProdTopDeals from './users-general-product-page-commponents/UsersGeneralProdTopDeals'
import UsersGeneralProductPromo from './users-general-product-page-commponents/UsersGeneralProductPromo'
import MenuNav from '../menu-nav/MenuNav';

function UsersGeneralPage() {
    return (
        <div>
            <MenuNav />
            <UsersGeneralProductPromo />
            <UsersGeneralProdPopular />
            <UsersGeneralProdBrands />
            <UsersGeneralProdTopDeals />
            <UsersGeneralProdStoreFronts />
            <UsersGeneralDeliveryServices />
            <UsersGeneralMedical />
            
        </div>
    )
}

export default UsersGeneralPage
