import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  document.title = 'Fórum';

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
