import React from 'react'

function StopWatch() {
    return (
        <main className='grid grid-cols-1 place-items-center bg-gray-100 h-screen m-auto'>
            <div className='bg-gray-300 w-[100%] h-[100%] md:w-[90%] md:h-[70%] lg:w-[70%] lg:h-[60%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[64%] px-10 py-6 grid grid-cols-3 grid-rows-4 gap-8'>
                <div className='bg-slate-900 col-span-3 row-span-1'>
                    <h1 className='text-blue-400 text-[4rem] text-center d-block align-middle'>90.36</h1>
                </div>
                <div className='row-span-4  text-white flex flex-col gap-6'>
                    <button className='text-[2em] bg-sky-400 w-[100%] basis-1/3 drop-shadow-xl'>Tap</button>
                    <button className='text-[2em] bg-pink-400 w-[100%] basis-1/3 drop-shadow-xl'>Stop</button>
                    <button className='text-[2em] bg-yellow-400 w-[100%] basis-1/3 drop-shadow-xl'>Reset</button>
                </div>
                <div className='col-span-2'>
                    <table className="table-auto w-full text-center text-xl text-gray-500">
                        <thead>
                            <tr>
                                {/* <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>00:00.12.36</td>
                                <td>8.43</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default StopWatch 