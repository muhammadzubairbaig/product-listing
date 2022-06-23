import './App.css';
import { AppRoutes } from './Components/AppRoutes/AppRoutes';
import { GeneralProvider } from './Contexts/GeneralProvider';

function App() {
  return (
      <GeneralProvider>
        <AppRoutes />
      </GeneralProvider>
  );
}

export default App;
