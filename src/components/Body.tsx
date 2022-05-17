import Background from '../assets/backgroundHeader.svg';
import { InstagramLogo, GithubLogo, LinkedinLogo, TwitchLogo } from 'phosphor-react';

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
                        <span className="text-white" style={{fontSize: 14}}>PROGRAMADOR</span>

                        
                    </div>
                    
                </div>
            </header>

            <body>
                testeasdasd
            </body>

            <footer>
                
            </footer>
        </>
    );
}