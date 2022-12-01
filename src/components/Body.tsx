import Background from '../assets/backgroundHeader.svg';
import { InstagramLogo, GithubLogo, LinkedinLogo, TwitchLogo, UserCircle, FileCode } from 'phosphor-react';
let data = new Date();
let anoAtual = data.getFullYear();
export function Body(){
    return (
        <>
            <header className="bg-slate-500">        
                <div className="bg-cover bg-center bg-no-repeat bg-slate-500" style={{backgroundImage: `url(${Background})`}}>
                    <div className="absolute text-white items-end text-right justify-end pt-8 md:pt-10 flex flex-col gap-2" style={{right: 16}}>
                        <InstagramLogo className="hover:cursor-pointer" size={32} onClick={ () => window.open('https://www.instagram.com/ivancarlosdemelo/')} />
                        <GithubLogo className="hover:cursor-pointer" size={32} onClick={ () => window.open('https://github.com/ivanmduarte')} />
                        <LinkedinLogo className="hover:cursor-pointer" size={32} onClick={ () => window.open('https://www.linkedin.com/in/ivancmd/')} />
                        <TwitchLogo className="hover:cursor-pointer" size={32} onClick={ () => window.open('https://www.twitch.tv/ivancmd')} />
                    </div>
                    <div className="container mx-auto px-4 pt-8 md:pt-10 pb-20 text-center justify-center items-center w-full  flex flex-col">
                        <span className="bg-transparent border-2 rounded-lg py-5 w-20 flex-1 flex flex-col items-center text-white">III</span>
                        <span className="text-white font-semibold" style={{fontSize: 34}}>IVAN DUARTE</span>
                        <span className="text-white" style={{fontSize: 14}}>DESENVOLVEDOR</span>

                        
                    </div>
                    
                </div>
            </header>

            <body className="p-5 grid grid-cols-2">
                <div className="p-1 divide-y">
                    <div className="pb-3">
                        <h2 className="font-bold text-sky-900" style={{fontSize:24}}>Sobre</h2>
                        
                        <div>
                            Olá, meu nome é <strong>Ivan Carlos de Melo Duarte</strong>, tenho {anoAtual - 1993} anos,
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  
                        </div>
                    </div>

                    <div className="pb-3">
                        <h2 className="font-bold text-sky-900" style={{fontSize:24}}>Experiência</h2>
                        <div>
                            Olá, meu nome é <strong>Ivan Carlos de Melo Duarte</strong>, tenho {anoAtual - 1993} anos,
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  
                        </div>
                    </div>

                    <div className="pb-3">
                        <h2 className="font-bold text-sky-900" style={{fontSize:24}}>Experiência</h2>
                        <div>
                            Olá, meu nome é <strong>Ivan Carlos de Melo Duarte</strong>, tenho {anoAtual - 1993} anos,
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  
                        </div>
                    </div>
                </div>

                <div className="p-1">
                    <div className="pb-3 divide-y">
                        <h2 className="font-bold text-sky-900 flex" style={{fontSize:24}}>
                            <UserCircle size={32} className="mt-1" />
                            Perfil
                        </h2>
                        <div>
                            <p className="font-bold">Email</p>
                            <p className="pl-5">ivan.mduarte@live.com</p>
                        
                            <p className="font-bold">Telefone</p>
                            <p className="pl-5">(31) 99286-5034</p>
                        </div>
                    </div>
                    <div className="pb-3 divide-y">
                        <h2 className="font-bold text-sky-900 flex" style={{fontSize:24}}>
                            <FileCode size={32} className="mt-1" />
                            Competências
                        </h2>
                        <div>
                            <ul className="ml-2 mt-2">
                                <li className="flex mt-1 shadow-md p-3 border rounded">
                                    <img width={48} className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                    <div>
                                        <p className="font-bold text-lg">HTML ⭐⭐⭐⭐⭐</p>
                                        <div>
                                            <span><b>Inicio:</b> jun de 2018</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex mt-1 shadow-md p-3 border rounded">
                                    <img width={48} className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                    <div>
                                        <p className="font-bold text-lg">JavaScript ⭐⭐⭐⭐⭐</p>
                                        <div>
                                            <span><b>Inicio:</b> jun de 2018 - <b>Frameworks:</b> jQuery</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex mt-1 shadow-md p-3 border rounded">
                                    <img width={48} className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                    <div>
                                        <p className="font-bold text-lg">CSS ⭐⭐⭐⭐</p>
                                        <div>
                                            <span><b>Inicio:</b> jun de 2018 - <b>Frameworks:</b> Bootstrap, Materialize</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex mt-1 shadow-md p-3 border rounded">
                                    <img width={48} className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                                    <div>
                                        <p className="font-bold text-lg">PHP ⭐⭐⭐⭐</p>
                                        <div>
                                            <span><b>Inicio:</b> jun de 2018 - <b>Frameworks:</b> Codeigniter, Laravel</span>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        
                        </div>
                    </div>
                </div>
               
            </body>

            <footer>
                
            </footer>
        </>
    );
}