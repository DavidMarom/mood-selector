const CurrMood = ({ currentMood, data }) => {

    return (
        <div className="mood-buttons-container">
            <div className="curr-mood">
                <h3>Current Mood:</h3>
                <p>{data[currentMood].display}</p>
            </div>
        </div>
    );
};

export default CurrMood;