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

stories.add("default", () => {
    return (
        <Checkbox 
          name='default' 
          handleOnChange={customHandleOnChange} 
        />
    );
});
stories.add("choosen", () => {
    return (
        <Checkbox 
          value
          name="i'm done" 
          handleOnChange={customHandleOnChange} 
        />
    );
  });
stories.add("disabled", () => {
  return (
      <Checkbox 
        name="u can't choose it" handleOnChange={customHandleOnChange} disabled 
      />
  );
});