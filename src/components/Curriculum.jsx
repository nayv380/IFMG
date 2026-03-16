import React from 'react';
import avatarphoto from "../assets/avatarphoto.jpeg";

// Dados do currículo de Nayara Ventura Candido
const DADOS = {
    nome: "Nayara Ventura Candido",
    cargo: "Desenvolvedora de software",
    resumo: "Estudante do 7º período de Engenharia de Software na Anhanguera e cursando Front-end com React pelo IFMG. Possuo conhecimentos em Python, JavaScript, Java, HTML, CSS, React e SQL, além de experiência com bancos de dados relacionais e não relacionais. Participei de projetos acadêmicos e pessoais nas áreas de desenvolvimento full stack e data science, atuei como monitor auxiliando colegas em programação e banco de dados, e participei de um Hackathon promovido pela Infinity School, onde desenvolvi soluções em equipe sob pressão e prazos curtos. Tenho familiaridade com Git, Linux, metodologias ágeis e APIs. Busco minha primeira oportunidade profissional em Desenvolvimento de Software, com foco em aprendizado contínuo, colaboração em equipe e entrega de soluções inovadoras.",
    contato: {
        tel: "(31) 99143-4003", 
        email: "nay.380@icloud.com",
        local: "Contagem - MG",
        linkedin: "https://www.linkedin.com/in/nayara-ventura-01134936a/",
        github: "@nayv380",
        habilitacao: "B",
        idade: "28 anos",
        estado_civil: "solteira",
        nacionalidade: "brasileira"
    },
    experiencia: [
        {
            empresa: "F5 informática Ltda",
            cargo: "Assistência Técnica em Informática",
            periodo: "2022 a 2023",
            descricao: "Atuação eventual e autônoma – Realização de manutenção preventiva e corretiva em computadores e notebooks - Instalação de sistemas operacionais, drivers e programas essenciais - Atendimento ao cliente e orientação técnica básica sobre uso de hardware/software"
        }
    ],
    habilidades: [
        { categoria: "Frontend", techs: ["React", "JavaScript", "HTML", "CSS"] },
        { categoria: "Backend", techs: ["Python", "Java", "SQL"] },
        { categoria: "Ferramentas", techs: ["Git", "GitHub", "Power BI", "DBT", "Pandas", "Numpy"] },
        { categoria: "Outros", techs: ["Pacote Office", "Hardware e Infraestrutura", "IoT"] }
    ],
    Projetos: [
        {
            nome: "Transfer Learning – Classificação de Imagens (Gatos x Cachorros)",
            descricao: "Implementação de CNN com MobileNet Classificação de imagens com alta acurácia usando transferência de aprendizado"
        },
        {
            nome: "Análise de Dados com Pandas e Visualização",
            descricao: "Tratamento de dados, geração de gráficos, construção de relatórios automatizados"
        },
        {
            nome: "Projetos com IoT e Microcontroladores",
            descricao: "Aplicações com sensores e automações em ambientes simulados Programação básica para controle de dispositivos conectados"
        }
    ],
    formacao: [
        {
            curso: "Bacharelado em Engenharia de Software",
            instituicao: "Anhanguera",
            periodo: "7º período – Conclusão prevista: 06/2026"
        },
        {
            curso: "Front-End e React",
            instituicao: "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG)",
            periodo: "1 período - Conclusão prevista: 03/2026"
        }
    ],
    cursos: [
        "Full Stack Developer – Infinity School (em andamento)",
        "Data Science – Infinity School (concluído)",
        "Transfer Learning – Infinity School (concluído)",
        "Análise em Python – Universidade Anhanguera (concluído)",
        "Manutenção de Computadores - F5 Informática (concluído)",
        "Sensores, Microcontroladores e Programação em IoT – Anhanguera (concluído)",
        "Novos Desenvolvimentos em IoT – Anhanguera (concluído)"
    ],
    soft_skills: [
        "Comunicação clara e eficaz",
        "Proatividade e resolução de problemas",
        "Organização e atenção aos detalhes",
        "Aprendizado contínuo e novas tecnologias",
        "Adaptabilidade e flexibilidade",
        "Trabalho em equipe e empatia",
        "Gestão do tempo e prioridades",
        "Pensamento crítico e analítico",
        "Confiança e autogestão"
    ]
};

