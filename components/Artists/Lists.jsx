import Link from 'next/link';
import { LargeProfileCard, SmallProfileCard } from '.';

import classes from './Artists.module.scss';

import artist1 from '../../assets/artists/artist-1-bg.jpg';
import artist2 from '../../assets/artists/artist-2-bg.jpg';
import artist3 from '../../assets/artists/artist-3-bg.jpg';
import artist4 from '../../assets/artists/artist-4-bg.jpg';
import artist5 from '../../assets/artists/artist-5-bg.jpg';

const artists = [
  {
    image: artist1,
    label: 'IRhay',
    resource: 'https://www.irhaymusic.com/',
  },
  {
    image: artist2,
    label: 'Wednesday',
  },
  {
    image: artist3,
    label: 'Chance',
  },
  {
    image: artist4,
    label: 'Tate',
  },
  {
    image: artist5,
    label: 'Ethan',
  },
];

export const ListSimple = () => {
  return (
    <ul className={classes.artists_list}>
      {artists.map((a, i) => (
        <li key={i}>
          <Link href='/'>
            <SmallProfileCard image={a.image} label={a.label} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const ListLarge = () => {
  return (
    <ul className={classes.artists_list_large}>
      {artists.map((a, i) => (
        <li key={i}>
          <LargeProfileCard
            resource={a?.resource}
            image={a.image}
            label={a.label}
          />
        </li>
      ))}
    </ul>
  );
};
