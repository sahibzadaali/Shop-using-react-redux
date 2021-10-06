// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Todos from './Componentss/Todos';

// function App() {
//   return (
//     // <div className="App">
//     //  <h1>Food App</h1>
//     //  <Header/>
//     //  <main>
//     //    <Meals/>
//     //  </main>
//     // </div>
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Containers/Header';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductListing} />
                    <Route path="/product/:productId" component={ProductDetail} />
                    <Route>404 Not found</Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
