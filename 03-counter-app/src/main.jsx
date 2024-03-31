import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from "react-dom/client"

import { FirstApp } from './FirstApp';

import './styles.css';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
