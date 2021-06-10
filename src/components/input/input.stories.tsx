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

stories.add("default", () => {
    return (
      <React.Fragment>
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
        <InputNum
          type='phone'
          placeholder='+7 (999) 999-99-99'
          datamask='+7 (000) 000-00-00'
          pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
          handleOnChange={customHandleOnChange}
          styleProps='default'
        />
        <InputPass
          confirm
          popupPlaceholder='choose pass'
          popupPlaceholderConfirm='repeat pass'
          placeholder='••••••'
          placeholderConfirm='••••••'
          handleOnChange={customHandleOnChange}
          styleProps='default'
        />
      </React.Fragment>
    );
});

stories.add("down border", () => {
  return (
    <React.Fragment>
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
      <InputNum
        type='phone'
        placeholder='+7 (999) 999-99-99'
        datamask='+7 (000) 000-00-00'
        pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
        handleOnChange={customHandleOnChange}
        styleProps='down'
      />
      <InputPass
        confirm
        popupPlaceholder='choose pass'
        popupPlaceholderConfirm='repeat pass'
        placeholder='••••••'
        placeholderConfirm='••••••'
        handleOnChange={customHandleOnChange}
        styleProps='down'
      />
    </React.Fragment>
  );
});

stories.add("full border", () => {
  return (
    <React.Fragment>
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
      <InputNum
        type='phone'
        placeholder='+7 (999) 999-99-99'
        datamask='+7 (000) 000-00-00'
        pattern='\([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}'
        handleOnChange={customHandleOnChange}
        styleProps='top'
      />
      <InputPass
        confirm
        popupPlaceholder='choose pass'
        popupPlaceholderConfirm='repeat pass'
        placeholder='••••••'
        placeholderConfirm='••••••'
        handleOnChange={customHandleOnChange}
        styleProps='top'
      />
    </React.Fragment>
  );
});