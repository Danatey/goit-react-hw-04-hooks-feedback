import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, positivePercentage }) => {
    return <div>
        <h2>Statistics</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Positive percentage:{positivePercentage}</p>
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics