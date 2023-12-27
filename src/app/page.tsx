import Footer from '@/components/footer'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import rooms from '@/utils/rooms'
import services from '@/utils/services'
import { StarFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col min-h-[100vh] bg-cover bg-center bg-[url('http://localhost:3001/images/banner.jpeg')]"
      >
        <div className="bg-[#00000099] flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Banner */}
          <div className='p-4 pt-20 flex flex-1 flex-col items-center'>
            <div className='w-[900px] max-w-[100vh] flex flex-1 flex-col justify-center items-center gap-4'>
              <div className='flex'>
                {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
                  <StarFilledIcon key={i} className='text-[#ffe5b1] w-6 h-6' />
                ))}
              </div>
              <p className='text-[#ffe5b1] m-0 font-normal text-base text-center uppercase'>The Ultimate Luxury Experience</p>
              {/* <p style={{ color: '#ffe5b1', fontFamily: 'Gilda Display', fontSize: 55 }} className='m-0 font-normal text-center uppercase'>Enjoy the best moment of life</p> */}
              <p style={{ fontFamily: 'Gilda Display' }} className='text-[#ffe5b1] text-base lg:text-[55px] m-0 font-normal text-center uppercase'>Enjoy the best moment of life</p>
              <Button
                variant='avari-primary'
                style={{
                  border: '1px solid #ffe5b1',
                }}
                className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                Rooms
              </Button>
            </div>
          </div>
          <h1 className='text-white uppercase text-center'>This is booking form</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className='py-20 bg-white'>
        <div className='block w-full my-0 mx-auto px-6 sm:px-4'>
          <div className='w-[calc(100% + 32px)] flex flex-wrap flex-row -mt-8 -ml-8'>
            <div className='sm:max-w-full lg:max-w-[50%] pl-8 pt-8 sm:basis-full lg:basis-6/12 grow-0'>
              <div className='flex flex-col gap-2'>
                <div className='flex'>
                  {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
                    <StarFilledIcon key={i} className='text-[#e4a853] w-6 h-6' />
                  ))}
                </div>
                <p className='text-[#BF9B54] text-xl font-normal'>
                  The Ultimate Luxury Experience
                </p>
                <p style={{ fontFamily: `'Gilda Display',serif` }} className='font-normal text-[#90704B] text-[50px]'>
                  Discover the legend
                </p>
                <p className='text-[#38393D] text-sm font-normal'>
                  Welcome to 5-star luxury and dedicated service at AVARI. Modern design with classic royal style will bring a magnificent experience for those people who have a passion for travel. Let’s awaken your spirit. Create a whole new lifestyle with our service; from the most comfortable room to a sumptuous feast. Its extensive gastronomic offerings feature several restaurants and bars; and super wellness facilities, complemented by the magnificent view of Nha Trang city. Everything is accompanied by the urban and cosmopolitan spirit.
                </p>
              </div>
            </div>
            <div className='sm:max-w-full lg:max-w-[50%] pl-8 pt-8 sm:basis-full lg:basis-6/12 grow-0'>
              <div className='w-full h-full flex items-center justify-between gap-8'>
                <img src='http://localhost:3001/images/introduction.jpeg' className='w-full rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div className='bg-[url(http://localhost:3001/images/rooms.jpeg)] bg-cover bg-center'>
        <div className='bg-[#00000099] py-20'>
          <div className='w-full block sm:px-4 lg:px-6 my-0 mx-auto'>
            <div className='flex items-center justify-center gap-4 mb-8'>
              <div className='w-[5vw] flex items-center'>
                <div className='w-1 h-1 bg-[#FFE5B1] rotate-45'></div>
                <div className='flex-1 h-px bg-[#FFE5B1]'></div>
              </div>
              <div style={{ fontFamily: "'Gilda Display', serif" }} className='text-[54px] text-[#FFE5B1]'>
                Rooms
              </div>
              <div className='w-[5vw] flex items-center'>
                <div className='flex-1 h-px bg-[#FFE5B1]'></div>
                <div className='w-1 h-1 bg-[#FFE5B1] rotate-45'></div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='w-[calc(100 % + 16px)] flex flex-wrap flex-row -my-4 sm:-mt-4 sm:-ml-4'>
                {rooms.map((room) => (
                  <div key={room.type} className='sm:max-w-full pl-4 pt-4 sm:basis-full grow-0'>
                    <div className='h-full relative rounded-tl-[32px] rounded-br-[32px] overflow-hidden'>
                      <img src={room.path} style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                      <div style={{ transition: 'all ease 0.3s' }} className='bg-[#00000040] absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                        <p style={{ fontFamily: "'Gilda Display',serif", lineHeight: 1.5 }} className='font-normal text-[28px] text-[#FFE5B1] leading-7'>
                          {room.type}
                        </p>
                        <p className='text-base font-normal uppercase text-white'>{room.price}</p>
                        <Button
                          variant='avari-primary'
                          className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='py-20 bg-white'>
        <div className='block w-full my-0 mx-auto px-4'>
          <div className='flex items-center justify-center gap-4 mb-8'>
            <div className='flex w-[5vw] items-center'>
              <div className='w-1 h-1 rotate-45 bg-black'></div>
              <div className='flex-1 h-px bg-black'></div>
            </div>
            <div style={{ fontFamily: "'Gilda Display', serif" }}
              className='text-[54px] font-normal'>
              Services
            </div>
            <div className='flex w-[5vw] items-center'>
              <div className='flex-1 h-px bg-black'></div>
              <div className='w-1 h-1 rotate-45 bg-black'></div>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            {services.map((service) => (
              <div key={service.type} className='flex flex-wrap w-full flex-row'>
                <div className='sm:max-w-full sm:basis-full grow-0 order-none'>
                  <div className='w-[calc(100% + 5vw)] rounded-tl-[32px] rounded-br-[32px] overflow-hidden cursor-pointer'>
                    <img src={service.path} style={{ transition: 'all ease 0.8s' }} className='block w-full object-cover object-center' />
                  </div>
                </div>
                <div className='sm:max-w-full sm:basis-full grow-0'>
                  <div className='h-full flex flex-col justify-center'>
                    <div className='sm:p-8 shrink-0 z-20 flex flex-col justify-center gap-2 border-[1px] border-solid border-[#BF9B54] rounded-tl-[32px] rounded-br-[32px]'>
                      <p style={{ fontFamily: "'Gilda Display',serif" }} className='font-normal text-[32px] text-[#222]'>
                        {service.type}
                      </p>
                      <p style={{ fontFamily: "'Barlow',sans-serif" }} className='font-normal text-[15px] text-[#666]'>
                        {service.desc}
                      </p>
                      <Button variant='avari-secondary' className='mt-4 px-8 rounded-lg font-medium self-start '>Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
