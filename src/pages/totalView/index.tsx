import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss'
import 'react-big-calendar/lib/sass/reset.scss'
import styles from './index.less'
import { Form, Icon, Input, Modal, Row, Col, DatePicker } from 'antd'
import Task from './entity/task'

class ToltalView extends Component {
  state = {
    visible: {
      add_task: true
    },
    childTaskList: [new Task()]
  }
  onSelectEvent = (event) => {
    console.log(event, 'event')
  }
  renderChildTask = () => {
    return this.state.childTaskList.map((child: Task) => (
      <Row>
        <Col span={19}>
          <Input value={child.getMission_name()}></Input>
        </Col>
        <Col span={5}>
          <div className={styles.del_wrapper}>
            <Icon type="delete" style={{fontSize: '22px', color:'red'}} onClick="delChildTask"/>
            <Icon type="plus" style={{fontSize: '22px', color:'green'}} onClick={this.addChildTask}/>
          </div>
        </Col>
      </Row>
    ))
  }
  handleSubmit () {

  }
  delChildTask () {

  }
  addChildTask = () => {
    const task: Task = new Task()
    this.setState({
      childTaskList: [...this.state.childTaskList, task]
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { MonthPicker, RangePicker } = DatePicker;
    const ColoredDateCellWrapper = ({ children }) =>
      React.cloneElement(React.Children.only(children), {
        style: {
          backgroundColor: 'lightblue',
        },
      })
    const localizer = momentLocalizer(moment);
    const dateFormat = 'YYYY/MM/DD';
    let allViews = Object.keys(Views).map(k => Views[k])
    const myEventsList = [
      {
        id: 0,
        title: 'demo 事件',
        allDay: true,
        start: new Date(2019, 7, 0),
        end: new Date(2019, 7, 5),
        userId: '102'
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 7, 7),
        end: new Date(2019, 7, 10),
        allDay: true,
        userId: '102'
      },

      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2019, 7, 13, 0, 0, 0),
        end: new Date(2019, 7, 20, 0, 0, 0),
      },

      {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 13, 0, 0, 0),
      },

      {
        id: 4,
        title: 'Some Event',
        start: new Date(2019, 3, 9, 0, 0, 0),
        end: new Date(2019, 3, 10, 0, 0, 0),
      },
      {
        id: 5,
        title: 'Conference',
        start: new Date(2019, 3, 11),
        end: new Date(2019, 3, 13),
        desc: 'Big conference for important people',
      }];
    return (
      <div className={styles.ToltalView}>
        <div className={styles.Calendar}>
        <Calendar
          onSelectEvent={this.onSelectEvent}
          showMultiDayTimes
          views={allViews}
          step={60}
          localizer={localizer}
          events={myEventsList}
          // defaultDate={new Date(2015, 3, 1)}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper,
          }}
        />
        </div>
        <div className='detail_wrapper'>
          <div></div>
        </div>
        <Modal className={styles.add_task} visible={this.state.visible.add_task} title='添加项目'>
          <Form onSubmit={this.handleSubmit} layout="vertical" className="login-form">
            <Form.Item label="任务名称">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '输入任务名称!' }],
              })(
                <Input
                  placeholder="任务名称"
                />,
              )}
            </Form.Item>
            <Form.Item label='任务描述'>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '输入任务描述!' }],
              })(
                <Input
                  placeholder="任务描述"
                />,
              )}
            </Form.Item>
            <Form.Item label="参与人员">
              <Input></Input>
            </Form.Item>
            <Form.Item label="项目进度">
              <Input></Input>
            </Form.Item>
            <Form.Item label="项目计划时间">
            <RangePicker
              defaultValue={[moment(new Date(), dateFormat), moment(new Date(), dateFormat)]}
              format={dateFormat}
            />
            </Form.Item>
            <Form.Item label="子项目">
              {this.renderChildTask()}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'totalView' })(ToltalView);

export default WrappedNormalLoginForm