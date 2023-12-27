'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import navigations from "@/utils/navigations";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons"


const HeaderMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="py-4">
            <TextAlignJustifyIcon className="w-6 h-6 text-2xl text-white" />
          </div>
        </SheetTrigger>
        <SheetContent className="sm:w-full md:max-w-full bg-[#f8f5f0]">
          <div className="w-[86vw] h-[100vh] py-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {navigations.map((navigation) => (
                <div key={navigation.title} className="p-1 hover:bg-[#ffe5b1]">
                  <div className="flex items-center gap-[2px] cursor-pointer">
                    <p className="text-xl font-normal uppercase">
                      {navigation.title}
                    </p>
                    {navigation.children && (
                      <ChevronDownIcon className="text-base" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default HeaderMenu
