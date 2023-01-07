import classes from './Artists.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.textbox}>
        <h1 className='heading-primary'>Artists</h1>
        <p className='paragraph'>
          Experience has shown that not all talented people are ready for
          primetime, so over a year, these talents will be groomed and taught
          about the industry. They will go through the rigours of production and
          the process of making great music. And at the end of it all, we hope
          to have a single/Ep that is ready for the world.
        </p>
      </div>
    </header>
  );
};

export default Header;
