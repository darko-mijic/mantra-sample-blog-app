import React, { Component } from 'react';
import { observer } from 'mobx-react';

const CreateComment = ({form, handleOnSubmit}) => (
  <div>
    {form.genericErrorMessage ? <p style={{color: 'red'}}>{form.genericErrorMessage}</p> : null}

    <textarea name={form.fields.comment.name}
              value={form.fields.comment.value}
              placeholder={form.fields.comment.label}
              onChange={form.syncValue}
    />
    <br />
    <button type="submit"
            disabled={!form.isValid}
            onClick={handleOnSubmit}
    >Add Comment
    </button>
  </div>
);

export default observer(CreateComment);
