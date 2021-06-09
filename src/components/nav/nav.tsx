import React, { useState } from 'react'
import './style.scss'

interface NavItems {
  title: string;
  link: string;
  submenu: Array<NavItems> | [];
}

interface CustomStyle {
  nav?: {};
  navLink?: {};
  navItem?: {};
  navSublist?: {};
  navSublistItem?: {};
}

interface NavProps {
  navInfo: Array<NavItems>;
  customStyle?: CustomStyle
}

export const Nav = (props: NavProps) => {
  const { navInfo, customStyle } = props

  const state = {}
  navInfo.forEach((item) => {
    state[item.title] = false
  })
  const [isOpen, setIsOpen] = useState(state)

  const openList = (el: any, now: boolean) => {
    setIsOpen({ ...isOpen, [el.title]: now })
  }

  return (
    <ul className='nav' style={customStyle && customStyle.nav}>
      {navInfo.map((el: any) => {
        const submenu: any = []
        if (el.submenu.length) {
          el.submenu.map((subel: any) => {
            submenu.push(
              <li
                key={subel.title}
                className='nav__sublist__item'
                style={customStyle && customStyle.navSublistItem}
              >
                <a href={subel.link} style={customStyle && customStyle.navLink}>
                  {subel.title}
                </a>
              </li>
            )
          })
        }
        return (
          <li
            key={el.title}
            className='nav__item'
            style={customStyle && customStyle.navItem}
            onMouseEnter={() => openList(el, true)}
            onMouseLeave={() => openList(el, false)}
          >
            {submenu.length ? (
              <React.Fragment>
                {el.title}
                <ul
                  className={
                    isOpen[el.title]
                      ? 'nav__sublist__active'
                      : 'nav__sublist'
                  }
                  style={customStyle && customStyle.navSublist}
                >
                  {submenu}
                </ul>
              </React.Fragment>
            ) : (
              <a href={el.link} style={customStyle && customStyle.navLink}>
                {el.title}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
