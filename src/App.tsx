import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import { useAppDispatch } from './store/hooks'
import { useEffect } from 'react';
import { initDarkMode } from './store/darkModeSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => { 
    dispatch(initDarkMode())

  }, [dispatch])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
