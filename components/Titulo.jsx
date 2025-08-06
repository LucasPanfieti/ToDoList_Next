export default function Titulo(props){
    
    /*
        if (props.pequeno) {
            return (
                <>
                    <p>{props.principal}</p>
                    <p>{props.secundario}</p>
                </>
            )
        } else {        
            return (
                <>
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
                </>
            )
        }
    */

    //operador ternario
        return ( 

            props.pequeno //condição

            ? //se verdadeiro:

            (
                <>
                    <p>{props.principal}</p>
                    <p>{props.secundario}</p>
                </>
            ) 

            : //se falso:

            (
                <>
                    <h1>{props.principal}</h1>
                    <h2>{props.secundario}</h2>
                </>
            )
        )

}