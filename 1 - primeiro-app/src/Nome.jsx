function Nome(props){
    return(
        <span>Bem vindo: {props.pessoa}</span>
    )
}

//Desestruturado

/*function Nome({aluno, outra proprieadade, ...}){
    return(
        <span>Bem vindo: {aluno}</span>
    )
}*/

export default Nome