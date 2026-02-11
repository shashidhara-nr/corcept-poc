import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../pages/HomePage';
import PageBySlug from '../pages/PageBySlug';
import ArticlePage from '../pages/ArticlePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <PageBySlug slug="about" /> },
      { path: 'products', element: <PageBySlug slug="products" /> },
      { path: 'science', element: <PageBySlug slug="science" /> },
      { path: 'resources', element: <PageBySlug slug="resources" /> },
      { path: 'investors', element: <PageBySlug slug="investors" /> },
      { path: 'articles/:slug', element: <ArticlePage /> },
      { path: '*', element: <PageBySlug slug="404" /> }
    ]
  }
]);
