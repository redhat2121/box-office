import React from 'react';
// eslint-disable-next-line
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../Images/mustang.jpg';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
