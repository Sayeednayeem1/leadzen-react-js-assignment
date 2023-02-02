
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loader from './components/ReactLoader/Loader';
import { router } from './router/Router';

function App() {

  // todo setting loading state 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className='h-screen bg-gradient-to-r from-[#9bafd9] to-[#103783]'>
      {loading ? <Loader /> : null}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
