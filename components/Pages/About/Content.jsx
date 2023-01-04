import Image from 'next/image';
import classes from './About.module.scss';

import ceo from '../../../assets/images/ceo.png';

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.about}>
        <h3 className='heading-tertiary'>A Paragone in Music.</h3>
        <p className='paragraph'>
          Aside from continually putting out great music, we aspire to be that
          Model of Excellence where the Business behind the Show is
          professional, transparent and fair. We will bring respect and value to
          the entire ecosystem of the music industry, making its processes
          seamless to integrate and do business with the international music
          community.
        </p>
      </div>
      <div className={classes.profile}>
        <figure>
          <Image
            src={ceo}
            alt='Mr. E. Kiszo Ugokwe. President/CEO.'
            height='700'
          />
        </figure>
        <div className={classes.info}>
          <h2 className='heading-tertiary'>
            Mr. E. Kiszo Ugokwe. President/CEO.
          </h2>
          <p className='paragraph'>
            - Music is the ultimate healer, so find the soundtrack(s) to your
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
