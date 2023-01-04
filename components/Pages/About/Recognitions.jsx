import classes from './About.module.scss';

import Logo1 from '../../../assets/svg/andela.svg';
import Logo2 from '../../../assets/svg/bet9ja.svg';
import Logo3 from '../../../assets/svg/betway.svg';
import Logo4 from '../../../assets/svg/bolt.svg';

const Recognitions = () => {
  return (
    <section className={classes.recognitions}>
      <h2 className='heading-secondary block-heading'>Recognitions</h2>
      <div className={classes.main}>
        <figure className={classes.recognition}>
          <Logo1 />
        </figure>
        <figure className={classes.recognition}>
          <Logo2 />
        </figure>
        <figure className={classes.recognition}>
          <Logo3 />
        </figure>
        <figure className={classes.recognition}>
          <Logo4 />
        </figure>
      </div>
    </section>
  );
};

export default Recognitions;
