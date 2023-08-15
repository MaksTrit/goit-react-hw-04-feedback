import { Section } from 'components/Section/Section';
import { StatItem, StatisticsList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      <StatisticsList>
        <li>
          <StatItem>Good: {good}</StatItem>
        </li>
        <li>
          <StatItem>Neutral: {neutral}</StatItem>
        </li>
        <li>
          <StatItem>Bad: {bad}</StatItem>
        </li>
        <li>
          <StatItem>Total: {total()}</StatItem>
        </li>
        <li>
          <StatItem>Positive feedback: {positivePercentage()}%</StatItem>
        </li>
      </StatisticsList>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
