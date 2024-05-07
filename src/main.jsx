import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './services/Global style.js';
import { theme } from './services/Theme.js';

// import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>  */}
      {/* <PersistGate loading={null} persistor={persistor}>   */}
         <BrowserRouter basename="/nanny-services"> 
          <ThemeProvider theme={theme}>  
           <GlobalStyle /> 
              <App />      
           </ThemeProvider> 
         </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider>   */}
  </React.StrictMode>
);
