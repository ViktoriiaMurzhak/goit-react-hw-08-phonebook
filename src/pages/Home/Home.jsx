import { Box } from 'components/Box';
import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <Box>
      <p className={css.text}>
        You can save lives, no matter where in the world you are. A simple
        donation. A few clicks on your keyboard. A message to the right person.
      </p>

      <p className={css.text}>
        Everything you need to help Ukrainians in their fight for peace and
        freedom – in one place.
      </p>

      <a
        className={css.support}
        href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly"
        target="_blank"
        rel="noopener noreferrer"
      >
        support Ukraine
      </a>
    </Box>
  );
}
