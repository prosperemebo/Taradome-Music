import classes from './Layout.module.scss';

import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={classes.navigation}>
      <Link href='/'>
        <figure className={classes.logo}>
          <Image src={logo} alt='Taradome Music' fill />
        </figure>
      </Link>
      <button className='btn btn-outline'>Menu</button>
    </nav>
  );
};

export default Nav;
