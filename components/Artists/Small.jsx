import classes from './Artists.module.scss';
import Image from 'next/image';

const Small = ({ image, label }) => {
  return (
    <div className={`${classes.artist} ${classes.small}`}>
      <figure>
        <Image src={image} alt={label} width='200' height='200' />
      </figure>
      <h3>{label}</h3>
    </div>
  );
};

export default Small;
