import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MainLayout from '../layouts/main_layout';

storiesOf('core.MainLayout', module)
  .add('default view', () => {
    const content = () => (<p>This is the content inside the Layout.</p>)
    return (
      <MainLayout content={content} />
    );
  });
