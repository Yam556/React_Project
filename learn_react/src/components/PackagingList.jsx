import Item from "./Item";

function PackagingList(){
    return(
        <section>
            <h2>Yam's Packaging List</h2>

            <ul>
            <Item Space suit />
            <Item />
            <Item />
        </ul>
        </section>
    )
        
}
export default PackagingList;