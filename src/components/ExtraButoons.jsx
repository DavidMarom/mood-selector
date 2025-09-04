const MoodSelector = ({ handleReset, handleChooseRandomMood }) => {

    return (
        <div className="mood-buttons-container">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleChooseRandomMood}>Random Mood</button>
        </div>
    );
};



export default MoodSelector;
