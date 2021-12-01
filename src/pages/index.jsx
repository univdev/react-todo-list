import React from 'react';
import TodoCard from './.components/TodoCard';
import { Input, Form, TextArea, Button } from 'semantic-ui-react';
import './.styles/index.scoped.css';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      payload: {
        author: '',
        message: '',
      },
    };
  }
  handleChangeAuthor(author) {
    this.setState({
      ...this.state,
      payload: {
        ...this.state.payload,
        author,
      },
    });
  }
  handleChangeMessage(message) {
    this.setState({
      ...this.state,
      payload: {
        ...this.state.payload,
        message,
      },
    });
  }
  handleSubmitTodoItem(e) {
    e.preventDefault();
    const { author, message } = this.state.payload;
    const createdAt = new Date();
    if (!message) throw new Error('메시지를 입력해주세요');
    const result = { author, message, createdAt };
    this.setState({
      ...this.state,
      payload: {
        ...this.state.payload,
        message: '',
      },
      items: [...this.state.items, result],
    });
  }
  render() {
    return (
      <div className="container">
        {[...this.state.items].map((item, index) => {
          return (
            <TodoCard
              key={index}
              author={item.author}
              createdAt={item.createdAt}
              content={item.message}></TodoCard>
            );
        })}
        <Form action="#" onSubmit={(e) => this.handleSubmitTodoItem(e)}>
          <Input
            className="author-input"
            value={this.state.payload.author}
            placeholder="작성자 이름 입력"
            onInput={(event) => this.handleChangeAuthor(event.target.value)}/>
          <TextArea
            className="message-input"
            value={this.state.payload.message}
            placeholder="할 일 입력"
            type="text"
            onInput={(event) => this.handleChangeMessage(event.target.value)}/>
          <Button
            className="submit-button"
            type="submit">
            작성
          </Button>
        </Form>
      </div>
    );
  }
}