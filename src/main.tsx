import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Loading from "#Components/Loading/Loading.tsx";
import App from "#Components/App/App.tsx";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <App/>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("CardheureRoot")
)
;