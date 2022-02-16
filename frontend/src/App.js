// // import logo from "./logo.svg";
// import "./App.css";
//
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//             {/*    <img src={logo} className="App-logo"*/}
//             {/*         alt="logo" />*/}
//
//                 <p>A simple React app.....</p>
//
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//                 <form action="../../post" method="post"
//                       className="form">
//                     <button type="submit">Connected?</button>
//                 </form>
//             </header>
//         </div>
//     );
// }
//
// export default App;

// NEW REACT PROJECT

import React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List"
import Map from "./components/Map/Map";

const App = () => {
    return(
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width:"100%"}}>
                <Grid item xs={12} md={4} >
                    <List/>
                </Grid>
                <Grid item xs={12} md={8} >
                    <Map/>
                </Grid>
            </Grid>
        </>
    )
}

export default App;