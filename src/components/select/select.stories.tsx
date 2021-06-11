import React, { useEffect, useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import './style.scss'

import { Select } from './select';

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
            <section className="story">
            <h1>Here u can see examples of select input</h1>
            <React.Fragment>
                {selectData.length > 0 && (
                    <React.Fragment>
                        <Select
                            data={selectData}
                            emptyAlert='¯\_(ツ)_/¯'
                            keys='numericCode'
                            styleProps='default'
                            options='name'
                            handleOnChange={customHandleOnChange}
                        />
                        <Select
                            data={selectData}
                            emptyAlert='¯\_(ツ)_/¯'
                            keys='numericCode'
                            styleProps='top'
                            options='name'
                            handleOnChange={customHandleOnChange}
                        />
                        <Select
                            data={selectData}
                            emptyAlert='¯\_(ツ)_/¯'
                            keys='numericCode'
                            styleProps='down'
                            options='name'
                            handleOnChange={customHandleOnChange}
                        />
                    </React.Fragment>
                )}
            </React.Fragment>
            <br />
            <h1>How you can use it</h1>
            <h3><h2>select</h2> has SelectProps:</h3>
            <p>
              <span>Required are</span> <br />
                data: Array of Objects <br />
                keys: string <br />
                options: string with data item' key, that will render on list <br />
                styleProps: 'default' | 'down' | 'top'<br />
              <span>Optional are</span> <br />
                handleOnChange?: ur custom foo <br />
                emptyAlert?: string that will render if nothing found <br />
            </p>
        
        </section>
    );
});
// stories.add("border design", () => {
//     const [selectData, setSelectData] = useState([])
//     const APIurl = 'https://restcountries.eu/rest/v2/all'
//     const getSelectCountries = () => {
//     fetch(APIurl)
//         .then((result) => result.json())
//         .then((result) => {
//         setSelectData(result)
//         })
//     }
//     useEffect(() => getSelectCountries(), [])
//     return (
//         <React.Fragment>
//           {selectData.length > 0 && (
//             <Select
//               data={selectData}
//               emptyAlert='¯\_(ツ)_/¯'
//               keys='numericCode'
//               styleProps='down'
//               options='name'
//               handleOnChange={customHandleOnChange}
//             />
//           )}
//         </React.Fragment>
//     );
// });