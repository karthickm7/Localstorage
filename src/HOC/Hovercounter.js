

const Hovercounter =(props)=>{
    
    return(

        <>
       <h2 onMouseOver={props.increment}> {props.name} Hovered {props.count} times</h2>
        </>
    )
}
export default Hovercounter