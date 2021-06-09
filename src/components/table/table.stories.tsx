import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Table } from './table';

const stories = storiesOf("Table", module);
stories.addDecorator(withKnobs);

const customHandleOnChange = () => {
    console.log('table changed')
}

  // columns has 4 keys: name (string), key (string or number), sortable & searcheble (boolean)
  const tableColumns = [
    { name: 'id', key: 'id', sortable: true, searchable: false },
    { name: 'date', key: 'date', sortable: false, searchable: true },
    { name: 'is valid', key: 'isValid', sortable: true, searchable: false },
    { name: 'text', key: 'text', sortable: true, searchable: true }
  ]
  // here is test data of my pet proj
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  const lorem =
    'lorem ipsum dolor sit amet consectetur adipisicing elit asperiores officiis in ullam expedita rem quibusdam est odit possimus fugiat necessitatibus neque nostrum accusamus nam eaque assumenda excepturi odio delectus odit'
  const textArray = lorem.split(' ')

  const tableData: any = []
  for (let i = 0; i < 31; i++) {
    const randomIndex = Math.floor(Math.random() * 30)
    tableData.push({
      id: i + 1,
      date: `${Math.round(getRandomArbitrary(10, 30))}.0${Math.round(
        getRandomArbitrary(1, 9)
      )}.20${Math.round(getRandomArbitrary(10, 50))}`,
      isValid: Boolean(Math.round(Math.random())).toString(),
      text: textArray[randomIndex]
    })
  }
  // pagination has 2 parametres - init page after load and limit of items per page
  const tablePagination = {
    initPage: 1,
    limitPerPage: 10
  }

stories.add("default", () => {
    return (
        <Table
            columns={tableColumns}
            data={tableData}
            tableName='meowmeow'
            pagination={tablePagination}
            handleOnChange={customHandleOnChange}
            grid='.6fr repeat(3, 1fr)'
      />
    );
});