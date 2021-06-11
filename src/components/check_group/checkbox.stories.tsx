import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Checkbox } from './checkbox';

const stories = storiesOf("Check", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
    console.log('checkbox changed')
}

stories.add("all", () => {
    return (
      <section className="story">
        <h1>Here is checkbox</h1>
        <div className='story__examples' style={{ justifyContent: 'space-evenly' }}>
          <Checkbox 
            name='default' 
            handleOnChange={customHandleOnChange} 
          />
          <Checkbox 
            value
            name="i'm done" 
            handleOnChange={customHandleOnChange} 
          />
          <Checkbox 
            name="u can't choose it" handleOnChange={customHandleOnChange} disabled 
          />
        </div>
        <h1>How you can use it</h1>
        <h3>It has CheckboxProps:</h3>
        <p>
          <span>Required is</span> <br />
          name: string; <br />
          <span>Optional are</span> <br />
          handleOnChange?: any; <br />
          disabled?: boolean; <br />
          value?: boolean; <br />
        </p>
      </section>
    );
});