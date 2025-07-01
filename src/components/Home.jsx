import React from 'react';
import logo from '../assets/Akcaya.png';

function Hero() {
    return (

        <section
            id="home"
            className="w-full h-[calc(100vh-4rem)] flex items-center mt-10 md:mt-0 p-5 md:p-10"
        >
            {/* Container utama untuk membatasi lebar dan menengahkan konten */}
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

                    {/* 1. Bagian Teks (di kiri) */}
                    <div className="md:flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                            Akcaya Photo
                        </h1>
                        <p className="text-sm md:text-base text-slate-500 mt-4 mb-8 max-w-xl mx-auto md:mx-0">
                            Ini adalah website portofolio komunitas kami, sebuah ruang untuk menampilkan karya-karya terbaik dari setiap anggota.
                        </p>
                        <p className=" text-lg md:text-xl text-slate-600 mb-8">
                            Photography • Art • Community
                        </p>
                        <a
                            href="#about"
                            className="inline-block py-3 px-8 bg-[#f63b3b] text-white font-semibold rounded-lg shadow-md hover:bg-[#eb2525] transition-all duration-300 transform hover:scale-105"
                        >
                            Selengkapnya Tentang Kami
                        </a>
                    </div>

                    {/* 2. Bagian Gambar/Logo (di kanan) */}
                    <div className="md:flex-1 flex justify-center">
                        <img
                            src={logo}
                            alt="Logo Akcaya Photo"
                            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;