import React from 'react';

import { VendorComponent2 } from './VendorComponent2';
import VendorComponent3 from './VendorComponent3';

export const VendorComponent1 = (props) => (
    <div>
        <p>VENDOR COMPONENT 1 with prop: {props.vendorComponent1Property}</p>
        <ul>
            <li>
                <VendorComponent2 vendorComponent2Property={"ven2 prop given frlom ven1"}/>
            </li>
            <li>
                <VendorComponent3 vendorComponent3Property={"ven3 prop given frlom ven1"}/>
            </li>
        </ul>
    </div>
);