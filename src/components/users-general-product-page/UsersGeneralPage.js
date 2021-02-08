import React from 'react'
import UsersGeneralProdBrands from './users-general-product-page-commponents/UsersGeneralProdBrands'
import UsersGeneralProdNav from './users-general-product-page-commponents/UsersGeneralProdNav'
import UsersGeneralProdPopular from './users-general-product-page-commponents/UsersGeneralProdPopular'
import UsersGeneralProdTopDeals from './users-general-product-page-commponents/UsersGeneralProdTopDeals'
import UsersGeneralProductPromo from './users-general-product-page-commponents/UsersGeneralProductPromo'

function UsersGeneralPage() {
    return (
        <div>
            <UsersGeneralProdNav />
            <UsersGeneralProductPromo />
            <UsersGeneralProdPopular />
            <UsersGeneralProdBrands />
            <UsersGeneralProdTopDeals />
            
        </div>
    )
}

export default UsersGeneralPage
