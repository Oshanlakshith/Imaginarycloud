// File: src/Header.js
import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link } from "react-router-dom";
import Image from "./assets/images/site_logo.jpg"

const navigation = [
  { name: 'SERVICES', href: '/', current: true },
  { name: 'PORTFOLIO', href: '/portfolio', current: false },
  { name: 'RESOURCES', href: '/resources', current: false },
  { name: 'COMPANY', href: '/company', current: false },
  { name: 'CAREERS', href: '/careers', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Header() {
  return (
    <Disclosure as="nav" className="bg-white-800">
    <div className="custom_container_one max-w-7xl">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-between sm:items-stretch">
          <div className="flex shrink-0 items-center">
            <img
              alt="Your Company"
              src={Image}
              className="h-auto w-[50%] object-contain"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'text-black text-white' : ' hover:text-black',
              'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            as={Link}
            to={item.href}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : ' hover:text-black',
              'block rounded-md px-3 py-2 text-base font-medium'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </DisclosurePanel> */}
  </Disclosure>
  )
}

export default Header;
