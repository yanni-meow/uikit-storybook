import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import './style.scss';

import { Tabs } from './tabs';

const stories = storiesOf("Tabs", module);
stories.addDecorator(withKnobs);

stories.add("all", () => {
    const tabsToRender = [
        {
            title: 'required props',
            content: (
                <div className='story'>
                    <p>
                        <span>Tabs required props are</span> <br />
                        tabs: Array of TabsItem <br />
                        <p className='story__info'>
                            title: string <br />
                            content: anything you want <br />
                        </p>
                        activeTab: number <br />
                        setActiveTab: setState foo
                        <p className='story__info'>
                            you should props useState inside the component <br />
                            <span>const [activeTab, setActiveTab] = useState(0) </span>
                        </p>
                    </p> 
                </div>
            )
        },
        {
            title: 'optional props',
            content: (
                <div className='story'>
                    <p>
                        <span>Tabs optional props is</span> <br />
                        handleOnChange?: ur custom foo <br />
                    </p> 
                </div>
            )
        },
        {
            title: 'cat says',
            content: 'meow meow'
        },
        {
            title: 'duc says',
            content: 'crya crya'
        },
        {
            title: 'yanni says',
            content: 'hello! :3'
        }
    ];
    const [activeTab, setActiveTab] = useState(0);

    const customHandleOnChange = () => {
        console.log('tabs changed')
    };

    return (
        <div className='story'>
            <h1>Here is <h2>tabs</h2></h1>
            <Tabs
                tabs={tabsToRender}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleOnChange={customHandleOnChange}
            />
        </div>
    );
});