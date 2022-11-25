import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Coincap from './components/Coincap'
import Script from 'next/script'



const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Coin Nodes</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
        
        
      </Head>

      <main className="">

        {/* Header */}

        <div className="h-screen w-full">
         
          {/*<Nav />*/}

          <div>
          <img src="./img/wallpaper-coin.png" alt="" className="object-cover max-w-screen h-auto absolute z-[-1]"/>
          <div className='container mx-auto flex items-center h-screen text-center sm:text-left'>
            <div className="">
              <h1 className="font-semibold text-4xl mb-2">Inteligência<br/>Criptográfica para o<br/>Futuro das Finanças</h1>
              <p>Plataforma de dados e Inteligência on-chain</p>
              <div className="mt-3 space-x-3 flex flex-wrap">
                <button className="bg-black text-white w-[120px] py-2 rounded">View Charts</button>
                <button className="bg-black text-white w-[120px] py-2 rounded">Products</button>
              </div>
          </div>
          </div>
           <Coincap/>
          </div>

        </div>
        
        {/* ShellDAO */}
        <div className="h-screen">
          <video autoPlay className='object-cover w-screen h-screen absolute z-[-1]'>
            <source src="./video/bolagui.mp4" type="video/mp4" />
          </video>

          <div className="h-screen flex flex-row-reverse items-center">
          
          <div>
            
          </div>
          <div className='basis-1/3 mx-24'>
          <h2 className="text-2xl font-bold">Shell DAO</h2>
          <p className="mt-7">Conheça a nossa DAO, uma organização descentralizada, que têm por objetivo unir usuários e investidores de serviços criptográficos em qualquer lugar do mundo em que estejam.<br/><br/>Nossa DAO possui um token próprio, por meio do qual o seu capital é subdividido entre seus participantes, de forma totalmente proporcional ao que cada um investe, especificamente.<br/><br/>Suas formas de votação são sempre pautadas pelo contrato que a DAO fixa e, dessa forma, são sempre previsíveis e, sobretudo, públicas.</p>
          </div>
          
        </div>
          
        </div>

        {/* features */}

        <div className="bg-gray-300">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-28">
            <div className="text-center px-3 sm:text-left">
              <h5 className='font-bold'>Studio</h5>
              <p className="pt-3 ">Um explorador de dados on-chain ao vivo com visualizações das métricas mais fundamentais.</p>
            </div>
            <div className="text-center px-3 sm:text-left">
              <h5 className="font-bold">Métricas</h5>
              <p className="pt-3">A biblioteca mais abrangente de métricas on-chain avançadas em uma variedade de ativos.</p>
            </div>
            <div className="text-center px-3 sm:text-left">
              <h5 className="font-bold">Instituições</h5>
              <p className="pt-3">Insights de mercado, relatório e análises contextualizados e acionáveis extraídos de dados on-chain.</p>

            </div>
          </div>
          
        </div>

      </main>

      <footer className="bg-black">
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-14">
            <div className="mx-auto flex flex-col sm:flex-initial mb-6">
            <img src="./img/logowhite.png" alt="" width="180px"/>
            </div>
            <div className="text-center sm:text-left px-4">
              <h5 className="font-bold mb-5 md:mt-0 sm:mt-0">Menu</h5>
              <ul className="space-y-3">
                <li className="font-light">Sobre</li>
                <li className="font-light">Contribuintes</li>
                <li className="font-light">Carreiras</li>
              </ul>
            </div>
            <div className="text-center sm:text-left px-4">
              <h5 className="font-bold mb-5 mt-6 sm:mt-5 md:mt-0">Serviços</h5>
              <ul className="space-y-3">
                <li className="font-light">Fundo DAO</li>
                <li className="font-light">Robôs de Investimento</li>
                <li className="font-light">Tokenização</li>
                <li className="font-light">Inteligência de Máquina</li>
                <li className="font-light">Dados On-Chain</li>
              </ul>
            </div>
            <div className="text-center sm:text-left px-4">
            <h5 className="font-bold mb-5 mt-6 sm:mt-5 md:mt-0">Contato</h5>
            <ul className="space-y-3">
              <li className="font-light">Entrar em contato</li>
              <li className="font-light">Projetos</li>
              <li className="font-light">Blog</li>
            </ul>
            </div>
          </div>
          <div className="mx-auto py-7 border-t-2 border-t-gray-900 text-center sm:text-left">
            <div className="space-x-6" >
              <a href="">Termos e Condições</a>
              <a href="">Política de Privacidade</a>
            </div>
            <div>
            </div>
          </div>
        </div>
      </footer>
    </div>  
    
  )
}

export default Home
