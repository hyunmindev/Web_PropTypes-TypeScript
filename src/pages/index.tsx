import { useState } from 'react';

import Label from 'src/Components/Label';

function Home() {
  const [title, setTitle] = useState('first');
  const changeProps = () => setTitle(1);
  return (
    <>
      <Label title={title} />
      <button type='button' onClick={changeProps}>
        change
      </button>
    </>
  );
}

export default Home;
