import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Radio } from './radio';

const stories = storiesOf("Radio", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
    console.log('radio changed')
}
const radioToRender = [
    {
      name: 'radio',
      value: 'first one'
    },
    {
      name: 'radio',
      value: 'second',
      disabled: true
    },
    {
      name: 'radio',
      value: 'third'
    },
    {
      name: 'radio',
      value: 'last',
      checked: true
    }
]

stories.add("default", () => {
    return (
        <Radio
            radioToRender={radioToRender}
            handleOnChange={customHandleOnChange}
          />
    );
});