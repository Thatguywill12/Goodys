import React from 'react'
import PartnerSign from './partners-components/PartnerSign';
import PartnerFit from './partners-components/PartnerFit';
import PartnerSimpleStep from './partners-components/PartnerSimpleStep';
import MenuNav from '../menu-nav/MenuNav';

function PartnersPage() {
    return (
        <div>
            <MenuNav />
            <PartnerSign />
            <PartnerFit />
            <PartnerSimpleStep />
        </div>
    )
}

export default PartnersPage;