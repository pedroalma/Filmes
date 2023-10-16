import Corpo from './components/Corpo/Corpo'
import imi from '../src/components/img/imitacao.jpg'
import hom from '../src/components/img/homem02.webp'
import v from '../src/components/img/v.jpg'
import taxi from '../src/components/img/taxi.jpg'
import poder from '../src/components/img/opoder1.jpg'
import poeder1 from '../src/components/img/opoder2.jpg'
import poeder3 from '../src/components/img/opoder3.jpg'
import osmerc from '../src/components/img/merc.jpg'
import osmerc2 from '../src/components/img/merc2.jpg'
import osmerc3 from '../src/components/img/merc3.jpg'
import oito from '../src/components/img/8di.jpg'
import psic from '../src/components/img/pisco1.jpg'
import top from '../src/components/img/topgun.jpg'
import top2 from '../src/components/img/topgun2.jpg'
import bas from '../src/components/img/hans.jpg'
import dj from '../src/components/img/django.jpg'
import nove from '../src/components/img/1917.jpg'
import dita from '../src/components/img/dita.jpg'
import arre from '../src/components/img/arre.jpg'
import ch from '../src/components/img/ch.jpg'
import god from '../src/components/img/god.jpg'
import the from '../src/components/img/the.jpg'
import noveum from '../src/components/img/nove.jpg'
import ojus from '../src/components/img/ojus.jpg'
import gar from '../src/components/img/gar.jpg'
import pe from '../src/components/img/pe.jpg'
import jus from '../src/components/img/jus.jpg'
import good from '../src/components/img/good.jpg'
import im from '../src/components/img/im.jpg'
import fron from '../src/components/img/fron.jpg'
import hanninal from '../src/components/img/hannibal.jpg'

import './App.css'

function App() {
  const Destaques1 = [
    {img:imi ,nome:"O Jogo da Imitação",ano:"2014"},
    {img:hom ,nome:"O Homem do Norte",ano:"2022"},
    {img:v ,nome:"V de Vingança",ano:"2005"},
    {img:taxi ,nome:"Taxi Driver – Motorista de Táxi",ano:"1976"},
    {img:psic ,nome:"Psicopata Americano",ano:"2000"},
    {img:dita,nome:"O Ditador",ano:"2012"},
  ]
   const Destaques2 =[
    {img:oito ,nome:"Os Oito Odiados",ano:"2015"},
    {img:top,nome:"Top Gun - Ases Indomáveis",ano:"1986"},
    {img:top2,nome:"Top Gun: Maverick",ano:"2022"},
    {img:bas,nome:"Bastardos Inglórios",ano:"2009"},
    {img:dj,nome:"Django Livre",ano:"2012"},
    {img:nove,nome:"1917",ano:"2019"},
   ]
   const Destaques3 =[
    {img:poder ,nome:"O Poderoso Chefão",ano:"1972"},
    {img:poeder1 ,nome:"O Poderoso Chefão 2",ano:"1974"},
    {img:poeder3 ,nome:"O Poderoso Chefão 3",ano:"1990"},
    {img:osmerc ,nome:"Os Mercenários",ano:"2010"},
    {img:osmerc2 ,nome:"Os Mercenários 2",ano:"2012"},
    {img:osmerc3 ,nome:"Os Mercenários 3",ano:"2014"},
   ]
   const Destaques4 =[
    {img:arre ,nome:"Arcanjo Renegado",ano:"2020"},
    {img:ch ,nome:"Chernobyl",ano:"2019"},
    {img:god ,nome:"Godfather of Harlem",ano:"2019"},
    {img:the,nome:"The Boys",ano:"2019"},
    {img:noveum ,nome:"9-1-1",ano:"2018"},
    {img:ojus ,nome:"O Justiceiro",ano:"2017"},
   ]
   const Destaques5 =[
    {img:gar ,nome:"O Gambito da Rainha",ano:"2020"},
    {img:pe ,nome:"Pé na Cova",ano:"2013"},
    {img:jus ,nome:"Justiça Implacável",ano:"2011"},
    {img:good ,nome:"The Good Doctor: O Bom Doutor",ano:"2017"},
    {img:im ,nome:"Impuros",ano:"2018"},
    {img:fron ,nome:"Operação Fronteira - Brasil",ano:"2022"},
    {img:hanninal ,nome:"Hannibal",ano:"2013"},
   ]
  return (
    <div className="App">
     <div className='texto'>
      <h2 className='texto1'>Filmes</h2>
     </div>
      <Corpo fil={Destaques1}/>
      <Corpo fil={Destaques2}/>
      <Corpo fil={Destaques3}/>
      <div className='texto'>
        <h2 className='texto1'>Series</h2>
      </div>
      <Corpo fil={Destaques4}/>
      <Corpo fil={Destaques5}/>
    </div>
  )
}

export default App;
