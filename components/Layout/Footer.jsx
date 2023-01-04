import classes from './Layout.module.scss';

import logo from '../../assets/images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <figure>
          <Image src={logo} alt='Taradome Music' height='60' />
        </figure>
        <div className={classes.info}>
          <span>Taradome Music.</span>
          <span>&copy; 2023. All Rights Reserved.</span>
        </div>
      </div>

      <ul className={classes.menu}>
        <li>
          <a href='#' className='small-menu'>
            Instagram
          </a>
        </li>
        <li>
          <a href='#' className='small-menu'>
            Youtube
          </a>
        </li>
        <li>
          <a href='#' className='small-menu'>
            Facebook
          </a>
        </li>
        <li>
          <a href='#' className='small-menu'>
            Twitter
          </a>
        </li>
        <li>
          <a href='#' className='small-menu'>
            Linkedin
          </a>
        </li>
        <li>
          <a href='#' className='small-menu'>
            Careers
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
