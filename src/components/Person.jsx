function Person(props){
    return(
        <>
            <h1>This is {props.name?props.name:"Unkown"}</h1>
            <h2>Role: {props.role?props.role:"No role"}</h2>
        </>
    )
}

export default Person;