const HistoryDisplay = ({ history }) => {
    const historyLast3Items = history.slice(-3).reverse();

    return (
        <div className="mood-buttons-container">
            <div className="curr-mood">
                <h3>Mood History:</h3>
                <ul>
                    {historyLast3Items.map((mood, index) => (
                        <li key={index}>{mood}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HistoryDisplay;
