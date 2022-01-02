import PropTypes from 'prop-types';

interface Props {
  title: string;
  id: string;
}

function Label({ title, id }: Props) {
  return (
    <p>
      {id}:{title}
    </p>
  );
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Label;
