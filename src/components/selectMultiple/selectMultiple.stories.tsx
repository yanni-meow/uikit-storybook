import React, { useEffect, useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import './style.scss'

import { SelectMultiple } from './selectMultiple';

const stories = storiesOf("SelectMultiple", module);
stories.addDecorator(withKnobs);


stories.add("default", () => {
    const [selectData, setSelectData] = useState([])
    const [allGroupsList, setAllGroupsList] = useState({})
    const [choice, setChoice] = useState([])
  
    // запроос к апи для получения данных
    const APIurl = 'https://restcountries.eu/rest/v2/all'
    const getSelectCountries = () => {
      fetch(APIurl)
        .then((result) => result.json())
        .then((result) => {
          return setSelectData(result)
        })
        .catch((e) => console.log(e))
    }
    useEffect(() => getSelectCountries(), [])
  
    // формирование групп по завершении ожидания ответа от апи
    useEffect(() => createGroups(), [selectData])
  
    // создание групп происходит вне компонента, для формирования понятной компоненту структуры данных
    const createGroups = () => {
      const groups = {}
      selectData.forEach((item: any) => {
        const keys = Object.keys(selectData);
        if(keys.length && item.region.length) {
            keys.forEach((key) => {
                if (key !== item.region) {
                    groups[item.region] = []
                }
            })
        } else {
            if (item.region.length) groups[item.region] = []
        }
      })        
  
      selectData.forEach((item: any) => {
        if (item.region.length) {
            groups[item.region].push(item)
        }
      })
  
      if (Object.keys(groups).length) setAllGroupsList(groups)
    }

    return (
            <section className="story">
            <h1>Here u can see an examples of select multiple</h1>
            <React.Fragment>
                {!Object.keys(allGroupsList).length ? 
                    'loading' :
                    <SelectMultiple 
                    // данные разделенные по группам
                        groups={allGroupsList}
                    //поле объекта выводящееся в список опшинов
                        options='name'
                    // state для созранения выбранных данных
                        choice={choice}
                        setChoice={setChoice}
                    
                    // необязательные пропсы стилей
                        widthInput='340px'
                        widthList='100%'
                        heightList='50vh'
                    /> 
                }
            </React.Fragment>
            <br />
            <h1>How you can use it</h1>
            <h3><h2>SelectMulti</h2> has SelectMultiProps:</h3>
            <p>
              <span>Required are</span> <br />
                groups: any; <br />
                options: string; <br />
                choice: state; <br />
                setChoice: setState; <br />
              <span>Optional are</span> <br />
                widthInput?: string; <br />
                widthList?: string; <br />
                heightList?: string; <br />
            </p>
        
        </section>
    );
});