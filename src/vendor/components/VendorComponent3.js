import React from 'react';

import { VendorComponent2 } from './VendorComponent2';

export default (props) => (
    <div>
        <p>VENDOR COMPONENT 3 with prop: {props.vendorComponent3Property}</p>
        <ul>
            <li>
                <VendorComponent2 vendorComponent2Property={"ven2 prop given from ven3"}/>
            </li>
        </ul>
    </div>
);