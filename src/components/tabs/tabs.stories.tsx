import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import './style.scss';

import { Tabs } from './tabs';

const stories = storiesOf("Tabs", module);
stories.addDecorator(withKnobs);

stories.add("default", () => {
    const tabsToRender = [
        {
            title: 'cat says',
            content: 'meow meow'
        },
        {
            title: 'god says',
            content: 'woof woof'
        },
        {
            title: 'duc says',
            content: 'crya crya'
        },
        {
            title: 'js devoloper says',
            content: 'wtf'
        }
    ];
    const [activeTab, setActiveTab] = useState(0);

    const customHandleOnChange = () => {
        console.log('tabs changed')
    };

    return (
        <Tabs
            tabs={tabsToRender}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleOnChange={customHandleOnChange}
      />
    );
});