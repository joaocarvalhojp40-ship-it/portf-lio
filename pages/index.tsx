import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] p-8 md:p-16 font-sans overflow-x-hidden relative flex flex-col items-center justify-center space-y-12 lg:space-y-0 selection:bg-[#FF002B] selection:text-white">
      <div className="relative w-full max-w-6xl h-auto lg:h-[950px] flex flex-col lg:block">

        <div className="lg:absolute top-10 left-10 bg-white text-black p-6 rounded-xl shadow-[10px_10px_0px_rgba(255,0,43,0.8)] transform rotate-[-2deg] w-full max-w-md z-10 border-4 border-black hover:rotate-0 transition-transform duration-300">
          <div className="flex gap-4 items-start">
            <div className="w-28 h-36 bg-gray-200 border-2 border-black flex-shrink-0 grayscale flex items-center justify-center overflow-hidden">
              <span className="text-xs font-mono text-gray-500 font-bold rotate-[-90deg] uppercase tracking-widest">Foto / Avatar</span>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-black uppercase leading-none mb-2 tracking-tighter">João<br/>Paulo</h1>
              <p className="text-sm font-bold border-b-4 border-black pb-2 mb-2 uppercase text-[#FF002B]">Desenvolvedor & Suporte</p>
              <p className="text-xs font-mono mb-1 font-bold">14 Anos | São Paulo, BR</p>
              <a href="mailto:joaocarvalhojp40@gmail.com" className="text-xs font-mono break-all hover:text-[#FF002B] font-bold">
                joaocarvalhojp40@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:absolute top-5 right-20 bg-[#FF002B] text-white p-8 shadow-2xl transform rotate-[3deg] w-full max-w-md z-20 border-4 border-black mt-8 lg:mt-0 hover:rotate-0 transition-transform duration-300">
          <h2 className="text-4xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black tracking-tighter">Educação</h2>
          <ul className="space-y-3 font-bold text-lg mb-8 text-black">
            <li className="flex items-center gap-2"><span className="text-2xl">✦</span> Imprensa Jovem escolar</li>
            <li className="flex items-center gap-2"><span className="text-2xl">✦</span> Robótica escolar</li>
          </ul>
          
          <h2 className="text-4xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black tracking-tighter">Sobre Mim</h2>
          <p className="font-bold text-sm leading-relaxed bg-black p-4 text-white border-2 border-white shadow-[5px_5px_0px_rgba(255,255,255,1)]">
            Gosto de jogos, curto um energético e sou fã de COD. Sempre em busca de novos desafios na tecnologia.
          </p>
        </div>

        <div className="lg:absolute bottom-24 left-10 bg-white text-black p-8 shadow-[15px_15px_0px_rgba(0,0,0,1)] transform rotate-[1deg] w-full max-w-xl z-30 border-4 border-black mt-8 lg:mt-0 hover:rotate-0 transition-transform duration-300">
          <h2 className="text-6xl font-black uppercase text-[#FF002B] mb-2 tracking-tighter leading-none">Experiência</h2>
          <h2 className="text-5xl font-black uppercase text-black mb-8 tracking-tighter leading-none">& Projetos</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Atuação Principal</h3>
            <p className="font-mono font-bold text-sm bg-[#121316] text-white p-3 border-l-8 border-[#FF002B] inline-block">
              Suporte técnico e assistência
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Trabalho Atual</h3>
            <Link 
              href="https://github.com/joaocarvalhojp40-ship-it/site-rp.brook" 
              target="_blank" 
              className="block border-4 border-black p-5 hover:bg-[#FF002B] hover:text-white transition-colors group relative overflow-hidden"
            >
              <p className="font-black text-xl mb-1 uppercase">Site para Roleplay's</p>
              <p className="text-sm font-mono font-bold opacity-80">(Brook RP)</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </Link>
          </div>
        </div>

        <div className="lg:absolute bottom-10 right-10 bg-[#121316] text-white p-8 rounded-xl shadow-2xl transform rotate-[-4deg] w-full max-w-md z-40 border border-gray-800 mt-8 lg:mt-0 hover:rotate-0 transition-transform duration-300">
          <h2 className="text-5xl font-black uppercase mb-8 text-white tracking-tighter">Skills</h2>
          
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase text-gray-500 mb-3 tracking-widest border-b border-gray-800 pb-2">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'Python', 'Next.js'].map(tech => (
                <span key={tech} className="bg-white text-black px-4 py-1.5 text-sm font-black uppercase tracking-tight border-2 border-transparent hover:border-[#FF002B] hover:bg-[#FF002B] hover:text-white transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-black uppercase text-gray-500 mb-3 tracking-widest border-b border-gray-800 pb-2">Softwares</h3>
            <div className="flex flex-wrap gap-3">
              {['Photoshop 2019', 'Canva'].map(sw => (
                <span key={sw} className="border-2 border-gray-600 px-4 py-1.5 text-sm font-mono font-bold hover:border-white transition-colors cursor-default">
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-gray-500 mb-3 tracking-widest border-b border-gray-800 pb-2">Idiomas</h3>
            <div className="grid grid-cols-1 gap-2 font-mono text-sm font-bold">
              <div className="flex justify-between items-center bg-black p-2 border border-gray-800 rounded">
                <span>Português Brasileiro</span>
                <span className="text-[#FF002B] bg-[#FF002B]/10 px-2 py-0.5 rounded text-xs">Nativo</span>
              </div>
              <div className="flex justify-between items-center bg-black p-2 border border-gray-800 rounded">
                <span>Inglês</span>
                <span className="text-gray-400 px-2 py-0.5 text-xs">Básico</span>
              </div>
              <div className="flex justify-between items-center bg-black p-2 border border-gray-800 rounded">
                <span>Espanhol</span>
                <span className="text-gray-400 px-2 py-0.5 text-xs">Básico</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
