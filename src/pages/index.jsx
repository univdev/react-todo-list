import React from 'react';
import TodoCard from './.components/TodoCard';
import { Input } from 'semantic-ui-react';
import './.styles/index.less';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      payload: {
        message: null,
      },
    };
  }
  handleChangeMessage(message) {
    this.setState({
      ...this.state,
      payload: {
        message,
      },
    });
  }
  handleSubmitTodoItem(e) {
    e.preventDefault();
    const { message } = this.state.payload;
    if (!message) throw new Error('메시지를 입력해주세요');
    const result = { message };
    this.setState({
      ...this.state,
      payload: {
        message: null,
      },
      items: [...this.state.items, result],
    });
  }
  render() {
    return (
      <div className="container">
        {[...this.state.items].map((item) => {
          return (<TodoCard title={item.message}></TodoCard>);
        })}
        <form action="#" onSubmit={(e) => this.handleSubmitTodoItem(e)}>
          <Input
            defaultValue={this.state.payload.message}
            placeholder="할 일 입력"
            type="text"
            onInput={(value) => this.handleChangeMessage(value.target.value)}></Input>
        </form>
      </div>
    );
  }
}