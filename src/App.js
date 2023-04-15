


import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import {Todo} from './components/Todo.jsx';
import {Profile} from './components/Profile.jsx'
import {Finished} from './components/Finished.jsx';
import {Navbar} from './components/Navbar.jsx';
import './App.css';

function App() {



  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
      
      </>
      
    );
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<Todo/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/finished",
          element:<Finished/>
        },

      ]
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
