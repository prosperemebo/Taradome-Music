import classes from './Artists.module.scss';

const Content = () => {
  return (
    <div className={classes.submissions}>
      <h3 className='heading-tertiary'>SUBMISSIONS</h3>
      <p className='paragraph'>
        Sheep need not to submit. You’re not just submitting to another record
        label. You are submitting to the battleground of talents and fortress of
        ideas to roll with pride and gravitas; one who never backs down. Sounds
        fun? ditch the herd and join the lions!
      </p>
      <a href='#' className='btn btn-outline'>
        Join the Lions
      </a>
    </div>
  );
};

export default Content;
