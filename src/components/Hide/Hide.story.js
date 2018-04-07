// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Hide from './Hide';

storiesOf('Hide', module).add('Demo', () => (
  <div>
    <Hide tagName="div" style={{ padding: '1rem' }} xsm>
      Hidden at xsm breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} sm>
      Hidden at sm breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} md>
      Hidden at md breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} lg>
      Hidden at lg breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} xlg>
      Hidden at xlg breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} wd>
      Hidden at wd breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} xwd>
      Hidden at xwd breakpoint
    </Hide>
    <Hide tagName="div" style={{ padding: '1rem' }} xxwd>
      Hidden at xxwd breakpoint
    </Hide>
  </div>
));
