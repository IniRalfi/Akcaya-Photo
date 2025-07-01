import React from 'react';

function ContactPage() {
    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto max-w-6xl px-5">

                {/* Judul Halaman */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Hubungi Kami</h1>
                    <p className="text-lg text-slate-500 mt-2">Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengar.</p>
                </div>

                {/* Layout 2 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Kolom Kiri: Info Kontak */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Info Kontak</h3>
                            <p className="text-slate-600 font-light">
                                Jangan ragu untuk menghubungi kami melalui detail di bawah ini.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-700">Email</h4>
                                <a href="mailto:akcayaphoto@gmail.com" className="text-red-600 hover:underline">akcayaphoto@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-700">Lokasi</h4>
                                <p className="text-slate-600">Pontianak, Kalimantan Barat</p>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Form */}
                    <div>
                        {/* <form action="" method="GET" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700">Nama Lengkap</label>
                                <input type="text" id="name" name="name" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Alamat Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">Pesan</label>
                                <textarea id="message" name="message" rows="5" className="w-full p-3 bg-slate-50 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition" required></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-5 text-white font-semibold bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                            >
                                Kirim Pesan
                            </button>
                        </form> */}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ContactPage;