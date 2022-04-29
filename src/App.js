import './App.css';
import phrases from './quotes.json';
import {useState} from 'react';
const colors = ["red","blue","rgb(237, 237, 19)","green","coral", "violet", "pink", "brown", "orange", "rgb(177, 187, 50)"]
function App() {

  const color = Math.floor(Math.random() * colors.length)

  const [phrase, setPhrase] = useState(Math.floor(Math.random() * phrases.length))

  const changePhrase = () => {
      setPhrase(Math.floor(Math.random() * phrases.length))      
  }
 
 document.body.style=`background:${colors[color]}`
  return (
    <div className="App">
      <blockquote className="sectionPhrases">
      <p style={{color:colors[color]}}><i class="fa-solid fa-quote-left"></i> {phrases[phrase].quote} <i class="fa-solid fa-quote-right"></i></p>
        <span style={{color:colors[color]}}>{phrases[phrase].author}</span>
        <button onClick={changePhrase} style={{background:colors[color]}}>Change Phrase</button>
      </blockquote>
    </div>
  );
}

export default App;
