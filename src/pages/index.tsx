import { useEffect, useState } from 'react';

import Label from 'src/Components/Label';

interface Coffee {
  title: string;
  id: string;
}

function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    <>
      {coffees.map(({ title, id }) => (
        <Label title={title} id={id} key={id} />
      ))}
    </>
  );
}

export default Home;
