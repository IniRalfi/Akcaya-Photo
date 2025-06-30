import React from 'react';

const founders = [
    {
        name: 'Rafli Pratama',
        role: 'Co-Founder',
        imageUrl: 'https://i.pravatar.cc/150?u=rafli',
    },
    {
        name: 'Fariz Azka Riyandi',
        role: 'Co-Founder',
        imageUrl: 'https://i.pravatar.cc/150?u=fariz',
    },
    {
        name: 'Raffa M. Shaddam',
        role: 'Co-Founder',
        imageUrl: 'https://i.pravatar.cc/150?u=shaddam',
    },
    {
        name: 'Muhammad Rizky',
        role: 'Co-Founder',
        imageUrl: 'https://i.pravatar.cc/150?u=rizky',
    },
    {
        name: 'Aryanto Subagyo',
        role: 'Co-Founder',
        imageUrl: 'https://i.pravatar.cc/150?u=aryanto',
    },
];


function About() {
    return (
        <section id='about'
            className="py-20 md:py-28">
            <div className="container mx-auto max-w-6xl px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* KOLOM 1: Aksen Visual Abstrak (Nuansa Lensa Kamera) */}
                    <div className="relative w-full h-80 flex items-center justify-center">
                        {/* Cincin luar */}
                        <div className="absolute w-80 h-80 border-2 border-slate-300 rounded-full"></div>
                        {/* Cincin tengah */}
                        <div className="absolute w-60 h-60 border-2 border-slate-300 rounded-full"></div>
                        {/* Cincin dalam (inti) */}
                        <div className="absolute w-24 h-24 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-36 w-full text-slate-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* KOLOM 2: Teks Konten */}
                    <div className='px-5 md:px-0'>
                        <p className="text-sm font-semibold text-red-600 tracking-widest uppercase mb-2">
                            Tentang Kami
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            Akcaya Photography
                        </h2>
                        <div className="space-y-4 text-slate-600 text-sm md:text-lg font-light ">
                            <p>
                                Akcaya Photo adalah komunitas fotografi yang didirikan pada tanggal 22 November 2023 oleh lima individu yang memiliki semangat dan ketertarikan yang sama dalam dunia fotografi, yaitu Rafli Pratama, Fariz Azka Riyandi, Raffa Muhammad Shaddam, Muhammad Rizky, dan Aryanto Subagyo.
                            </p>
                            <p>
                                Kami membentuk Akcaya Photo sebagai wadah untuk menyalurkan hobi kami dalam hunting foto, mengeksplorasi keindahan visual dari berbagai sudut pandang, serta sebagai ruang tumbuh bersama bagi siapa pun yang memiliki semangat yang sama.
                            </p>
                            <p>
                                Website ini dibangun sebagai bentuk portofolio digital dari hasil perjalanan dan karya kami dalam dunia fotografi. Setiap foto yang ditampilkan di sini merupakan cerita, momen, dan perspektif yang kami abadikan dengan penuh rasa dan makna.
                            </p>
                            <p className="font-medium text-slate-700 pt-2">
                                Selamat datang di Akcaya Photo—tempat di mana cahaya dan cerita berpadu menjadi satu.
                            </p>
                        </div>
                    </div>

                </div>
                {/* === BAGIAN BARU: TIM PENDIRI === */}
                <div className="mt-20 md:mt-28">
                    <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
                        Tim Pendiri Akcaya Photo
                    </h3>

                    <div className="flex flex-wrap gap-8 justify-center">
                        {founders.map((founder) => (
                            <div
                                key={founder.name}
                                className="bg-white p-6 rounded-xl shadow-md w-full max-w-xs text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                <img
                                    src={founder.imageUrl}
                                    alt={`Foto ${founder.name}`}
                                    className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-slate-100"
                                />
                                <h4 className="text-xl font-bold text-slate-800">{founder.name}</h4>
                                <p className="text-red-600 font-medium">{founder.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;