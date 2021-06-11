import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Nav } from './nav';

const navInfo = [
  {
    title: 'home',
    link: './',
    submenu: []
  },
  {
    title: 'skills',
    link: '',
    submenu: [
      {
        title: 'javascript',
        link: './',
        submenu: []
      },
      {
        title: 'typescript',
        link: './',
        submenu: []
      },
      {
        title: 'react/redux',
        link: './',
        submenu: []
      },
      {
        title: 'css/scss',
        link: './',
        submenu: []
      },
      {
        title: 'partyhard',
        link: './',
        submenu: []
      }
    ]
  },
  {
    title: 'partners',
    link: './',
    submenu: []
  },
  {
    title: 'support',
    link: './',
    submenu: []
  },
  {
    title: 'contacts',
    link: '',
    submenu: [
      {
        title: 'linkedIn',
        link: 'https://www.linkedin.com/in/yanina-mamporiya-7131a3208/',
        submenu: []
      },
      {
        title: 'insta',
        link: 'https://www.instagram.com/ya.nn.i/',
        submenu: []
      }
    ]
  }
]

const navStyleGrid = {
nav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  navLink: {
  },
  navItem: {
  },
  navSublist: {
  },
  navSublistItem: {
  }
}

const navStyleVertikal = {
  nav: {
    width: 'max-content',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'baseline'
  },
  navLink: {
  },
  navItem: {
  },
  navSublist: {
    top: '20%',
    left: '15vw'
  },
  navSublistItem: {
    textAlign: 'left'
  }
}


storiesOf("Nav", module)
  .addDecorator(withKnobs)
  .add("horizontally", () => {
    return (
        <section className="story">
          <h1>Here is nav menu</h1>
          <h2>horizontally</h2>
          <Nav navInfo={navInfo} customStyle={navStyleGrid}/>
            <h1>How you can use it</h1>
            <h3>It has NavProps:</h3>
            <p>
              <span>Required is</span> <br />
              navInfo: Array of NavItems <br />
              <p className='story__info'>
                  title: string <br />
                  link: string <br />
                  submenu: Array of the same NavItems
              </p>
              <span>Optional is</span> <br />
              customStyle?: that includes CustomStyle object with keys <br />
              <p className='story__info'>
                nav?: <br />
                navLink?: <br />
                navItem?: <br />
                navSublist?: <br />
                navSublistItem?: <br />
              </p>
              each containing object with jsx styles for this part of nav
            </p>
        </section>
    );
  })

  .add("vertically", () => {
    return (
        <section 
          className="story"
          style={{ flexFlow: 'row wrap', justifyContent: 'space-between' }}>
          <h1>Here is nav menu</h1>
          <h2>vertically</h2>
          <Nav navInfo={navInfo} customStyle={navStyleVertikal} />
          <div className="story" style={{ width: '65%'}}>
            <h1>How you can use it</h1>
            <h3>It has NavProps:</h3>
            <p>
              <span>Required is</span> <br />
              navInfo: Array of NavItems <br />
              <p className='story__info'>
                  title: string <br />
                  link: string <br />
                  submenu: Array of the same NavItems
              </p>
              <span>Optional is</span> <br />
              customStyle?: that includes CustomStyle object with keys <br />
              <p className='story__info'>
                nav?: <br />
                navLink?: <br />
                navItem?: <br />
                navSublist?: <br />
                navSublistItem?: <br />
              </p>
              each containing object with jsx styles for this part of nav
            </p>
          </div>
      </section>
    );
  });