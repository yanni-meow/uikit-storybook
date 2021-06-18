import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Slider } from './slider';

const slyderItems = [
    {
        title: 'Nice sofa',
        bg: 'https://static-sl.insales.ru/r/kmLQiSMGvT0/fit/1408/0/ce/1/plain/files/1/7312/15973520/original/Фото-2.jpg',
        link: './'
    },
    {
        title: 'Lets have a cup of tea',
        bg: 'https://static-sl.insales.ru/r/wgxG3_2vTNo/fit/1408/0/ce/1/plain/files/1/5229/15996013/original/curology-6CJg-fOTYs4-unsplash_37dbb940f31a5bbf163bc84abe25565f.jpg',
        link: './'
    },
    {
        title: 'Pool time',
        bg: 'https://static-sl.insales.ru/r/Hmuc_HQaEHY/fit/500/500/ce/1/plain/images/collections/1/3123/77573171/Садовая_мебель.jpg',
        link: './'
    },
]

storiesOf("Slider", module)
  .addDecorator(withKnobs)
  .add("all", () => {
      return (
        <section className="story">
          <h1>Here is slider</h1>
          <Slider items={slyderItems} />
          <h1>How you can use it</h1>
          <h3>It has SliderProps:</h3>
          <p>
            <span>Required is</span> <br />
            items: Array of Items <br />
            <p className='story__info'>
                <span>Items is object with: </span><br />
                title: string; <br />
                bg: string with image address <br />
                link?: string with link
            </p>
          </p>
        </section>
      );
  })
