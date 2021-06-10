import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';

import { InputNum } from './input_num';
import { InputText } from './input_text';
import { InputPass } from './input_pas';

const stories = storiesOf("Inputs", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
  console.log('input changed')
}

stories.add("text", () => {
  return (
    <section className="story">
      <h1>Here u can see examples of text' input</h1>
      <div className="story__examples">
      <InputText
        type='text'
        popupPlaceholder='ur name'
        placeholder='ivan'
        icon='name'
        handleOnChange={customHandleOnChange}
        styleProps='default'
      />
      <InputText
        type='email'
        popupPlaceholder='ur email'
        placeholder='your_mail@please.com'
        icon='mail'
        handleOnChange={customHandleOnChange}
        styleProps='default'
      /> 
      <InputText
        type='text'
        popupPlaceholder='ur name'
        placeholder='ivan'
        icon='name'
        handleOnChange={customHandleOnChange}
        styleProps='top'
      />
      <InputText
        type='email'
        popupPlaceholder='ur email'
        placeholder='your_mail@please.com'
        icon='mail'
        handleOnChange={customHandleOnChange}
        styleProps='top'
      /> 
      <InputText
        type='text'
        popupPlaceholder='ur name'
        placeholder='ivan'
        icon='name'
        handleOnChange={customHandleOnChange}
        styleProps='down'
      />
      <InputText
        type='email'
        popupPlaceholder='ur email'
        placeholder='your_mail@please.com'
        icon='mail'
        handleOnChange={customHandleOnChange}
        styleProps='down'
      /> 
      </div>
      <br />
      <h1>How you can use it</h1>
      <h3><h2>type text</h2> has CheckboxProps:</h3>
      <p>
        <span>Required are</span> <br />
        type: 'text' | 'email' <br />
        styleProps: 'top' | 'default' | 'down'; <br />
        <span>Optional are</span> <br />
        handleOnChange?: any; <br />
        placeholder?: string; <br />
        popupPlaceholder?: string; <br />
        icon?: 'name' | 'mail';
      </p>
  
  </section>
  );
});

stories.add("number", () => {
  return (
    <section className="story">
      <h1>Here u can see examples of number input</h1>
      <div className="story__examples">
        <InputNum
          type='phone'
          placeholder='+7 (999) 999-99-99'
          datamask='+7 (000) 000-00-00'
          pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
          handleOnChange={customHandleOnChange}
          styleProps='default'
        />
        <InputNum
          type='number'
          popupPlaceholder='chosee ur lucky number'
          placeholder='123456'
          handleOnChange={customHandleOnChange}
          styleProps='default'
        />
        <InputNum
          type='phone'
          placeholder='+7 (999) 999-99-99'
          datamask='+7 (000) 000-00-00'
          pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
          handleOnChange={customHandleOnChange}
          styleProps='top'
        />
        <InputNum
          type='number'
          popupPlaceholder='chosee ur lucky number'
          placeholder='123456'
          handleOnChange={customHandleOnChange}
          styleProps='top'
        />
        <InputNum
          type='phone'
          placeholder='+7 (999) 999-99-99'
          datamask='+7 (000) 000-00-00'
          pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
          handleOnChange={customHandleOnChange}
          styleProps='down'
        />
        <InputNum
          type='number'
          popupPlaceholder='chosee ur lucky number'
          placeholder='123456'
          handleOnChange={customHandleOnChange}
          styleProps='down'
        />
      </div>
      <br />
      <h1>How you can use it</h1>
      <h3><h2>type number</h2> has CheckboxProps:</h3>
      <p>
        <span>Required are</span> <br />
        type: 'phone' | 'number' <br />
        styleProps: 'top' | 'default' | 'down'; <br />
        <span>Optional are</span> <br />
        handleOnChange?: any; <br />
        placeholder?: string; <br />
        popupPlaceholder?: string; <br />
        datamask?: string; <br />
        pattern?: string;
      </p>
  </section>
  );
});

stories.add("password", () => {
  return (
    <section className="story">
      <h1>Here u can see examples of pass input</h1>
      <div className="story__examples">
        <p>for login</p>
        <p>and for sign up</p>
        <InputPass
          confirm={false}
          popupPlaceholder='try to member pass'
          placeholder='••••••'
          handleOnChange={customHandleOnChange}
          styleProps='default'
        />
        <span>
          <InputPass
            confirm
            popupPlaceholder='choose pass'
            popupPlaceholderConfirm='repeat pass'
            placeholder='••••••'
            placeholderConfirm='••••••'
            handleOnChange={customHandleOnChange}
            styleProps='default'
          />
        </span>
        <InputPass
          confirm={false}
          popupPlaceholder='try to member pass'
          placeholder='••••••'
          handleOnChange={customHandleOnChange}
          styleProps='top'
        />
        <span>
          <InputPass
            confirm
            popupPlaceholder='choose pass'
            popupPlaceholderConfirm='repeat pass'
            placeholder='••••••'
            placeholderConfirm='••••••'
            handleOnChange={customHandleOnChange}
            styleProps='top'
          />
        </span>
        <InputPass
          confirm={false}
          popupPlaceholder='try to member pass'
          placeholder='••••••'
          handleOnChange={customHandleOnChange}
          styleProps='down'
        />
        <span>
          <InputPass
            confirm
            popupPlaceholder='choose pass'
            popupPlaceholderConfirm='repeat pass'
            placeholder='••••••'
            placeholderConfirm='••••••'
            handleOnChange={customHandleOnChange}
            styleProps='down'
          />
        </span>
      </div>
      <br />
      <h1>How you can use it</h1>    
      <h3><h2>type pass</h2> has CheckboxProps:</h3>
      <p>
        <span>Required are</span> <br />
        confirm: boolean; <br />
        styleProps: 'top' | 'default' | 'down'; <br />
        <span>Optional are</span> <br />
        handleOnChange?: any; <br />
        placeholder?: string; <br />
        popupPlaceholder?: string; <br />
        placeholderConfirm?: string; <br />
        popupPlaceholderConfirm?: string;
      </p>
  </section>
  );
});



