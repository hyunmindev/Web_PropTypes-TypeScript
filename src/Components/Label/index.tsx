import PropTypes from 'prop-types';

interface Props {
  title: string;
  id: string;
}

function Label({ title, id }: Props) {
  console.log(typeof id);
  return (
    <p>
      {id}:{title}
    </p>
  );
}

// Label.propTypes = {
//   title: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default Label;
