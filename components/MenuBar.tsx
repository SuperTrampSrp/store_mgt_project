import { useState, useEffect } from 'react';

import { ArrowCircleRight, ArrowCircleLeft, AutoStories, Draw, Delete, RecentActors, Calculate, CalendarMonth, ForwardToInbox, LocalPrintshop, Fireplace, Cloud } from '@mui/icons-material';
import { updateTime } from '@/lib/utils';


const MenuBar = ({ onOpenModal, handleClick }: openModalProps) => {

    const [time, setTime] = useState<string>();
    const [day, setDay] = useState<string>();


    useEffect(() => {
        const timerId = setInterval(() => {
            const { formattedTime, currentDay } = updateTime();
            setTime(formattedTime);
            setDay(currentDay);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className='bg-slate-800 p-3 flex justify-between px-6 items-center border-t-2 border-teal-400'>
            <div className='flex justify-start gap-4'>
                <button onClick={onOpenModal} title='sales'>
                    <ArrowCircleRight fontSize='large' className='text-cyan-200 hover:scale-125' />
                </button>
                <ArrowCircleLeft fontSize='large' className='text-cyan-200 hover:scale-125' />
                <button onClick={handleClick} id='ReceiptEntry' title='ReceiptEntry'>
                    <ArrowCircleRight className='transform rotate-90 text-cyan-100 hover:scale-125' fontSize='large' />
                </button>

                <ArrowCircleLeft className='transform rotate-90 text-cyan-100 hover:scale-125' fontSize='large' />
                <AutoStories fontSize='large' className='text-orange-500 hover:scale-125' />
                <button onClick={handleClick} id='Cashbook' title='Cashbook'>
                    <AutoStories fontSize='large' className='text-blue-500 hover:scale-125' />
                </button>
                <Draw fontSize='large' className='text-emerald-300 hover:scale-125' />
                <Delete fontSize='large' className='text-red-500 hover:scale-125' />
                <RecentActors fontSize='large' className='text-cyan-500 hover:scale-125' />
                <Calculate fontSize='large' className='text-lime-500 hover:scale-125' />
                <CalendarMonth fontSize='large' className='text-amber-400 hover:scale-125' />
                <ForwardToInbox fontSize='large' className='text-green-300 hover:scale-125' />
                <LocalPrintshop fontSize='large' className='text-pink-600 hover:scale-125' />
                <Fireplace fontSize='large' className='text-red-500 hover:scale-125' />
                <Cloud fontSize='large' className='text-fuchsia-500 hover:scale-125' />
            </div>
            <div className='flex gap-4 '>
                <p className="text-xl font-bold text-center text-white">{time},</p>
                <p className="text-xl font-bold text-center text-white">{day}</p>
            </div>
        </div>
    )
}

export default MenuBar