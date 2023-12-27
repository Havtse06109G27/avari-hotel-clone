'use client';
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import HeaderMenu from "./header-menu"

const Header = () => {
    return (
        <div className="flex items-center relative w-full my-0 mx-auto sm:px-4 lg:px-0 lg:justify-center sm:justify-start">
            <HeaderMenu />
            <img
                src="http://localhost:3001/images/logo-avari.svg"
                alt="logo"
                className="w-32 absolute top-0 left-2/4 -translate-x-2/4 z-10"
            />
            {/* <div
                style={{ zIndex: 1, color: '#ffe5b1', backgroundImage: 'linear-gradient(180deg, rgba(80, 62, 41, 0.9) 0%, rgba(80, 62, 41, 0.7) 100%)', borderRadius: '0px 0px 16px 16px', transition: 'color 0.2s linear' }}
                className="flex items-center px-6 py-2 gap-4 relative"
            >
                <div
                    style={{ width: '34vw' }}
                    className="flex justify-around items-center gap-4"
                >
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">Home</p>
                    </div>
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">About</p>
                    </div>
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">Rooms</p>
                    </div>
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">Offer</p>
                    </div>
                </div>
                <div className="w-32"></div>
                <div
                    style={{ width: '34vw' }}
                    className="flex justify-around items-center gap-4"
                >
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">Services</p>
                        <ChevronDownIcon />
                    </div>
                    <div
                        style={{ gap: 2, transition: 'all ease 0.3s' }}
                        className="relative flex items-center p-2 cursor-pointer"
                    >
                        <p style={{ color: 'inherit' }} className="font-normal text-base">Contact</p>
                    </div>
                    <Button
                        style={{ backgroundImage: 'linear-gradient(94deg, #C87F4A 2.33%, rgba(191, 155, 84, 0.9) 52.19%, #C87F4A 100%)', fontSize: 13, lineHeight: 1.75, padding: '4px 5px', borderRadius: 4 }}
                        className="inline-flex items-center justify-center relative cursor-pointer font-medium text-white uppercase min-w-16"
                    >
                        Reverse Now
                    </Button>
                    <div className="w-14 relative p-2 flex items-center justify-between cursor-pointer">
                        <p style={{ transition: 'all ease 0.3s' }} className="font-normal text-base">EN</p>
                        <ChevronDownIcon />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header
