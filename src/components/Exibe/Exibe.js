import './Exibe.css';
function Exibe({img , nome , ano }){
    return(
        <>
         <img src={img} alt="" />
         <h3>{nome}</h3>
         <h4>{ano}</h4>
        </>
    )
}
export default Exibe