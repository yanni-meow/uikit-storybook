import React, { useState } from 'react' // useEffect,
import moment from 'moment'

import './style.scss'

interface StopwatchProps {
  stopwatchStart: any;
  stopwatchJoin?: string;
  customStyle?: object;
}

export const Stopwatch = (props: StopwatchProps) => {
  const { stopwatchStart, stopwatchJoin = ':', customStyle } = props

  const [currentTime, setCurrentTime] = useState(
    `00${stopwatchJoin}00${stopwatchJoin}00`
  )

  const timeToShow = (actualTime: number) => {
    const hours = Math.floor(actualTime / 60 / 60)
    const minutes = Math.floor(actualTime / 60) - hours * 60
    const seconds = Math.ceil(actualTime % 60)
    const formattedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(stopwatchJoin)
    return formattedTime
  }
  const updateTime = () => {
    const now = moment()
    const duration = moment.duration(now.diff(stopwatchStart))
    const waiting = duration.asSeconds()
    setCurrentTime(timeToShow(waiting))
  }

  setTimeout(() => {
    updateTime()
    setTimeout(updateTime, 900)
  }, 900)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     updateTime()
  //     setTimeout(updateTime, 1000)
  //   }, 1000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  return (
    <div className='stopwatch' style={customStyle && customStyle}>
      {currentTime}
    </div>
  )
}