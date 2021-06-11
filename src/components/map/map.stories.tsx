import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { YaMap } from './ya_map';

storiesOf("Map", module)
    .addDecorator(withKnobs)
    .add("example", () => {
    const mapSettings = {
        startCenter: [37.617635, 55.755821],
        startZoom: 7,
        controls: [],
        mapTitle: 'my map',
        listTitle: 'my favorite places',
        dataProperties: {
          // balloonContentHeader: `<font size=3><b>${locationName}</b></font>`,
          // balloonContentBody: `<p>Адрес подключения: ${ip}:${port}</p><p>Описание: ${odescription}</p><p>Адрес: ${osituation}</p>`,
          // balloonContentFooter: `Синхронизация: <font size=1>${lastupdatedmessage}</font>`,
          // clusterCaption: locationName,
          // hintContent: `<p>${locationName}</p><p>Адрес подключения: ${ip}:${port}</p>`
        },
        pointImage: 'https://image.flaticon.com/icons/png/512/3481/3481108.png',
        pointImageSize: [30, 30],
        closeImage: 'https://image.flaticon.com/icons/png/512/786/786195.png',
        closeImageSize: [16, 16]
    }
    const mapData = [
    {
        locationName: 'Blanc',
        markCoordinates: [37.642915, 55.755699],
        markAddress: 'Khokhlovsky lane, 7-9s2',
        markInfo: 'nice place',
        id: 1,
        fullInfo: (
        <React.Fragment>
            <div>Good veg food, coffee <br />
            Perfect service
            </div>
        </React.Fragment>
        )
    },
    {
        locationName: 'Elektrozavod',
        markCoordinates: [37.704143, 55.786505],
        markAddress: 'Elektrozavodskaya street, 21',
        markInfo: 'u should to see it by yourself',
        id: 2
    },
    {
        locationName: 'Moscow State University named after M.V. Lomonosov',
        markCoordinates: [37.531684, 55.703434],
        id: 3
    },
    {
        locationName: 'Nikola-Lenivets',
        markCoordinates: [35.600244, 54.749242],
        markAddress: 'Archstoyanie takes place here *_*',
        id: 4
    },
    {
        locationName: 'Serebryanyy bor',
        markCoordinates: [37.440123, 55.781070],
        markInfo: "nature' island in Moscow",
        id: 5
    }
    ]

    return (
        <YaMap mapSettings={mapSettings} data={mapData} />
    );
})
    .add('docs', () => {
        return (
            <section className="story">
            <h1>How you can use it</h1>
            <h3><h2>Yandex map</h2> has equired MapProps:</h3>
            <p>
                <span>First one is 'mapSettings'</span> <br />
                <p style={{ letterSpacing: 'normal'}}>it includes fields:</p>
                startCenter: Array with 2 numbers - coordinates <br />
                startZoom: number <br />
                controls: Array of conytols names <br />
                mapTitle: string <br />
                listTitle: string <br />
                dataProperties: object whith baloons properties <br />
                pointImage: URL string <br />
                pointImageSize: Array with 2 numbers - width and height <br />
                closeImage: URL string <br />
                closeImageSize:  Array with 2 numbers - width and height <br />
              <span>And second one is 'mapData'</span> <br />
              <p style={{ letterSpacing: 'normal'}}>it' Array of Objects those includes fields</p>
                id: number <br />
                locationName: string <br />
                markCoordinates: Array with 2 numbers - coordinates <br />
                markAddress?: string <br />
                markInfo?: string <br />
                fullInfo?: React.Fragment that will render after u open mark full info
            </p>
          </section>
        )
    })
