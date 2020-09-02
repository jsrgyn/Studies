import React from 'react';

import { Link } from 'react-router-dom';

import HelloMessage from '../../components/reactorg/HelloMessage';
import Timer from '../../components/reactorg/Timer';

import './styles.css';

function ReactOrg() {
    return (
        <>
        <div>Hello World - React.org</div>

        <HelloMessage name="Maria"/>

        <Timer/>

        <Link to="/"> Home App </Link>
        </>
    )

}

export default ReactOrg;