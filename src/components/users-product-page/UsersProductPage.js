import React from 'react'
import UsersProductInfusedFlower from './users-product-page-components/UsersProductInfusedFlower'
import UsersProductPageNav from './users-product-page-components/UsersProductPageNav'
import UsersProductPagePromo from './users-product-page-components/UsersProductPagePromo'
import UsersProductPreRoll from './users-product-page-components/UsersProductPreRoll'
import UsersProductsFlower from './users-product-page-components/UsersProductsFlower'
import UsersProductShake from './users-product-page-components/UsersProductShake'

function UsersProductPage() {
    return (
        <div>
            <UsersProductPageNav/>
            <UsersProductPagePromo/>
            <UsersProductsFlower/>
            <UsersProductPreRoll/>
            <UsersProductInfusedFlower/>
            <UsersProductShake/>  
        </div>
    )
}

export default UsersProductPage
