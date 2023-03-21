import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onChangeFeedback }) => (
    <ButtonList>
        {options.map(option => (
            <Button
                key={option}
                type="button"
                name={option}
                onClick={onChangeFeedback}>
            {option}
            </Button>
        ))}
    </ButtonList>
)

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onChangeFeedback: PropTypes.func
}