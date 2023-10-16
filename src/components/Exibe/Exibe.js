import './Exibe.css';
function Exibe({img , nome , ano ,}){
    return(
        <>
        <figure className='conteiner'>
         <img src={img} alt=""/>
         <figcaption>destaques</figcaption>
         </figure>
         <h5>{nome}</h5>
         <h5>{ano}</h5>
         </>
    )
}
export default Exibe