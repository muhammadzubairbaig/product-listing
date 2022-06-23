
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';


export const AppRoutes = () => {
  /**
   * @Render
   */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

