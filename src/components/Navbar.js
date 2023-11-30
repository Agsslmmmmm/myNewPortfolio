import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import {Link, asScrollLink} from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Article', href: '#article' },
  { name: 'Skills', href: '#skills' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 fixed w-full z-50 shadow-md backdrop-blur-sm bg-transparent" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="font-bold text-lg text-gray-600">Agus<span className='text-purple-600'>Salim</span></span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(item.href.substring(1));
                targetElement.scrollIntoView({behavior: 'smooth'});
              }} className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
            <a href="https://www.instagram.com/agsslmmm_/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
              <FaInstagram size={30} className='hover:scale-110 transition-all duration-500' />
            </a>
            <a href="https://github.com/Agsslmmmmm" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
              <FaGithub size={30} className='hover:scale-110 transition-all duration-500' />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between backdrop-blur-sm">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-bold text-lg text-gray-600">Agus<span className='text-purple-600'>Salim</span></span>

              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:tracking-widest transition-all duration-500"
                    >
                      {item.name}
                    </a>
                  ))}
                <div className="flex space-x-2">
                  <a href="https://www.instagram.com/agsslmmm_/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
                    <FaInstagram size={30} className='hover:scale-110 transition-all duration-500' />
                  </a>
                  <a href="https://github.com/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500">
                    <FaGithub size={30} className='hover:scale-110 transition-all duration-500' />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
