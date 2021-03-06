import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index.js';
import GlobalStyles from './components/GlobalStyles';

const viewportSize = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1300px'
}

const theme = {
  mobile: `(max-width: ${viewportSize.mobile})`,
  tablet: `(max-width: ${viewportSize.tablet})`,
  laptop: `(max-width: ${viewportSize.laptop})`,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
