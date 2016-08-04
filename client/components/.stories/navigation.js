import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navigation from '../layouts/navigation';

storiesOf('core.Navigation', module)
  .add('default view', () => {
    return (
      <Navigation />
    );
  });