// Componente principal do currículo
export const Curriculum = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB] font-sans">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Barra lateral com foto, nome, cargo e informações de contato */}
                <aside className="md:w-[35%] lg:w-[30%] bg-[#F7F3F0] p-10 border-r border-rose-100">
                    <div className="mb-8">
                        <img src={avatarphoto} alt="Foto de Nayara Ventura" className="size-32 lg:size-40 rounded-3xl rotate-3 shadow-xl border-4 border-white" />
                    </div>
                    <h1 className="text-4xl font-light text-slate-900">
                        Nayara <span className="font-bold text-rose-500">Ventura</span>
                    </h1>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-3 font-bold">{DADOS.cargo}</p>
                    
                    <div className="mt-16 space-y-8">
                        <div>
                            <h3 className="text-rose-400 text-[11px] font-black uppercase border-b border-rose-100 pb-2 mb-4">Contato</h3>
                            <p className="text-sm text-slate-600 mb-2">📞 {DADOS.contato.tel}</p>
                            <p className="text-sm text-slate-600 mb-2">✉️ {DADOS.contato.email}</p>
                            <p className="text-sm text-slate-600 mb-2">📍 {DADOS.contato.local}</p>
                            <p className="text-sm text-slate-600 mb-2">🔗 {DADOS.contato.linkedin}</p>
                            <p className="text-sm text-slate-600 mb-2">🐙 {DADOS.contato.github}</p>
                        </div>
                        <div>
                            <h3 className="text-rose-400 text-[11px] font-black uppercase border-b border-rose-100 pb-2 mb-4">Habilidades Técnicas</h3>
                            {DADOS.habilidades.map(g => (
                                <div key={g.categoria} className="mb-4">
                                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">{g.categoria}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {g.techs.map(t => (
                                            <span key={t} className="px-2 py-1 bg-white border border-rose-50 rounded-lg text-[10px] text-slate-600 shadow-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-rose-400 text-[11px] font-black uppercase border-b border-rose-100 pb-2 mb-4">Habilidades Interpessoais</h3>
                            <div className="flex flex-wrap gap-2">
                                {DADOS.soft_skills.map(s => (
                                    <span key={s} className="px-2 py-1 bg-white border border-rose-50 rounded-lg text-[10px] text-slate-600 shadow-sm">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Seção principal com resumo, experiência, projetos, formação e cursos */}
                <main className="flex-1 p-10 md:p-16 lg:p-24 space-y-16 bg-white">
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[px] bg-rose-200"></span> Sobre Mim
                        </h2>
                        <p className="text-2xl text-slate-700 font-extralight leading-relaxed">{DADOS.resumo}</p>
                    </section>
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300 mb-10 flex items-center gap-4">
                            <span className="w-12 h-[px] bg-rose-200"></span> Experiência
                        </h2>
                        <div className="space-y-12 border-l border-rose-50 ml-2 pl-8">
                            {DADOS.experiencia.map((e, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-10.25 top-2 w-4 h-4 bg-rose-200 border-2 border-white rounded-full"></div>
                                    <h4 className="text-xl font-bold text-slate-800">{e.cargo}</h4>
                                    <p className="text-rose-400 font-medium text-sm uppercase">{e.empresa} • {e.periodo}</p>
                                    <p className="text-slate-500 text-sm mt-2">{e.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300 mb-10 flex items-center gap-4">
                            <span className="w-12 h-[px] bg-rose-200"></span> Projetos
                        </h2>
                        <div className="space-y-8">
                            {DADOS.Projetos.map((p, i) => (
                                <div key={i}>
                                    <h4 className="text-xl font-bold text-slate-800">{p.nome}</h4>
                                    <p className="text-slate-500 text-sm mt-2">{p.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300 mb-10 flex items-center gap-4">
                            <span className="w-12 h-[px] bg-rose-200"></span> Formação Acadêmica
                        </h2>
                        <div className="space-y-8">
                            {DADOS.formacao.map((f, i) => (
                                <div key={i}>
                                    <h4 className="text-xl font-bold text-slate-800">{f.curso}</h4>
                                    <p className="text-rose-400 font-medium text-sm uppercase">{f.instituicao}</p>
                                    <p className="text-slate-500 text-sm mt-2">{f.periodo}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-300 mb-10 flex items-center gap-4">
                            <span className="w-12 h-[px] bg-rose-200"></span> Cursos e Aprimoramentos
                        </h2>
                        <ul className="list-disc list-inside text-slate-700 space-y-2">
                            {DADOS.cursos.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};