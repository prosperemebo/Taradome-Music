import Link from 'next/link';
import { SimpleList, SmallProfileCard } from '../../Artists';

import classes from './Home.module.scss';

import artist1 from '../../../assets/artists/artist-1.jpg';
import artist2 from '../../../assets/artists/artist-2.jpg';
import artist3 from '../../../assets/artists/artist-3.jpg';
import artist4 from '../../../assets/artists/artist-4.jpg';
import artist5 from '../../../assets/artists/artist-5.jpg';

const artists = [
  {
    image: artist1,
    label: 'IRhay',
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

const Artists = () => {
  return (
    <section className={classes.artists}>
      <h2 className='heading-secondary block-heading'>Artists</h2>
      <SimpleList />
    </section>
  );
};

export default Artists;
