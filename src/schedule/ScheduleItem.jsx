import React, { Component } from 'react'

export default class ScheduleItem extends Component {
    render() {
        let {item,id}=this.props;
      
        return (
            <div className="col">
                <p>{item.subject[0].name}</p>
            </div>
        )
    }
}
