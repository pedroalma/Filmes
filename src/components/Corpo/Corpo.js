import Exibe from "../Exibe/Exibe";
import './Corpo.css'
function Corpo({fil}){
    return(
        <>
        <div className="div-corpo">
          {fil.map((f) =>
          <div>
            <Exibe img={f.img} nome={f.nome} ano={f.ano} />
          </div>
          )}
        </div>
       </> 
    )
}
export default Corpo