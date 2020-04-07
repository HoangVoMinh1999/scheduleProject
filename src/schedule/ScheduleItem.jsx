import React, { Component } from 'react'

export default class ScheduleItem extends Component {
    renderSchedule = () => {
        let list = this.props.item;
        let result = null;

        for (let i = 0; i < list.length; i++)
        {
            let subjects=list[i].subject;
            result=subjects.map((subjectItem,index)=>{
                return(
                    <div>
                        
                    </div>
                )
            })
        }
    }

    render() {
        let { item, id } = this.props;

        return (
            <div className="col">
            </div>
        )
    }
}
