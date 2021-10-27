import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import { IconButton } from '@mui/material'
import tinderlogo from './images/tinderlogo.png'
import ForumIcon from '@mui/icons-material/Forum'


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" clasName="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src={tinderlogo}
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
