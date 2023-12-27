import React from 'react'

const About = () => {
    return (
        <>
            <div
                style={{ backgroundImage: 'url(http://localhost:3001/images/slider/4.jpeg)' }}
                className='bg-fixed bg-cover bg-center'
            >
                {/* Static Banner */}
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <h1 className='text-white uppercase text-center'>This is Header</h1>
                    <div style={{ maxWidth: 1200 }} className='w-full px-6 my-0 mx-auto block'>
                        <div style={{ padding: '120px 0' }} className='flex flex-col justify-center items-start gap-4'>
                            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 6, fontSize: 15, lineHeight: 1.5 }} className='font-normal text-white uppercase'>
                                About
                            </h2>
                            <h1 style={{ fontFamily: "'Gilda Display',serif" }} className='text-6xl font-normal text-white text-left'>
                                Know more about us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white py-20'>
                <div style={{ maxWidth: 1200 }} className='w-full block px-6 my-0 mx-auto'>
                    <p className='font-normal text-base'>
                        Khách sạn AVARI có quy mô 20 tầng với 110 phòng nghỉ mang phong cách tân cổ điển, chia làm 5 loại phòng từ cơ bản đến cao cấp gồm: phòng Superior, phòng Deluxe, phòng Senior Deluxe, phòng Connecting Room, phòng AVARI SUITE.<br />
                        Tọa lạc ngay trung tâm thành phố, trên trục đường chính ra sân bay Cam Ranh gần các trung tâm vui chơi giải trí, mua sắm và ăn uống,... cách bãi biển 50m.<br />
                        Phòng nghỉ có các dịch vụ tiện tích như: Wifi tốc độ cao, Hồ bơi, quầy bar, phòng tập gym, xông hơi, nhà hàng, phòng hội nghị cho các nhu cầu nghỉ dưỡng kết hợp công tác.<br />
                        Có cửa hàng lưu niệm, Phục vụ phòng 24 giờ.<br />
                        Có chỗ đậu xe khách lớn 49 chỗ và đỗ xe miễn phí.<br />
                    </p>
                </div>
            </div>
            <h1 className='uppercase text-center'>This is Footer</h1>
        </>
    )
}

export default About
