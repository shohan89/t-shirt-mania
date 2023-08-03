import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([ 
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch( 'tshirts.json' ),
          element: <Home />
        },
        {
          path: '/orders',
          element: <Orders />
        }
      ]
    }
   ])
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
