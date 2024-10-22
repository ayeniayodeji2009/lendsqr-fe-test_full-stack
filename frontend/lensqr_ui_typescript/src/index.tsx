import React from 'react';
import ReactDOM from 'react-dom/client'; ///client
import './index.css';
import App from './App';
import { DataProvider } from './context_API/DataContext'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <DataProvider> {/**Context API to pass and use Global data*/}
      <App />
     </DataProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
