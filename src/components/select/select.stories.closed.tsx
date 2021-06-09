import React, { useEffect, useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
// import './style_default.scss'
// import './style_down.scss'

import { SelectDefault } from './select_default';
import { SelectDown } from './select_down';

const stories = storiesOf("Select", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
    console.log('select changed')
};

stories.add("default", () => {
    const [selectData, setSelectData] = useState([]);
    const APIurl = 'https://restcountries.eu/rest/v2/all'
    const getSelectCountries = () => {
    fetch(APIurl)
        .then((result) => result.json())
        .then((result) => {
        setSelectData(result)
        })
    }
    useEffect(() => getSelectCountries(), [])

    return (
        <React.Fragment>
          {selectData.length > 0 && (
            <SelectDefault
              data={selectData}
              emptyAlert='¯\_(ツ)_/¯'
              keys='numericCode'
              options='name'
              handleOnChange={customHandleOnChange}
            />
          )}
        </React.Fragment>
    );
});
stories.add("border design", () => {
    const [selectData, setSelectData] = useState([])
    const APIurl = 'https://restcountries.eu/rest/v2/all'
    const getSelectCountries = () => {
    fetch(APIurl)
        .then((result) => result.json())
        .then((result) => {
        setSelectData(result)
        })
    }
    useEffect(() => getSelectCountries(), [])
    return (
        <React.Fragment>
        {selectData.length > 0 && (
        <SelectDown
            data={selectData}
            emptyAlert='¯\_(ツ)_/¯'
            keys='numericCode'
            options='name'
            handleOnChange={customHandleOnChange}
        />
        )}
    </React.Fragment>
    );
});