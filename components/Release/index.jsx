import Image from 'next/image';
import Link from 'next/link';

import classes from './Release.module.scss';

const Release = ({ image, label, href }) => {
  return (
    <div className={classes.release}>
      <figure>
        <Image src={image} alt={label} fill />
      </figure>
      <div className={classes.content}>
        <h2 className='tagline-heading sm'>{label}</h2>
        <Link href={href} legacyBehavior>
          <a className='btn btn-outline'>Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default Release;
