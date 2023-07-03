import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBookingDropdown, setShowBookingDropdown] = useState(false); // State untuk mengontrol visibilitas dropdown menu Booking
  const [showLoginDropdown, setShowLoginDropdown] = useState(false); // State untuk mengontrol visibilitas dropdown menu Login

  const handleBookingDropdown = () => {
    setShowBookingDropdown(!showBookingDropdown); // Toggle visibilitas dropdown menu Booking
  };

  const handleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown); // Toggle visibilitas dropdown menu Login
  };

  useEffect(() => {
    // Mengecek nilai isLoggedIn di localStorage atau sessionStorage saat halaman dimuat
    const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
    const isLoggedInSessionStorage = sessionStorage.getItem("isLoggedIn");

    if (isLoggedInLocalStorage || isLoggedInSessionStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Menyimpan status isLoggedIn di localStorage
    sessionStorage.setItem("isLoggedIn", "true"); // Menyimpan status isLoggedIn di sessionStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Menghapus status isLoggedIn dari localStorage
    sessionStorage.removeItem("isLoggedIn"); // Menghapus status isLoggedIn dari sessionStorage
    sessionStorage.removeItem("userData");
  };

  return (
    <div className="fixed bg-white top-0 w-[100%] z-20 shadow-md">
      <div className="container mx-auto flex justify-between item-center px-4">
        <div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
          <span className="italic">Fly</span>
          <MdFlightTakeoff />
          <span className="italic text-green-600">Ticket</span>
        </div>

        <div className="hidden p-4 md:flex gap-10 tracking-wider text-gray-600">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={handleBookingDropdown} // Mengatur visibilitas dropdown menu Booking saat ikon diklik
              className="hover:text-green-700"
            >
              Booking
            </button>
            {showBookingDropdown && (
              <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link href="/booking">
                  <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    One Way
                  </span>
                </Link>
                <Link href="/roundTrip">
                  <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Two Way
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/" className="hover:text-green-700">
            About
          </Link>
          <Link href="/" className="hover:text-green-700">
            Service
          </Link>
        </div>

        <div className="p-4 flex gap-5">
          {isLoggedIn && (
            <div className="relative">
              <button
                className="hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white"
                onClick={handleLoginDropdown} // Mengatur visibilitas dropdown menu Login saat ikon diklik
              >
                <MdFlightTakeoff size={23} />
              </button>
              {showLoginDropdown && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link href="/akun">
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Akun
                    </span>
                  </Link>
                  <Link href="/history">
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      History
                    </span>
                  </Link>
                  <Link href="/notifikasi">
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Notifikasi
                    </span>
                  </Link>
                </div>
              )}
            </div>
          )}

          {!isLoggedIn && (
            <Link href="/login">
              <button className="hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white">
                Login
              </button>
            </Link>
          )}

          <Link href="/cart">
            <button className="hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white">
              <AiOutlineShoppingCart size={23} />
            </button>
          </Link>
        </div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        )}
      </div>

      {/* Responsif menu */}
      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[33px] ${
          toggle ? `left-[0]` : `left-[100%]`
        }`}
      >
        <Link href="/" className="hover:text-green-700 p-4">
          Home
        </Link>
        <div className="relative">
          <button
            onClick={handleBookingDropdown} // Mengatur visibilitas dropdown menu Booking saat ikon diklik
            className="hover:text-green-700 p-4"
          >
            Booking
          </button>
          {showBookingDropdown && (
            <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              <Link href="/booking">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  One Way
                </span>
              </Link>
              <Link href="/roundTrip">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Two Way
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link href="/" className="hover:text-green-700 p-4">
          About
        </Link>
        <Link href="/" className="hover:text-green-700 p-4">
          Service
        </Link>
        {isLoggedIn && (
          <div className="relative">
            <button
              className="border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white p-4"
              onClick={handleLoginDropdown} // Mengatur visibilitas dropdown menu Login saat ikon diklik
            >
              <MdFlightTakeoff size={23} />
            </button>
            {showLoginDropdown && (
              <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link href="/akun">
                  <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Akun
                  </span>
                </Link>
                <Link href="/history">
                  <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    History
                  </span>
                </Link>
                <Link href="/notifikasi">
                  <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Notifikasi
                  </span>
                </Link>
              </div>
            )}
          </div>
        )}
        {!isLoggedIn && (
          <Link href="/login" className="hover:text-green-700 p-4">
            Login
          </Link>
        )}
        <Link href="/cart" className="hover:text-green-700 p-4">
          <AiOutlineShoppingCart size={23} />
        </Link>
        <div className="flex gap-3 items-center p-4">
          <BsFacebook size={20} className="hover:text-green-700" />
          <AiFillInstagram size={20} className="hover:text-green-700" />
          <BsTwitter size={20} className="hover:text-green-700" />
          <IoLogoWhatsapp size={20} className="hover:text-green-700" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
