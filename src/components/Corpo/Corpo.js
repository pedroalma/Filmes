import Exibe from "../Exibe/Exibe";
import './Corpo.css'
function Corpo({fil}){
    return(
        <>
         {fil.map((f) =>
         <div>
            <Exibe img={f.img} nome={f.nome} ano={f.ano} />
         </div>
         )}
        </>
    )
}
export default Corpo;