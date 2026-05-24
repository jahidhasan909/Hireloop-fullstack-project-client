import Image from 'next/image';
import React from 'react';
import FindJobHeroTop from './FindJobHeroTop';
import BannerGrid from './BannerGrid';

const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
        
            <Image src={'https://i.ibb.co.com/5hh4V31V/Screenshot-2026-05-25-at-1-47-14-AM.png'} width={1500} height={600} alt='banner' className='w-full relative z-0  overflow-hidden object-cover'></Image>

            <FindJobHeroTop></FindJobHeroTop>

          <BannerGrid></BannerGrid>
        </div>
    );
};

export default Banner;