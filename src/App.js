import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { store } from './store';
import { productAPi } from './features/apiSlice';
import { Product } from './components/Product';
function App() {
  return (
    <ApiProvider api={productAPi}>
      <div className="App">
        <Product />
      </div>
    </ApiProvider>
  );
}

export default App;
