import classes from './Layout.module.scss';

import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [router.asPath]);

  const togglenavhandler = () => setIsNavOpen((state) => !state);

  return (
    <nav className={classes.navigation}>
      <div className={classes.head}>
        <Link href='/'>
          <figure className={classes.logo}>
            <Image src={logo} alt='Taradome Music' height='100' />
          </figure>
        </Link>
        <button className='btn btn-outline' onClick={togglenavhandler}>
          {isNavOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`${classes.main} ${isNavOpen ? classes.open : ''}`}>
        <div className={classes.backdrop} onClick={togglenavhandler}></div>
        <div className={classes.content}>
          <ul className={classes.mainList}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/artists'>Artists</Link>
            </li>
            <li>
              <Link href='/'>Submissions</Link>
            </li>
          </ul>
          <ul className={classes.subList}>
            <li>
              <Link href='/' legacyBehavior>
                <a className='small-menu'>
                  <span>Instagram </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/' legacyBehavior>
                <a className='small-menu'>
                  <span>Youtube </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/' legacyBehavior>
                <a className='small-menu'>
                  <span>Facebook </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/' legacyBehavior>
                <a className='small-menu'>
                  <span>Twitter </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
