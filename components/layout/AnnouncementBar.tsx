import React from 'react'
import { Nanum_Gothic } from 'next/font/google';

const nanumGothic = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

const AnnouncementBar = () => {

    const AnnouncementBarData = "Enjoy free shipping for orders of $99 or more. Shop now and save!";

    return (
        <div className={`bg-gray-900 text-white text-sm font-medium text-center px-4 py-3 ${nanumGothic.className}`}>
            {AnnouncementBarData}
        </div>
    )
}

export default AnnouncementBar;