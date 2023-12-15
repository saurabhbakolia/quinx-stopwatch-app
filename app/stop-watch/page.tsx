'use client'
import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const timestampRef = useRef<NodeJS.Timeout | null>(null);
    const [timeStampHistory, setTimeStampHistory] = useState<number[]>([]);

    const startStopwatch = () => {
        setIsRunning(true);
        timestampRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10); // Increment by 0.01 for semi-seconds
        }, 10); // Update every 10 milliseconds for semi-seconds
    };


    const stopStopwatch = () => {
        setIsRunning(false);
        if (timestampRef.current) {
            clearInterval(timestampRef.current);
            setTimeStampHistory((prevTimeStamp) => [...prevTimeStamp, time]);
        }
    };

    const resetStopwatch = () => {
        setTime(0);
        stopStopwatch();
        setTimeStampHistory([]);
    };
    const formatTime = (timeInMilliseconds: number) => {
        const hours = Math.floor(timeInMilliseconds / 3600000);
        const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
        const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
        const milliseconds = timeInMilliseconds % 1000;

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    useEffect(() => {
        return () => {
            clearInterval(timestampRef.current!);
        };
    }, []);

    return (
        <main className='grid grid-cols-1 place-items-center bg-gray-100 h-screen m-auto'>
            <div className='bg-gray-300 w-[100%] h-[100%] md:w-[90%] md:h-[70%] lg:w-[70%] lg:h-[60%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[64%] md:px-10 md:py-6 grid grid-cols-1 lg:grid-cols-3 grid-rows-4 gap-8'>
                <div className='bg-slate-900 col-span-3 row-span-1'>
                    <h1 className='text-blue-400 text-[4rem] text-center d-block align-middle'>{formatTime(time)}</h1>
                </div>
                <div className='row-span-4  text-white flex flex-col gap-6 '>
                    <button
                        className='text-[2em] bg-sky-400 w-[100%] basis-1/3 drop-shadow-xl'
                        onClick={startStopwatch}
                        disabled={isRunning}
                    >
                        Tap
                    </button>
                    <button
                        className='text-[2em] bg-pink-400 w-[100%] basis-1/3 drop-shadow-xl'
                        onClick={stopStopwatch}
                        disabled={!isRunning}
                    >
                        Stop
                    </button>
                    <button
                        className='text-[2em] bg-yellow-400 w-[100%] basis-1/3 drop-shadow-xl'
                        onClick={resetStopwatch}
                        disabled={time === 0}
                    >
                        Reset
                    </button>
                </div>
                <div className='col-span-2 p-4 bg-blue-400 row-span-4 max-h-96 overflow-scroll'>
                    <table className="table-auto w-full text-center text-xl text-gray-500">
                        <tbody>
                            {timeStampHistory.map((timeStamp, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* <td>00:00.12.36</td> */}
                                    {/* <td>8.43</td> */}
                                    {<td>{formatTime(timeStamp)}</td>}
                                    {<td>{(timeStamp / 1000).toFixed(2)}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default StopWatch 