// stories.add("default style", () => {
//   return (
//     <section className="story">
//     <h1>Here is default style of inputs</h1>
//     <h2>type text</h2>
//     <InputText
//         type='text'
//         popupPlaceholder='ur name'
//         placeholder='ivan'
//         icon='name'
//         handleOnChange={customHandleOnChange}
//         styleProps='default'
//       />
//     <h2>type email</h2>
//     <InputText
//         type='email'
//         popupPlaceholder='ur email'
//         placeholder='your_mail@please.com'
//         icon='mail'
//         handleOnChange={customHandleOnChange}
//         styleProps='default'
//       /> 
//     <h2>type phone</h2>
//     <InputNum
//         type='phone'
//         placeholder='+7 (999) 999-99-99'
//         datamask='+7 (000) 000-00-00'
//         pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
//         handleOnChange={customHandleOnChange}
//         styleProps='default'
//       />
//     <h2>and type pass</h2>
//     <InputPass
//         confirm
//         popupPlaceholder='choose pass'
//         popupPlaceholderConfirm='repeat pass'
//         placeholder='••••••'
//         placeholderConfirm='••••••'
//         handleOnChange={customHandleOnChange}
//         styleProps='default'
//       />
//   </section>
//   );
// });

// stories.add("down border style", () => {
// return (
//   <React.Fragment>
//     <InputText
//       type='text'
//       popupPlaceholder='ur name'
//       placeholder='ivan'
//       icon='name'
//       handleOnChange={customHandleOnChange}
//       styleProps='down'
//     />
//     <InputText
//       type='email'
//       popupPlaceholder='ur email'
//       placeholder='your_mail@please.com'
//       icon='mail'
//       handleOnChange={customHandleOnChange}
//       styleProps='down'
//     /> 
//     <InputNum
//       type='phone'
//       placeholder='+7 (999) 999-99-99'
//       datamask='+7 (000) 000-00-00'
//       pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
//       handleOnChange={customHandleOnChange}
//       styleProps='down'
//     />
//     <InputPass
//       confirm
//       popupPlaceholder='choose pass'
//       popupPlaceholderConfirm='repeat pass'
//       placeholder='••••••'
//       placeholderConfirm='••••••'
//       handleOnChange={customHandleOnChange}
//       styleProps='down'
//     />
//   </React.Fragment>
// );
// });

// stories.add("full border style", () => {
// return (
//   <React.Fragment>
//     <InputText
//       type='text'
//       popupPlaceholder='ur name'
//       placeholder='ivan'
//       icon='name'
//       handleOnChange={customHandleOnChange}
//       styleProps='top'
//     />
//     <InputText
//       type='email'
//       popupPlaceholder='ur email'
//       placeholder='your_mail@please.com'
//       icon='mail'
//       handleOnChange={customHandleOnChange}
//       styleProps='top'
//     /> 
//     <InputNum
//       type='phone'
//       placeholder='+7 (999) 999-99-99'
//       datamask='+7 (000) 000-00-00'
//       pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
//       handleOnChange={customHandleOnChange}
//       styleProps='top'
//     />
//     <InputPass
//       confirm
//       popupPlaceholder='choose pass'
//       popupPlaceholderConfirm='repeat pass'
//       placeholder='••••••'
//       placeholderConfirm='••••••'
//       handleOnChange={customHandleOnChange}
//       styleProps='top'
//     />
//   </React.Fragment>
// );
// });

// stories.add("props", () => {
//   return (
//     <section className="story">
//       <h1>How you can use it</h1>
//       <h3><h2>type text</h2> has CheckboxProps:</h3>
//       <p>
//         <span>Required are</span> <br />
//         type: 'text' | 'email' <br />
//         styleProps: 'top' | 'default' | 'down'; <br />
//         <span>Optional are</span> <br />
//         handleOnChange?: any; <br />
//         placeholder?: string; <br />
//         popupPlaceholder?: string; <br />
//         icon?: 'name' | 'mail';
//       </p>
      
//       <h3><h2>type number</h2> has CheckboxProps:</h3>
//       <p>
//         <span>Required are</span> <br />
//         type: 'phone' | 'number' <br />
//         styleProps: 'top' | 'default' | 'down'; <br />
//         <span>Optional are</span> <br />
//         handleOnChange?: any; <br />
//         placeholder?: string; <br />
//         popupPlaceholder?: string; <br />
//         datamask?: string; <br />
//         pattern?: string;
//       </p>
    
//       <h3><h2>type pass</h2> has CheckboxProps:</h3>
//       <p>
//         <span>Required are</span> <br />
//         confirm: boolean; <br />
//         styleProps: 'top' | 'default' | 'down'; <br />
//         <span>Optional are</span> <br />
//         handleOnChange?: any; <br />
//         placeholder?: string; <br />
//         popupPlaceholder?: string; <br />
//         placeholderConfirm?: string; <br />
//         popupPlaceholderConfirm?: string;
//       </p>
//   </section>
//   );
// });