import React, { Component } from 'react';
import CreateComment from '../../components/comments/create_comment';
import { observer } from 'mobx-react';
import Form from 'mobx-ajv-form';
import state from '../../store';
import { createComment } from '../../actions/comments';

const schema = {
  type: 'object',
  properties: {
    comment: { type: 'string', minLength: 2, maxLength: 500 }
  }
};

const fields = {
  comment: {
    label: 'Enter your comment here.',
    value: ''
  }
};

const form = new Form({ fields, schema });

class NewCommentForm extends Component {
  render() {
    const status = state.newCommentFormStatus;
    if (status === 'SAVING_SUCCESS') {
      form.clear();
    } else if (status === 'SAVING_ERROR') {
      form.invalidate(state.newCommentFormSavingLastError);
    }
    return (
      <CreateComment form={form}
               handleOnSubmit={event => this.handleSubmit(event)}
      />
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!form.validate()) return;
    const { comment } = form.values();
    createComment(state.selectedPostId, comment);
  }
}

export default observer(NewCommentForm);
