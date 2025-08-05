// components/layout/Header.tsx

import Link from 'next/link';
import Image from 'next/image';

// 1. ADD BuildingStorefrontIcon to the import from the library
import { 
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const cartItemCount = 0; 

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray">
      <nav className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
            <Link href="/" aria-label="Aurora Homepage">
            <Image
              src="/images/logo.png"
              alt="Aurora Logo"
              width={180}
              height={120}
              className="object-contain"
              priority
            />
            </Link>

          <div className="hidden md:flex space-x-12">

            <Link href="/shop" className="text-sm font-medium text-black hover:text-blue-900 transition-colors">
              Shop
            </Link>

            <Link href="/story" className="text-sm font-medium text-black hover:text-blue-900 transition-colors">
              Our Story
            </Link>

            <Link href="/journal" className="text-sm font-medium text-black hover:text-blue-900 transition-colors">
              Journal
            </Link>

            <Link href="/shop" className="text-sm font-medium text-red-900 hover:text-blue-900 transition-colors">
              New Arrivals
            </Link>

            <Link href="/shop" className="text-sm font-medium text-red-950 hover:text-blue-900 transition-colors">
              Coming Soon
            </Link>

          </div>
        </div>

        {/* Right Side: Action Icons */}
        <div className="flex items-center space-x-4">

            <button aria-label="Search" className="hidden md:block text-black hover:text-black transition-colors">
                <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          
            <Link href="/locations" aria-label="Store Locations" className="flex items-center space-x-1 text-black hover:text-black transition-colors">
                <BuildingStorefrontIcon className="h-6 w-6" />
                <span>Stores</span>
            </Link>

            <Link href="/account" aria-label="Account" className="text-black hover:text-black transition-colors">
                <UserIcon className="h-6 w-6" />
            </Link>

            <Link href="/cart" aria-label="Cart" className="relative text-black hover:text-black transition-colors">
                <HeartIcon className="h-6 w-6" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemCount}
                    </span>
                )}
            </Link>

            <Link href="/cart" aria-label="Cart" className="relative text-black hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemCount}
                    </span>
                )}
            </Link>

        </div>

      </nav>
    </header>
  );
};

export default Header;