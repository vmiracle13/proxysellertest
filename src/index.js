import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import UsersList from './data-containers/UsersList';
import Posts from './data-containers/Posts';
import NoMatch from './data-containers/NoMatch';

import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UsersList />} />
            <Route path="/:userId/posts" element={<Posts />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  </React.StrictMode>
);
