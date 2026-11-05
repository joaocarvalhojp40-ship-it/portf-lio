import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6 md:p-12 font-sans overflow-x-hidden flex flex-col items-center justify-center selection:bg-[#FF002B] selection:text-white">
      <div className="relative w-full max-w-6xl flex flex-col lg:block space-y-8 lg:space-y-0 min-h-[900px]">

        <div className="lg:absolute top-5 left-5 bg-white text-black p-6 rounded-xl shadow-[10px_10px_0px_#FF002B] transform lg:rotate-[-2deg] w-full max-w-md z-10 border-4 border-black">
          <div className="flex gap-4 items-start">
            <div className="w-24 h-32 bg-gray-300 border-2 border-black flex-shrink-0 flex items-center justify-center">
              <span className="text-xs font-mono text-gray-600 font-bold rotate-[-90deg] uppercase">Avatar</span>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-black uppercase leading-none mb-2">João Paulo</h1>
              <p className="text-xs font-bold border-b-4 border-black pb-1 mb-2 uppercase text-[#FF002B]">Desenvolvedor & Suporte</p>
              <p className="text-xs font-mono mb-1 font-bold">14 Anos | São Paulo, BR</p>
              <a href="mailto:joaocarvalhojp40@gmail.com" className="text-xs font-mono break-all font-bold hover:text-[#FF002B]">
                joaocarvalhojp40@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:absolute top-5 right-10 bg-[#FF002B] text-white p-6 shadow-[10px_10px_0px_#000] transform lg:rotate-[3deg] w-full max-w-md z-20 border-4 border-black">
          <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-4 text-black">Educação</h2>
          <ul className="space-y-2 font-bold text-base mb-6 text-black">
            <li>✦ Imprensa Jovem escolar</li>
            <li>✦ Robótica escolar</li>
          </ul>
          
          <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-3 text-black">Sobre Mim</h2>
          <p className="font-bold text-xs leading-relaxed bg-black p-3 text-white border-2 border-white">
            Gosto de jogos, curto um energético e sou fã de COD. Sempre em busca de novos desafios na tecnologia.
          </p>
        </div>

        <div className="lg:absolute bottom-10 left-5 bg-white text-black p-6 shadow-[12px_12px_0px_#000] transform lg:rotate-[1deg] w-full max-w-lg z-30 border-4 border-black">
          <h2 className="text-5xl font-black uppercase text-[#FF002B] leading-none">Experiência</h2>
          <h2 className="text-4xl font-black uppercase text-black mb-6 leading-none">& Projetos</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-black mb-2 uppercase">Atuação Principal</h3>
            <p className="font-mono font-bold text-xs bg-[#121316] text-white p-3 border-l-8 border-[#FF002B]">
              Suporte técnico e assistência
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-2 uppercase">Projeto Atual</h3>
            <Link 
              href="https://github.com/joaocarvalhojp40-ship-it/site-rp.brook" 
              target="_blank" 
              className="block border-4 border-black p-4 bg-gray-100 hover:bg-[#FF002B] hover:text-white transition-colors"
            >
              <p className="font-black text-lg uppercase">site-rp.brook</p>
              <p className="text-xs font-mono font-bold opacity-75">Site para Roleplays ↗</p>
            </Link>
          </div>
        </div>

        <div className="lg:absolute bottom-5 right-5 bg-[#121316] text-white p-6 rounded-xl shadow-2xl transform lg:rotate-[-3deg] w-full max-w-md z-40 border border-gray-800">
          <h2 className="text-4xl font-black uppercase mb-6 text-white">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase text-gray-400 mb-2 border-b border-gray-800 pb-1">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Python', 'Next.js'].map(tech => (
                <span key={tech} className="bg-white text-black px-3 py-1 text-xs font-black uppercase border-2 border-black">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-black uppercase text-gray-400 mb-2 border-b border-gray-800 pb-1">Softwares</h3>
            <div className="flex flex-wrap gap-2">
              {['Photoshop 2019', 'Canva'].map(sw => (
                <span key={sw} className="border border-gray-600 px-3 py-1 text-xs font-mono">
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase text-gray-400 mb-2 border-b border-gray-800 pb-1">Idiomas</h3>
            <div className="space-y-1 font-mono text-xs">
              <div className="flex justify-between bg-black p-2 rounded">
                <span>Português BR</span>
                <span className="text-[#FF002B]">Nativo</span>
              </div>
              <div className="flex justify-between bg-black p-2 rounded">
                <span>Inglês</span>
                <span className="text-gray-400">Básico</span>
              </div>
              <div className="flex justify-between bg-black p-2 rounded">
                <span>Espanhol</span>
                <span className="text-gray-400">Básico</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
