import React from 'react';
import { Card } from 'semantic-ui-react';

export default class TodoCard extends React.Component {
  render() {
    return (
      <Card className="todo-card">
        <Card.Content>
          { this.props.title }
        </Card.Content>
      </Card>
    );
  }
}