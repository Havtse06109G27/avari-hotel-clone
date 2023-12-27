import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black pt-16'>
            <div style={{ maxWidth: 1200 }} className='w-full px-6 my-0 mx-auto block'>
                <div style={{ width: 'calc(100%+16px)' }} className='flex flex-wrap flex-row -mt-4 -ml-4'>
                    <div style={{ maxWidth: 'calc(100%/3)' }} className='pl-4 pt-4 basis-1/3 grow-0'>
                        <h3
                            style={{ color: 'rgba(191, 155, 84, 0.9)', fontFamily: "Fahkwang,serif" }} className='font-normal uppercase text-justify text-2xl mb-2'>
                            Avari Hotel
                        </h3>
                        <p className='font-normal text-justify text-base text-white'>
                            38 Tran Phu, Tho Loc Ward, Nha Trang City, Vietnam
                        </p>
                        <p className='font-normal text-justify text-base text-white'>
                            Tel: +84 (0) 28 3333 2222
                        </p><p className='font-normal text-justify text-base text-white'>
                            Email: avarihotel@avari.com
                        </p>
                    </div>
                    <div style={{ maxWidth: '8.333333%', flexBasis: '8.333333%' }} className='pl-4 pt-4 grow-0'></div>
                    <div style={{ maxWidth: 'calc(100%/3)' }} className='pl-4 pt-4 basis-1/3 grow-0'>
                        <h3
                            style={{ color: 'rgba(191, 155, 84, 0.9)', fontFamily: "Fahkwang,serif" }} className='font-normal uppercase text-justify text-2xl mb-2'>
                            Avari Hotel
                        </h3>
                        <p className='font-normal text-justify text-base text-white'>
                            38 Tran Phu, Tho Loc Ward, Nha Trang City, Vietnam
                        </p>
                        <p className='font-normal text-justify text-base text-white'>
                            Tel: +84 (0) 28 3333 2222
                        </p><p className='font-normal text-justify text-base text-white'>
                            Email: avarihotel@avari.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
