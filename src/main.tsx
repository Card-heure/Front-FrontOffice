import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={"316722010928-fcbl2181p78lon5odrcrcbqikpinppvj.apps.googleusercontent.com"}>
            <App/>
        </GoogleOAuthProvider>
    </React.StrictMode>,
)
