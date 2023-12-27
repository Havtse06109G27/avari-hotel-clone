import Header from '@/components/header'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div
                style={{ backgroundImage: 'url(http://localhost:3001/images/slider/4.jpeg)' }}
                className='bg-fixed bg-cover bg-center'
            >
                {/* Static Banner */}
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <Header />
                    <div style={{ maxWidth: 1200 }} className='w-full px-6 my-0 mx-auto block'>
                        <div style={{ padding: '120px 0' }} className='flex flex-col justify-center items-start gap-4'>
                            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 6, fontSize: 15, lineHeight: 1.5 }} className='font-normal text-white uppercase'>
                                Contact
                            </h2>
                            <h1 style={{ fontFamily: "'Gilda Display',serif" }} className='text-6xl font-normal text-white text-left'>
                                Contact us now
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white py-20'>
                <div style={{ maxWidth: 1200 }} className='w-full block px-6 my-0 mx-auto'>
                    <p className='font-normal text-base'>
                        CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ DU LỊCH ANH ANH <br />
                        Địa chỉ​: Số 10 -12 Hoàng Diệu, Phường Vĩnh Nguyên, Thành phố Nha Trang, Tỉnh Khánh Hòa, Việt Nam<br />
                        Email: Ctanhanh.jsc@gmail.com <br />
                        Điện thoại: 02583663999
                    </p>
                </div>
            </div>
            <h1 className='uppercase text-center'>This is Footer</h1>
        </>
    )
}

export default Contact
