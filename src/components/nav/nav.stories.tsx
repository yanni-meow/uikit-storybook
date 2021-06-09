import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Nav } from './nav';

const stories = storiesOf("Nav", module);
stories.addDecorator(withKnobs);

const navInfo = [
    {
      title: 'главная',
      link: './',
      submenu: []
    },
    {
      title: 'продукты',
      link: '',
      submenu: [
        {
          title: 'цветы',
          link: './',
          submenu: []
        },
        {
          title: 'деревья',
          link: './',
          submenu: []
        },
        {
          title: 'кусты',
          link: './',
          submenu: []
        },
        {
          title: 'поля',
          link: './',
          submenu: []
        },
        {
          title: 'ляля',
          link: './',
          submenu: []
        }
      ]
    },
    {
      title: 'о нас',
      link: './',
      submenu: []
    },
    {
      title: 'о вас',
      link: './',
      submenu: []
    },
    {
      title: 'контакты',
      link: '',
      submenu: [
        {
          title: 'контакты-контактики',
          link: './',
          submenu: []
        }
      ]
    }
]

// const navStyleGrid = {
// nav: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(5, 1fr)'
//   },
//   navLink: {
//   },
//   navItem: {
//   },
//   navSublist: {
//   },
//   navSublistItem: {
//   }
// }

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
      left: '100%'
    },
    navSublistItem: {
      textAlign: 'left'
    }
}

stories.add("horizontally", () => {
    return (
        <Nav navInfo={navInfo} />
    );
});

stories.add("vertically", () => {
    return (
        <Nav navInfo={navInfo} customStyle={navStyleVertikal} />
    );
});