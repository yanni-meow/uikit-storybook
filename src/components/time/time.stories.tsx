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
        <Stopwatch 
            stopwatchStart={moment()}
            stopwatchJoin='.'
            // customStyle={{ margin: '0 auto' }}
        />
    );
});
stories.add("timer", () => {
  return (
      <Timer 
        timerDuration={[1, 3, 14]} 
        // customStyle={{ margin: '0 auto' }} 
      />
  );
});