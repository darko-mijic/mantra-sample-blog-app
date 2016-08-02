import React from 'react';
import { observer } from 'mobx-react';

const NewPost = ({form, handleOnSubmit}) => (
  <form className="new-post">
    <h2>Add New Post</h2>

    {form.genericErrorMessage ? <p style={{color: 'red'}}>{form.genericErrorMessage}</p> : null}

    <input type="text"
           name={form.fields.title.name}
           value={form.fields.title.value}
           placeholder={form.fields.title.label}
           onChange={form.syncValue}
    />
    <p>{form.fields.title.errorMessage}</p>
    <br/>

    <textarea name={form.fields.content.name}
              value={form.fields.content.value}
              placeholder={form.fields.content.label}
              onChange={form.syncValue}
    />
    <p>{form.fields.content.errorMessage}</p>
    <br/>

    <button type="submit"
            disabled={!form.isValid}
            onClick={handleOnSubmit}
    >Add New
    </button>

  </form>
);

export default observer(NewPost);
