import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import classes from './Home.module.scss';
import 'swiper/css';

import banner from '../../../assets/images/banner-1.jpg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.textbox}>
        <h1 className='heading-primary'>TARADOME MUSIC</h1>
        <p className='paragraph'>
          Our tagline reads, a paragone in Music. Aside from continually putting
          out great music, we aspire to be that Model of Excellence where the
          Business behind the Show is professional, transparent and fair.
        </p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={classes.swiper}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <Image src={banner} alt='banner' fill />
          <div className={classes.content}>
            <h2 className='tagline-heading'>Easy on Me - IRhay / 10-06-2022</h2>
            <Link href='/' legacyBehavior>
              <a className='btn btn-primary'>Listen</a>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
