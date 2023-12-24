import { Button } from '@/components/ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url('http://localhost:3001/images/banner.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex flex-col"
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="flex-1 flex flex-col">
          {/* Header */}
          <h1 className='text-white uppercase text-center'>This is Header</h1>
          <div className='p-4 pt-20 flex flex-1 flex-col items-center'>
            <div style={{ width: 900, maxWidth: '100vw' }} className='flex flex-1 flex-col justify-center items-center gap-4 xs:px-4 md:px-20'>
              <div className='flex'>
                {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
                  <StarFilledIcon key={i} style={{ color: '#ffe5b1', width: '24px', height: '24px' }} />
                ))}
              </div>
              <p style={{ color: '#ffe5b1' }} className='m-0 font-normal text-base text-center uppercase'>The Ultimate Luxury Experience</p>
              <p style={{ color: '#ffe5b1', fontFamily: 'Gilda Display', fontSize: 55 }} className='m-0 font-normal text-center uppercase'>Enjoy the best moment of life</p>
              <Button
                variant='outline'
                style={{
                  border: '1px solid #ffe5b1',
                  letterSpacing: 3,
                  backgroundColor: 'rgba(80, 62, 41, 0.6)',
                  color: '#ffe5b1',

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
        <div style={{ maxWidth: 1200 }} className='block my-0 mx-auto px-6'>
          <div style={{ width: 'calc(100% + 32px)' }} className='flex flex-wrap flex-row -mt-8 -ml-8'>
            <div style={{ maxWidth: '50%' }} className='pl-8 pt-8 basis-6/12 grow-0'>
              <div className='flex flex-col gap-2'>
                <div className='flex'>
                  {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
                    <StarFilledIcon key={i} style={{ color: '#e4a853', width: '24px', height: '24px' }} />
                  ))}
                </div>
                <p style={{ color: '#BF9B54' }} className='text-xl font-normal'>
                  The Ultimate Luxury Experience
                </p>
                <p style={{ color: '#90704B', fontSize: 50, lineHeight: 1.5, fontFamily: `'Gilda Display',serif` }} className='font-normal'>
                  Discover the legend
                </p>
                <p style={{ color: '#38393D' }} className='text-sm font-normal'>
                  Welcome to 5-star luxury and dedicated service at AVARI. Modern design with classic royal style will bring a magnificent experience for those people who have a passion for travel. Let’s awaken your spirit. Create a whole new lifestyle with our service; from the most comfortable room to a sumptuous feast. Its extensive gastronomic offerings feature several restaurants and bars; and super wellness facilities, complemented by the magnificent view of Nha Trang city. Everything is accompanied by the urban and cosmopolitan spirit.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: '50%' }} className='pl-8 pt-8 basis-6/12 grow-0'>
              <div className='w-full h-full flex items-center justify-between gap-8'>
                <img src='http://localhost:3001/images/introduction.jpeg' className='w-full rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div style={{ backgroundImage: 'url(http://localhost:3001/images/rooms.jpeg)' }} className='bg-cover bg-center'>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className='py-20'>
          <div style={{ maxWidth: 1200 }} className='block px-6 my-0 mx-auto'>
            <div className='flex items-center justify-center gap-4 mb-8'>
              <div style={{ width: '5vw' }} className='flex items-center'>
                <div style={{ backgroundColor: '#FFE5B1', transform: 'rotate(45deg)' }} className='w-1 h-1'>
                </div>
                <div style={{ backgroundColor: '#FFE5B1' }} className='flex-1 h-px'></div>
              </div>
              <div style={{ fontSize: 54, fontFamily: "'Gilda Display', serif", color: '#FFE5B1' }}>
                Rooms
              </div>
              <div style={{ width: '5vw' }} className='flex items-center'>
                <div style={{ backgroundColor: '#FFE5B1' }} className='flex-1 h-px'></div>
                <div style={{ backgroundColor: '#FFE5B1', transform: 'rotate(45deg)' }} className='w-1 h-1'>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div style={{ width: 'calc(100 % + 16px)' }} className='flex flex-wrap flex-row -my-4'>
                <div style={{ maxWidth: 'cal(100% / 3)' }} className='pl-4 pt-4 basis-1/3 grow-0'>
                  <div style={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }} className='h-full relative overflow-hidden'>
                    <img src='http://localhost:3001/images/rooms/1.jpeg' style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'all ease 0.3s' }} className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                      <p style={{ fontFamily: "'Gilda Display',serif", fontSize: 28, color: '#FFE5B1', lineHeight: 1.5 }} className='font-normal'>Junior Suite</p>
                      <p className='text-base font-normal uppercase text-white'>150.00$ / Night</p>
                      <Button
                        variant='outline'
                        style={{
                          border: '1px solid #ffe5b1',
                          letterSpacing: 3,
                          backgroundColor: 'rgba(80, 62, 41, 0.6)',
                          color: '#ffe5b1',

                        }}
                        className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ maxWidth: 'cal(100% / 3)' }} className='pl-4 pt-4 basis-1/3 grow-0'>
                  <div style={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }} className='h-full relative overflow-hidden'>
                    <img src='http://localhost:3001/images/rooms/2.jpeg' style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'all ease 0.3s' }} className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                      <p style={{ fontFamily: "'Gilda Display',serif", fontSize: 28, color: '#FFE5B1', lineHeight: 1.5 }} className='font-normal'>Family Room</p>
                      <p className='text-base font-normal uppercase text-white'>150.00$ / Night</p>
                      <Button
                        variant='outline'
                        style={{
                          border: '1px solid #ffe5b1',
                          letterSpacing: 3,
                          backgroundColor: 'rgba(80, 62, 41, 0.6)',
                          color: '#ffe5b1',

                        }}
                        className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ maxWidth: 'cal(100% / 3)' }} className='pl-4 pt-4 basis-1/3 grow-0'>
                  <div style={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }} className='h-full relative overflow-hidden'>
                    <img src='http://localhost:3001/images/rooms/3.jpeg' style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'all ease 0.3s' }} className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                      <p style={{ fontFamily: "'Gilda Display',serif", fontSize: 28, color: '#FFE5B1', lineHeight: 1.5 }} className='font-normal'>Double Room</p>
                      <p className='text-base font-normal uppercase text-white'>150.00$ / Night</p>
                      <Button
                        variant='outline'
                        style={{
                          border: '1px solid #ffe5b1',
                          letterSpacing: 3,
                          backgroundColor: 'rgba(80, 62, 41, 0.6)',
                          color: '#ffe5b1',

                        }}
                        className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ maxWidth: 'cal(100% / 2)' }} className='pl-4 pt-4 basis-1/2 grow-0'>
                  <div style={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }} className='h-full relative overflow-hidden'>
                    <img src='http://localhost:3001/images/rooms/4.jpeg' style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'all ease 0.3s' }} className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                      <p style={{ fontFamily: "'Gilda Display',serif", fontSize: 28, color: '#FFE5B1', lineHeight: 1.5 }} className='font-normal'>Deluxe Room</p>
                      <p className='text-base font-normal uppercase text-white'>150.00$ / Night</p>
                      <Button
                        variant='outline'
                        style={{
                          border: '1px solid #ffe5b1',
                          letterSpacing: 3,
                          backgroundColor: 'rgba(80, 62, 41, 0.6)',
                          color: '#ffe5b1',

                        }}
                        className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
                <div style={{ maxWidth: 'cal(100% / 2)' }} className='pl-4 pt-4 basis-1/2 grow-0'>
                  <div style={{ borderTopLeftRadius: 32, borderBottomRightRadius: 32 }} className='h-full relative overflow-hidden'>
                    <img src='http://localhost:3001/images/rooms/5.jpeg' style={{ transition: 'all 0.3s ease 0s' }} className='w-full h-full object-cover object-center' />
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'all ease 0.3s' }} className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center gap-4 p-4'>
                      <p style={{ fontFamily: "'Gilda Display',serif", fontSize: 28, color: '#FFE5B1', lineHeight: 1.5 }} className='font-normal'>Superior Room</p>
                      <p className='text-base font-normal uppercase text-white'>150.00$ / Night</p>
                      <Button
                        variant='outline'
                        style={{
                          border: '1px solid #ffe5b1',
                          letterSpacing: 3,
                          backgroundColor: 'rgba(80, 62, 41, 0.6)',
                          color: '#ffe5b1',

                        }}
                        className='px-16 py-2 rounded-lg font-normal min-w-16 uppercase'>
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='py-20 bg-white'>
        <div style={{ maxWidth: 1200 }} className='block my-0 mx-auto px-6'>
          <div className='flex items-center justify-center gap-4 mb-8'>
            <div style={{ width: '5vw' }} className='flex items-center'>
              <div style={{ transform: 'rotate(45deg)' }} className='w-1 h-1 bg-black'>
              </div>
              <div className='flex-1 h-px bg-black'></div>
            </div>
            <div style={{ fontSize: 54, fontFamily: "'Gilda Display', serif", lineHeight: 1.5 }}
              className='font-normal'>
              Services
            </div>
            <div style={{ width: '5vw' }} className='flex items-center'>
              <div className='flex-1 h-px bg-black'></div>
              <div style={{ transform: 'rotate(45deg)' }} className='w-1 h-1 bg-black'>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-wrap w-full flex-row'>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div
                  style={{
                    width: 'calc(100% + 5vw)',
                    borderTopLeftRadius: '32px',
                    borderBottomRightRadius: '32px',
                  }}
                  className='overflow-hidden cursor-pointer '
                >
                  <img src='http://localhost:3001/images/facilities/1.jpeg' style={{ transition: 'all ease 0.8s' }} className='block w-full object-cover object-center' />
                </div>
              </div>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div className='h-full flex flex-col justify-center'>
                  <div
                    style={{ border: '2px solid #BF9B54', borderTopLeftRadius: 32, borderBottomRightRadius: 32, paddingLeft: '7vw' }}
                    className='pr-8 py-8 shrink-0 z-20 flex flex-col justify-center gap-2'
                  >
                    <p style={{ fontSize: 32, lineHeight: 1.5, fontFamily: "'Gilda Display',serif", color: '#222' }} className='font-normal'>The Restaurant</p>
                    <p style={{ fontSize: 15, lineHeight: 1.5, fontFamily: "'Barlow',serif", color: '#666' }} className='font-normal'>
                      Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                    </p>
                    <Button
                      variant='outline'
                      style={{
                        border: '1px solid transparent',
                        backgroundColor: '#ab8a62',
                        color: '#FFE5B1',
                      }}
                      className='mt-4 px-8 rounded-lg font-normal self-start font-medium normal-case'>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap w-full flex-row'>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div className='h-full flex flex-col justify-center'>
                  <div
                    style={{ border: '2px solid #BF9B54', borderTopLeftRadius: 32, borderBottomRightRadius: 32, paddingRight: '7vw' }}
                    className='pl-8 py-8 shrink-0 z-20 flex flex-col justify-center gap-2'
                  >
                    <p style={{ fontSize: 32, lineHeight: 1.5, fontFamily: "'Gilda Display',serif", color: '#222' }} className='font-normal'>The Restaurant</p>
                    <p style={{ fontSize: 15, lineHeight: 1.5, fontFamily: "'Barlow',serif", color: '#666' }} className='font-normal'>
                      Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                    </p>
                    <Button
                      variant='outline'
                      style={{
                        border: '1px solid transparent',
                        backgroundColor: '#ab8a62',
                        color: '#FFE5B1',
                      }}
                      className='mt-4 px-8 rounded-lg font-normal self-start font-medium normal-case'>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div
                  style={{
                    width: 'calc(100% + 5vw)',
                    borderTopLeftRadius: '32px',
                    borderBottomRightRadius: '32px',
                  }}
                  className='overflow-hidden cursor-pointer '
                >
                  <img src='http://localhost:3001/images/facilities/1.jpeg' style={{ transition: 'all ease 0.8s' }} className='block w-full object-cover object-center' />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap w-full flex-row'>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div
                  style={{
                    width: 'calc(100% + 5vw)',
                    borderTopLeftRadius: '32px',
                    borderBottomRightRadius: '32px',
                  }}
                  className='overflow-hidden cursor-pointer '
                >
                  <img src='http://localhost:3001/images/facilities/1.jpeg' style={{ transition: 'all ease 0.8s' }} className='block w-full object-cover object-center' />
                </div>
              </div>
              <div style={{ maxWidth: '50%' }} className='basis-1/2 grow-0'>
                <div className='h-full flex flex-col justify-center'>
                  <div
                    style={{ border: '2px solid #BF9B54', borderTopLeftRadius: 32, borderBottomRightRadius: 32, paddingLeft: '7vw' }}
                    className='pr-8 py-8 shrink-0 z-20 flex flex-col justify-center gap-2'
                  >
                    <p style={{ fontSize: 32, lineHeight: 1.5, fontFamily: "'Gilda Display',serif", color: '#222' }} className='font-normal'>The Restaurant</p>
                    <p style={{ fontSize: 15, lineHeight: 1.5, fontFamily: "'Barlow',serif", color: '#666' }} className='font-normal'>
                      Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                    </p>
                    <Button
                      variant='outline'
                      style={{
                        border: '1px solid transparent',
                        backgroundColor: '#ab8a62',
                        color: '#FFE5B1',
                      }}
                      className='mt-4 px-8 rounded-lg font-normal self-start font-medium normal-case'>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='uppercase text-center'>This is Footer</h1>

    </>
  )
}
