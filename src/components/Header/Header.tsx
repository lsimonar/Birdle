import React from "react";
import './Header.css'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaQuestionCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

function Header () {
    return(
        <div className="header-ctn">
            <div className="icon-ctn">
                <FaQuestionCircle />
            </div>
            <div className="icon-ctn">
                <FaInfoCircle />
            </div>
            <h1>BIRDLE</h1>
            <div className="icon-ctn">
                <RiBarChart2Fill />
            </div>
            <div className="icon-ctn">
                <BsFillGearFill />
            </div>
        </div>
    )
}

export default Header;