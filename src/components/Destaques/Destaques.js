import Corpo from "../Corpo/Corpo"
import imi from '../img/imitacao.jpg'
function Destaques(){
    const destaques = [
        {img:imi,nome:"O Jogo da Imitação",ano:"2014"}
    ]

    return( 
      <>
        <Corpo fil={destaques}/>
      </>
    )
}
export default Destaques