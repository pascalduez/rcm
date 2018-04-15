import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React module boilerplate',
  downPanelInRight: true,
  sidebarAnimations: true,
});

configure(() => require('../src/stories'), module);
