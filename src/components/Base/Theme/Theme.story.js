// @flow

import * as React from 'react';

import { ThemeProvider, ThemeConsumer } from './Theme';

export default () => (
  <ThemeProvider>
    <ThemeConsumer>
      {context => (
        <>
          <button type="button" onClick={context.switchTheme}>
            Switch
          </button>
          <p>{context.theme}</p>
        </>
      )}
    </ThemeConsumer>
  </ThemeProvider>
);
