import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Section title={message} />;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
