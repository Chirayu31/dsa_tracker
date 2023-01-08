import { useEffect,useState } from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import Home from "./Components/Home";
import TopicPage from "./Components/TopicPage";
import { data } from './data'

function App() {
  const [questionData, setQuestionData] = useState(data);

  useEffect(()=>{
    const chkData = JSON.parse(localStorage.getItem('questionData'));
    if(chkData){
      setQuestionData(chkData);
    }
    localStorage.setItem('questionData', JSON.stringify(questionData))
  },[])

  return (
      <Router> 
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/:topic' element={<TopicPage data={data} />} />
        </Routes>
      </Router>
  );
}

export default App;
