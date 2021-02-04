import React from 'react';
import DriversPageNav from './drivers-page-components/DriversPageNav';
import DriversPageSectOne from './drivers-page-components/DriversPageSectOne';
import DriversPageSectThree from './drivers-page-components/DriversPageSectThree';
import DriversPageSectTwo from './drivers-page-components/DriversPageSectTwo';
import DriversPageSignUp from './drivers-page-components/DriversPageSignUp';
import DriversPageWelcome from './drivers-page-components/DriversPageWelcome';

function DriversPage() {
    return (
        <div>
            <DriversPageNav />
            <DriversPageWelcome />
            <DriversPageSectOne />
            <DriversPageSectTwo />
            <DriversPageSectThree />
            <DriversPageSignUp />
        </div>
    )
}

export default DriversPage