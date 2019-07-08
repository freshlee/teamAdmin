import React, { Component } from 'react';
import classnames from "classnames";
import styles from './index.less'
import Chart from "react-google-charts";

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" }
  ];
  
  const rows = [
    [
      "Research",
      "知识库开发",
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      20,
      null
    ],
    [
      "Write",
      "搭建架构",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(2),
      25,
      "Research,Outline"
    ],
    [
      "Cite",
      "运行分析",
      null,
      new Date(2015, 0, 7),
      daysToMilliseconds(1),
      20,
      "Research"
    ],
    [
      "Complete",
      "自测",
      null,
      new Date(2015, 0, 10),
      daysToMilliseconds(1),
      0,
      "Cite,Write"
    ],
    [
      "Outline",
      "开发",
      null,
      new Date(2015, 0, 6),
      daysToMilliseconds(1),
      100,
      "Research"
    ]
];
class Home extends Component {
    render() {
        return (
            <div className={classnames(styles.home)}>
              任务总览
              <Chart
                chartType="Gantt"
                data={[columns, ...rows]}
                width="100%"
                height="50%"
                legendToggle
                />
            </div>
        )
    }
};

export default Home;
