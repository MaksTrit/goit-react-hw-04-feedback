import { Section } from 'components/Section/Section';
import { Option, OptionsContainer } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <OptionsContainer>
        <Option type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </Option>
        <Option type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Option>
        <Option type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </Option>
      </OptionsContainer>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
