import { SimpleList } from '../../Artists';
import classes from './About.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.textbox}>
        <h1 className='heading-primary'>
          Taradome <span className='accent-color'>x</span> Excellence
        </h1>
        <p className='paragraph'>
          Our tagline reads, a paragone in Music. Aside from continually putting
          out great music, we aspire to be that Model of Excellence where the
          Business behind the Show is professional, transparent and fair.
        </p>
      </div>
      <SimpleList />
    </header>
  );
};

export default Header;
