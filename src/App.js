import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { store } from './store';
import { productAPi } from './features/apiSlice';
import { Data } from './components/Data';
function App() {
  return (
    <ApiProvider api={productAPi}>
      <div className="App">
        <Data />
      </div>
    </ApiProvider>
  );
}

export default App;
