import { useRef, useEffect } from "react";
import { checkConcurrencyEvent } from '../utilities'

import './style.scss'

function dropDown(menuContainer) {
    const menu = menuContainer.querySelector(".list")
    if (menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active')
        menu.style.height = null
    } else {
        menuContainer.classList.add('active')
        menu.style.height = menu.scrollHeight + 'px'
    }
}

function up(e, menuContainer) {
    if (!checkConcurrencyEvent(e, menuContainer) && menuContainer) {
        const menu = menuContainer.querySelector(".list")
        menuContainer.classList.remove('active')
        menu.style.height = null
    }
}

const Select = ({ menuList, label, selectedItem, setParentSelect }) => {
    const menuContainer = useRef(null)
    const allAddedMenuList = { ...menuList, "all": "همه" }

    const logicMenuData = Object.keys(allAddedMenuList)
    const interfaceMenuData = Object.values(allAddedMenuList)

    const list = interfaceMenuData.map((value, key) => {
        if (allAddedMenuList[selectedItem] != value) {
            return <li id={logicMenuData[key]} key={value} onClick={(e) => { setParentSelect(e.target.getAttribute('id')) }}>{value}</li>
        }
    })

    useEffect(() => {
        const body = window.document.body
        body.addEventListener('click', (e) => up(e, menuContainer.current))
        return () => {
            body.removeEventListener('click', up)
        }
    }, [])

    return (
        <div className={'select'}>
            <p>{label}: </p>
            <span ref={menuContainer} onClick={() => dropDown(menuContainer.current)}>
                <span className={'selected'}>{allAddedMenuList[selectedItem]}</span>
                <ul className="list">{list}</ul>
            </span>
        </div>
    )
}

export default Select