import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Switch, Route } from "react-router-dom";
import SocialFollow from "./components/SocialFollow"; 

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/inputselect" component={InputSelect} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
