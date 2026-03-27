import { useState } from "react"

const RenderizarPersonages = (props) => {
    const coresDasCasas = {
        "Grifinória": "border-red-600 shadow-red-900/20",
        "Sonserina": "border-emerald-600 shadow-emerald-900/20",
        "Corvinal": "border-blue-600 shadow-blue-900/20",
        "Lufa-Lufa": "border-amber-500 shadow-amber-900/20",
    };

    const coresTextoCasas = {
        "Grifinória": "text-red-500",
        "Sonserina": "text-emerald-500",
        "Corvinal": "text-blue-400",
        "Lufa-Lufa": "text-amber-400",
    };
    // ESTADOS 
    const [busca, setBusca] = useState("");
    const [casa, setCasa] = useState("");

    // Filtrar personagens com base na busca e na casa selecionada

    const exibirPersonagens = props.personagens.filter((personagem) => {
        const filtroBusca = personagem.nome.toLowerCase().includes(busca.toLowerCase());
        const filtroCasa = casa === "" || personagem.casa === casa;
        return filtroBusca && filtroCasa;
    });

    return (
        <div className="bg-slate-950 min-h-screen p-4">
            
            <h1 className="text-4xl text-center text-amber-500 font-bold my-8">
                ESCOLA DE MAGIA E BRUXARIA
            </h1>

            {/* Barra de Busca e Filtros */}
            <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
                <input 
                    type="text" 
                    placeholder="Buscar personagem..." 
                    value={busca} 
                    onChange={(e) => setBusca(e.target.value)} 
                    className="bg-amber-100 p-2 rounded-2xl shadow-xl text-slate-900 outline-none w-64 focus:ring-2 ring-amber-500"
                />
                <div className="flex gap-2 flex-wrap justify-center">
                    <button className="px-4 py-2 bg-amber-600 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("")}>Todas</button>
                    <button className="px-4 py-2 bg-red-700 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Grifinória")}>Grifinória</button>
                    <button className="px-4 py-2 bg-green-800 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Sonserina")}>Sonserina</button>
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Lufa-Lufa")}>Lufa-Lufa</button>
                    <button className="px-4 py-2 bg-blue-800 text-white rounded cursor-pointer hover:scale-105 transition-transform" onClick={() => setCasa("Corvinal")}>Corvinal</button>
                </div>
            </div>

            {/* CONTAINER FLEX */}
            <div className="flex flex-wrap gap-6 justify-center">
                {exibirPersonagens.map((personagem) => (
                    <div 
                        key={personagem.id} 
                        className={`bg-slate-900 border-4 p-5 rounded-xl shadow-2xl transition-all flex flex-col items-center gap-3 hover:scale-105 w-72 ${coresDasCasas[personagem.casa] || 'border-gray-500'}`}
                    >
                        <h2 className={`text-2xl font-black text-center ${coresTextoCasas[personagem.casa] || 'text-gray-500'}`}>
                            {personagem.nome}
                        </h2>

                    
                        <div className="w-full h-48 overflow-hidden rounded-lg border-2 border-slate-700">
                            <img 
                                src={personagem.imagem} 
                                alt={personagem.nome} 
                                className="w-full h-full"
                            />
                        </div>

                        <p className={`text-lg font-bold ${coresTextoCasas[personagem.casa] || 'text-gray-500'}`}>
                            {personagem.casa}
                        </p>

                
                        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center line-clamp-4">
                            {personagem.descricao}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenderizarPersonages;