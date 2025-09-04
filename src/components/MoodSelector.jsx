const MoodSelector = ({ data, handleMoodChange }) => {
    const dataWithoutNeutral = { ...data };
    delete dataWithoutNeutral.neutral;

    return (
        <div className="mood-buttons-container">
            <div className="row">

                {Object.keys(dataWithoutNeutral).map((mood) => (
                    <button
                        key={mood}
                        onClick={() => handleMoodChange(mood)}>
                        <p>{data[mood].display}</p>
                    </button>
                ))}

            </div>
        </div>
    );
};

export default MoodSelector;
