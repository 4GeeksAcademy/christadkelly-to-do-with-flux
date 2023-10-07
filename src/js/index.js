//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import injectContext from "./store/appContext";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { Home } from './views/home';

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Home/>)

export default injectContext(Home);