export default function Result(props){
    return(
        <>
            <h1
            >Seu nome é: <span style={{color:props.color}}>{props.nome}</span></h1>
        </>
    )
}