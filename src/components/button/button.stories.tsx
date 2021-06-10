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


// storiesOf("Button", module)
//   .addDecorator(withKnobs)
//   .add("default", () => {
//       return (
//           <Button 
//             type='submit'
//             name="i'm btn"
//             handleOnChange={customHandleOnChange}
//           />
//       );
//   })
//   .add("disabled", () => {
//     return (
//         <Button 
//           type='submit'
//           name="i'm disabled btn"
//           handleOnChange={customHandleOnChange}
//           disabled
//         />
//     );
//   });