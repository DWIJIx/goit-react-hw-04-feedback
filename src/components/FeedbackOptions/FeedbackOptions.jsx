import PropTypes from 'prop-types';
import {Button, ButtonBlock} from './FeedbackOptions.styled'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // console.log(options)
    return (
            <ButtonBlock>
                {options.map(option => {
                    return <Button type="button" key={option} onClick={() => onLeaveFeedback(option) }>{option}</Button>
               })}
            </ButtonBlock>
    
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

