import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
        <StatItem>Good: <span>{good}</span></StatItem>
        <StatItem>Neutral: <span>{neutral}</span></StatItem>
        <StatItem>Bad: <span>{bad}</span></StatItem>
        <StatItem>Total: <span>{total}</span></StatItem>
        <StatItem>Positive Feedback: <span>{positivePercentage}%</span></StatItem>
    </StatList>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}