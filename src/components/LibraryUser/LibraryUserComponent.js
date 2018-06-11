import React from 'react';

import { VendorComponent1, VendorComponent2, VendorComponent3 } from "../../fibaComponentLibrary";

export default (props) => (
    <div>
        <p>LIBRARY USER COMPONENT {props.libraryUserComponentProperty}</p>
        <VendorComponent1/>
        <VendorComponent2/>
        <VendorComponent3/>
    </div>
);

