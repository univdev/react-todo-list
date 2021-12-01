import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

export default class TodoCard extends React.Component {
  render() {
    return (
      <Card className="todo-card">
        <Card.Content>
          <Card.Header>{ this.props.author }</Card.Header>
          <Card.Meta>
            {
              this.props.createdAt
                ? <span className="date">{ moment(this.props.createdAt).format('YYYY-MM-DD') }</span>
                : null
            }
          </Card.Meta>
          { this.props.content }
        </Card.Content>
      </Card>
    );
  }
}