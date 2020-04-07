import React, { Component } from 'react'
import ScheduleItem from './ScheduleItem';

export default class schedule extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                day: "Monday",
                subject: [
                    {
                        name: "Quy hoach tuyen tinh",
                        class: "17_22",
                        start: 1,
                        end: 4
                    },
                    {
                        name: "Quy hoach tuyen tinh",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },
            {
                day: "Tuesday",
                subject: [
                    {
                        name: "JAVA",
                        class: "17_22",
                        start: 3,
                        end: 5
                    },
                    {
                        name: "JAVA",
                        class: "17_22",
                        start: 9,
                        end: 12
                    }
                ]
            },
            {
                day: "Wednesday",
                subject: [
                    {
                        name: "JAVA",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },
            {
                day: "Thursday",
                subject: [
                    {
                        name: "JAVA",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },
            {
                day: "Friday",
                subject: [
                    {
                        name: "JAVA",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },
            {
                day: "Saturday",
                subject: [
                    {
                        name: "Trinh Vu Minh Hoang",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },
            {
                day: "",
                subject: [
                    {
                        name: "Vo Minh Hoang",
                        class: "17_22",
                        start: 7,
                        end: 9
                    }
                ]
            },

        ]

    }


    renderTable = () => {
        let list = [...this.state];
        let result = null;

        result = list.map((item, index) => {
            return (
                <ScheduleItem key={index} item={item} id={index} />
            )
        })
        
        return result;
    }

    render() {
        return (

            <div>
                <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ nhật</div>
                </div>
                <div className="row">
                    {this.renderTable()}
                </div>
            </div>

        )
    }
}

