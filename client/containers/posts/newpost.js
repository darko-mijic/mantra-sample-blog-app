import React, { Component } from 'react';
import NewPost from '../../components/posts/newpost';
import { observer } from 'mobx-react';
import Form from 'mobx-ajv-form';
import state from '../../store';
import { createPost } from '../../actions/posts';

const schema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 2, maxLength: 20 },
    content: { type: 'string', minLength: 5, maxLength: 500 }
  }
};

const fields = {
  title: {
    label: 'Enter your post title.',
    value: ''
  },
  content: {
    label: 'Enter your post content.',
    value: ''
  }
};

const form = new Form({ fields, schema });

class NewPostForm extends Component {
  render() {
    const status = state.newPostFormStatus;
    if (status === 'SAVING_SUCCESS') {
      form.clear();
    } else if (status === 'SAVING_ERROR') {
      form.invalidate(state.newPostFormSavingLastError);
    }
    return (
      <NewPost form={form}
               handleOnSubmit={event => this.handleSubmit(event)}
      />
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!form.validate()) return;
    const { title, content } = form.values();
    createPost(title, content);
  }
}

export default observer(NewPostForm);
