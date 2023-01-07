import Image from 'next/image';
import classes from './Artists.module.scss';

import UpArrow from '../../assets/svg/up-arrow.svg';

const Large = ({ resource = null, label, image }) => {
  return (
    <div className={`${classes.artist} ${classes.large}`}>
      <figure>
        <Image src={image} alt={label} width='450' height='450' />
      </figure>
      <div className={classes.info}>
        <span>{label}</span>
        {resource && (
          <a href={resource} target='_blank' rel='noreferrer'>
            <UpArrow />
          </a>
        )}
      </div>
    </div>
  );
};

export default Large;
