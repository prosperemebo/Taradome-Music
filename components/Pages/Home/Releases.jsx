import Release from '../../Release';
import classes from './Home.module.scss';

import release1 from '../../../assets/releases/release-1.jpg';
import release2 from '../../../assets/releases/release-2.jpg';
import release3 from '../../../assets/releases/release-3.jpg';
import release4 from '../../../assets/releases/release-4.jpg';

const releases = [
  {
    image: release1,
    label: 'Big Sun - Chance / 12-03-2022',
    href: '/',
  },
  {
    image: release2,
    label: 'Big Time - IRhay / 07-10-2022 ',
    href: '/',
  },
  {
    image: release3,
    label: 'Hate & Roses - Upstairs / 09-11-2022',
    href: '/',
  },
  {
    image: release4,
    label: 'Once Again - ETHAN / 06-01-2022 ',
    href: '/',
  },
];

const Releases = () => {
  return (
    <section className={classes.releases}>
      <h2 className='heading-secondary block-heading'>Releases</h2>
      <ul className={classes.main}>
        {releases.map((r, i) => (
          <li key={i}>
            <Release image={r.image} label={r.label} href={r.href} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Releases;
