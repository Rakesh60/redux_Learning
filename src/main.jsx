import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Folder from './Folder.jsx'
import { files } from './data'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>vs Code folder Structure</h1>
    <Folder files={files}/>
  </React.StrictMode>,
)
