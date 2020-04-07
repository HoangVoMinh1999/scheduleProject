import React, { Component } from 'react'
import Schedule from "./schedule/schedule"
import ScheduleItem from './schedule/ScheduleItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <ScheduleItem />
      </div>
    )
  }
}
