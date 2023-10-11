import './Exibe.css';
function Exibe({img , nome , ano }){
    return(
        <>
         <img src={img} alt="" />
         <h5>{nome}</h5>
         <h5>{ano}</h5>
         </>
    )
}
export default Exibe