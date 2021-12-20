import PropTypes from 'prop-types';

type Props = {
  title: string;
};

function Label({ title }: Props) {
  return <p>{title}</p>;
}

// Label.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Label;
