const StatusDisplay = ({ data }) => {
    const dataWithoutNeutral = { ...data };
    delete dataWithoutNeutral.neutral;

    return (
        <div className="row">

            {Object.keys(dataWithoutNeutral).map((mood) => (
                <div key={mood} className="mood-option">
                    <div>
                        <p>{data[mood].count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatusDisplay;