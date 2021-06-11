import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import './style.scss';
import moment from 'moment';

import { Stopwatch } from './stopwatch';
import { Timer } from './timer';

const stories = storiesOf("Time", module);
stories.addDecorator(withKnobs);

stories.add("stopwatch", () => {
    return (
        <div className='story'>
            <h1>Here is <h2>stopwatch</h2></h1>
            <Stopwatch
                stopwatchStart={moment()}
                stopwatchJoin='.'
                // customStyle={{ margin: '0 auto' }}
            />
            <h1>How you can use it</h1>
            <h3>It has StopwatchProps:</h3>
            <p>
                <span>required props is</span> <br />
                stopwatchStart: it's a moment obj <br />
                <span>optional props are</span> <br />
                stopwatchJoin?: string (by default : ) <br />
                customStyle?: object of jsx style <br />
            </p> 
        </div>
    );
});
stories.add("timer", () => {
  return (
      <div className='story'>
          <h1>Here is <h2>timer</h2></h1>
          <Timer 
            timerDuration={[1, 3, 14]} 
            // customStyle={{ margin: '0 auto' }} 
          />
          <h1>How you can use it</h1>
          <h3>It has StopwatchProps:</h3>
            <p>
                <span>required props is</span> <br />
                timerDuration: Array of 3 numbers [ hours, minutes, seconds ] <br />
                <span>optional props are</span> <br />
                timerJoin?: string (by default : ) <br />
                customStyle?: object of jsx style <br />
            </p> 
      </div>
  );
});