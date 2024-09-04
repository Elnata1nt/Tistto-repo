// src/App.jsx
import React from 'react';
import AuthProvider from './context/AuthProvider'; // Certifique-se de que o caminho está correto
import RouterConfig from './router'; // Certifique-se de que o caminho está correto

const App = () => {
  return (
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  );
};

export default App;
