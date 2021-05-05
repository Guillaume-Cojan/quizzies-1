import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SocialFollow from "./components/SocialFollow";

function App() {
  const [quizArray, setQuizArray] = useState([]);
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizTopic, setQuizTopic] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");

  const categoriesAPI = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setQuizCategories(res.data.trivia_categories));
  };
  useEffect(categoriesAPI, []);

  const quizAPI = (topic, difficulty) => {
    axios
      .get(
        `https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}&${difficulty}`
      )
      .then((res) => setQuizArray(res.data.results));
  };
  useEffect(() => {
    quizAPI(quizTopic, quizDifficulty);
  }, [quizTopic, quizDifficulty]);

  console.log(quizDifficulty);
  console.log(quizTopic);
  console.log(quizArray);

  const changeTopic = (event) => {
    setQuizTopic(event.value);
    console.log(quizTopic);
  };

  const changeDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
    console.log(quizDifficulty);
  };

  return (
    <div style={{
      backgroundImage: `url("https://media.istockphoto.com/photos/poker-table-picture-id1046326882?k=6&m=1046326882&s=612x612&w=0&h=FWwERAhFegLxTvxXw2uEyDg1ua1DiV-bXImf9ENaXDg=")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/inputselect"
          render={() => (
            <InputSelect
              quizArray={quizArray}
              quizCategories={quizCategories}
              changeTopic={changeTopic}
              changeDifficulty={changeDifficulty}
            />
          )}
        />
        <Route path="/quiz" render={() => <Quiz quizArray={quizArray} />} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
