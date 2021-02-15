import React from 'react';
import DriversPageSectOne from './drivers-page-components/DriversPageSectOne';
import DriversPageSectThree from './drivers-page-components/DriversPageSectThree';
import DriversPageSectTwo from './drivers-page-components/DriversPageSectTwo';
import DriversPageSignUp from './drivers-page-components/DriversPageSignUp';
import DriversPageWelcome from './drivers-page-components/DriversPageWelcome';
import MenuNav from '../menu-nav/MenuNav';

function DriversPage() {
    return (
        <div>
            {/*<DriversPageNav />*/}
            <MenuNav />
            <DriversPageWelcome />
            <DriversPageSectOne />
            <DriversPageSectTwo />
            <DriversPageSectThree />
            <DriversPageSignUp />
        </div>
    )
}

export default DriversPage