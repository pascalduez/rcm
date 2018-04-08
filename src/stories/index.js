// @flow

import { storiesOf } from '@storybook/react';

import Theme from '../components/Base/Theme/Theme.story';
import Button from '../components/Button/Button.story';

storiesOf('Theme', module).add('Documentation', Theme);
storiesOf('Button', module).add('Documentation', Button);
