import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Routes, Route, HashRouter } from 'react-router-dom';

import Layout from './components/Layout';
const UsersList = React.lazy(() => import('./data-containers/UsersList'));
const Posts = React.lazy(() => import('./data-containers/Posts'));
import LoadingPage from './components/LoadingPage';
import NoMatch from './data-containers/NoMatch';

import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={
              <Suspense fallback={LoadingPage}>
                <UsersList />
              </Suspense>
            } />
            <Route path="https://vmiracle13.github.io/proxysellertest/#/:userId/posts" element={
              <Suspense fallback={LoadingPage}>
                <Posts />
              </Suspense>
            } />
            <Route path="https://vmiracle13.github.io/proxysellertest/#/*" element={<NoMatch />} />
          </Routes>
        </HashRouter>
      </Layout>
    </Provider>
  </React.StrictMode>
);
