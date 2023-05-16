'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


// ** Import Util Functions
import getCountDownValues from '../../utils/countdown'

const Timer = ({targetDate}) => {

    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    const [days, hours, minutes, seconds] = getCountDownValues(countDown);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return (
        <>
            <div className="sale-counter flex gap-3">
                <div className="single-counter flex flex-col justify-center items-center w-14 h-14 bg-red-500 rounded-lg">
                    <p className='count-num text-base font-semibold font-title text-white'>{days}</p>
                    <p className='text-xs text-white'>দিন</p>
                </div>
                <div className="single-counter flex flex-col justify-center items-center w-14 h-14 bg-red-500 rounded-lg">
                    <p className='count-num text-base font-semibold font-title text-white'>{hours}</p>
                    <p className='text-xs text-white'>ঘন্টা</p>
                </div>
                <div className="single-counter flex flex-col justify-center items-center w-14 h-14 bg-red-500 rounded-lg">
                    <p className='count-num text-base font-semibold font-title text-white'>{minutes}</p>
                    <p className='text-xs text-white'>মিনিট</p>
                </div>
                <div className="single-counter flex flex-col justify-center items-center w-14 h-14 bg-red-500 rounded-lg">
                    <p className='count-num text-base font-semibold font-title text-white'>{seconds}</p>
                    <p className='text-xs text-white'>সেকেন্ড</p>
                </div>
            </div>
        </>
    )

};

export default Timer;