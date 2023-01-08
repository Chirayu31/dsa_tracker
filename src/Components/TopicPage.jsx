import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'

const TopicPage = ({data}) => {
    const {topic} = useParams();
    const [topicWiseData, setTopicWiseData] = useState(data);
    const [questionData, setQuestionData] = useState(data);
    const [completedQues, setCompletedQues] = useState(0);
    const [totalQues,setTotalQues] = useState(0);

    let temp = topicWiseData
    
    useEffect(()=>{
        setQuestionData(questionData)
        setTopicWiseData(topicWiseData.filter((ques) => ques.Topic === topic ))
        setTotalQues(topicWiseData.length)
        setCompletedQues(topicWiseData.filter((ques) => ques.Done === 1).length)
        temp = topicWiseData     
        // console.log(questionData) 
        // console.log(totalQues)
        // console.log(completedQues)
    },[topic, questionData])

    const DoneClickHandler = (e,questionProblem) =>{
        e.preventDefault();
    
        const idx = questionData.findIndex((obj => obj.Problem === questionProblem))
        let d = questionData;
    
        if(d[idx]["Done"] === 0){
            d[idx]["Done"] = 1;
        }else {
            d[idx]["Done"] = 0;
        }
    
        setQuestionData(d);
        localStorage.setItem('questionData', JSON.stringify(questionData))
    }

    

  return (
    <>
        <h1>{topic} Page</h1>
        <div className='questions-list'>
            {topicWiseData && topicWiseData.map((ques,idx)=>(
                <div className='question' key = {idx}>
                    <p> 
                        <span>{`${idx + 1}. `}</span>
                         {ques.Problem}
                    </p>
                    
                    <button onClick={(e)=> DoneClickHandler(e,ques.Problem)  }>
                           {ques.Done === 1 ? (<span>Undo</span>) : (<span>Done</span>)}
                    </button>
                   
                </div>
            ))}
        </div>
    </>
    
  )
}

export default TopicPage