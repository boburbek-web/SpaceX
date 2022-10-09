import React, { useState } from 'react';

import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'


const Footer = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }

    return (
        <>
            <div className="footer">

                <h3><a href="https://t.me/boburbek_code">@Mr_Mellogang</a> 2022</h3>
            </div>

        </>
    );
};

export default Footer;