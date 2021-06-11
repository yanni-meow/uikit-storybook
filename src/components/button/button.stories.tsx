import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Button } from './button';

const customHandleOnChange = () => {
  console.log('btn changed')
}

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("all", () => {
      return (
        <section className="story">
          <h1>Here is button</h1>
          <div className="story__examples" style={{ justifyContent: 'space-evenly' }}>
            <Button 
              type='submit'
              name="i'm btn"
              handleOnChange={customHandleOnChange}
            />
            <Button 
              type='submit'
              name="i'm disabled btn"
              handleOnChange={customHandleOnChange}
              disabled
            />
          </div>
          <h1>How you can use it</h1>
          <h3>It has ButtonProps:</h3>
          <p>
            <span>Required are</span> <br />
            type: 'button' | 'reset' | 'submit'; <br />
            name: string; <br />
            <span>Optional are</span> <br />
            handleOnChange?: any; <br />
            customStyle?: object; <br />
            disabled?: boolean; <br />
            autofocus?: boolean; <br />
          </p>
        </section>
      );
  })
  // .add("disabled", () => {
  //   return (
  //       <Button 
  //         type='submit'
  //         name="i'm disabled btn"
  //         handleOnChange={customHandleOnChange}
  //         disabled
  //       />
  //   );
  // });

// const stories = storiesOf("Button", module);
// stories.addDecorator(withKnobs);
// stories.add("default", () => {
//     return (
//         <Button 
//           type='submit'
//           name="i'm btn"
//           handleOnChange={customHandleOnChange}
//         />
//     );
// });
// stories.add("disabled", () => {
//   return (
//       <Button 
//         type='submit'
//         name="i'm disabled btn"
//         handleOnChange={customHandleOnChange}
//         disabled
//       />
//   );
// });