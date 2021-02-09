import React from 'react'
import PartnerNav from './partners-components/PartnerNav';
import PartnerSign from './partners-components/PartnerSign';
import PartnerFit from './partners-components/PartnerFit';
import PartnerSimpleStep from './partners-components/PartnerSimpleStep';


function PartnersPage() {
    return (
        <div>
            <PartnerNav />
            <PartnerSign />
            <PartnerFit />
            <PartnerSimpleStep />
        </div>
    )
}

export default PartnersPage;