import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Button } from './button';

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
  console.log('btn changed')
}

stories.add("default", () => {
    return (
        <Button 
          type='submit'
          name="i'm btn"
          handleOnChange={customHandleOnChange}
        />
    );
});
stories.add("disabled", () => {
  return (
      <Button 
        type='submit'
        name="i'm disabled btn"
        handleOnChange={customHandleOnChange}
        disabled
      />
  );
});

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// const Template: Story<any> = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     type:'submit',
//     name:'go modal'
// };