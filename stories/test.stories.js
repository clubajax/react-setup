import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


storiesOf('Test story', module)
    .add('basic button', () => (
        <section>
            <button onClick={action('clicked')}>click me</button>
        </section>
    ));