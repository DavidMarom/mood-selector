import { useState } from 'react';
import './App.css';
import data from './data.js';

import { MoodSelector, CurrMood, StatusDisplay, ExtraButtons, HistoryDisplay } from './components';

function App() {
  const [currentMood, setCurrentMood] = useState('neutral');
  const [dataState, setDataState] = useState(data);
  const [history, setHistory] = useState([]);

  const handleMoodChange = (moodKey) => {
    setCurrentMood(moodKey);
    setDataState({ ...dataState, [moodKey]: { ...dataState[moodKey], count: dataState[moodKey].count + 1 } });
    setHistory([...history, moodKey]);
  };

  const handleReset = () => { setCurrentMood('neutral'); setDataState(data); setHistory([]); };

  const handleChooseRandomMood = () => {
    const moods = Object.keys(dataState);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    handleMoodChange(randomMood);
    setHistory([...history, randomMood]);
  };

  return (
    <div className="App">
      <CurrMood currentMood={currentMood} data={data} />
      <MoodSelector data={dataState} handleMoodChange={handleMoodChange} />
      <StatusDisplay data={dataState} />
      <ExtraButtons handleReset={handleReset} handleChooseRandomMood={handleChooseRandomMood} />
      <HistoryDisplay history={history} />
    </div>
  );
}

export default App;
