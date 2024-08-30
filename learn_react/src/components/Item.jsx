function Item(){
    if(props.packed){
        return(
            <li>{props.name} :white_tick:</li>
        )
    }
    return (<li>{props.name}</li>)
}
export default Item;