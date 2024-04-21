import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import styles from "./scss/index.scss"
import {Provider} from "react-redux";
import {store} from "./redux/index";

function App() {
    return (
        <Provider store={store}>

            <div>
                <BrowserRouter>
                    
                    <Navbar/>
                    
                    <AppRouter/>



                </BrowserRouter>

            </div>
        </Provider>
    );
}

export default App;
