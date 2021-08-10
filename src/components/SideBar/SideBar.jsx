import { Button, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react'
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './SideBar.scss'

function SideBar() {

    const [expanded, setExpanded] = useState(false)

    const sidebarHandler = () => {
        if (document.querySelector('.sidebar-body').classList.contains('expanded')) {
            setExpanded(false)
            document.querySelector('.sidebar-body').style.cssText = "bottom: -50vh"
            document.querySelector('.sidebar-body').classList.remove('expanded')
        }
        else {
            setExpanded(true)
            document.querySelector('.sidebar-body').style.cssText = "bottom: 0vh"
            document.querySelector('.sidebar-body').classList.add('expanded')
        }
    }
    return (
        
        <div className="sidebar">
            <div className="sidebar-checkbox">
                <IconButton onClick={() => sidebarHandler()}>
                    {expanded ? <ExpandMoreIcon/> : <MenuIcon/>}
                </IconButton>
            </div>
            <div className="sidebar-body">
                <div className="sidebar-buttons">
                    <IconButton>О компании</IconButton>
                    <IconButton>Портфолио</IconButton>
                    <IconButton>Услуги</IconButton>
                    <IconButton>Личный кабинет</IconButton>
                    <IconButton>Заказать сайт</IconButton>

                </div>
            </div>
        </div>
    )
}

export default SideBar
