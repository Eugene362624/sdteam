import { Button, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import './SideBar.scss'

function SideBar() {

    const [expanded, setExpanded] = useState(false)
    const [leftSide, setLeftSide] = useState(Cookie.get('leftSide') || false)

    
    useEffect(() => {
        document.querySelector('.sidebar-body').style.cssText += `bottom: -${document.querySelector('.sidebar-body').scrollHeight}px`
        if (leftSide) {
            document.querySelector('.sidebar-body').style.cssText += "left: 0; border-radius: 0 60px 0 0; right: unset"
            document.querySelector('.sidebar-checkbox').style.cssText += "left: 0; right: unset"
        } else {
            document.querySelector('.sidebar-body').style.cssText += "right: 0; border-radius: 60px 0 0 0; left: unset"
            document.querySelector('.sidebar-checkbox').style.cssText += "right: 0; left: unset"
        }
    }, [])

    const sidebarHandler = () => {
        if (document.querySelector('.sidebar-body').classList.contains('expanded')) {
            setExpanded(false)
            document.querySelector('.sidebar-body').style.cssText += `bottom: -${document.querySelector('.sidebar-body').scrollHeight}px`
            document.querySelector('.sidebar-body').classList.remove('expanded')
        }
        else {
            setExpanded(true)
            document.querySelector('.sidebar-body').style.cssText += "bottom: 0vh"
            document.querySelector('.sidebar-body').classList.add('expanded')
        }
    }

    const changeSidebarPosition = () => {
        if (!leftSide) {
            document.querySelector('.sidebar-body').style.cssText += "left: 0; border-radius: 0 60px 0 0; right: unset"
            document.querySelector('.sidebar-checkbox').style.cssText += "left: 0; right: unset"
            setLeftSide(true)
            Cookie.set('leftSide', true)
        } else {
            document.querySelector('.sidebar-body').style.cssText += "right: 0; border-radius: 60px 0 0 0; left: unset"
            document.querySelector('.sidebar-checkbox').style.cssText += "right: 0; left: unset"
            setLeftSide(false)
            Cookie.remove('leftSide')
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
                    <IconButton id="x-position" onClick={() => changeSidebarPosition()}>{leftSide ? <ExpandMoreIcon style={{transform: 'rotate(270deg)'}}/>: <ExpandMoreIcon style={{transform: 'rotate(90deg)'}}/>}</IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar
