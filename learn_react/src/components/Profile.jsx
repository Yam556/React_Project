export default function Profile(promps) {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
    const name = "Skillup Labs";
    function selectProfile(name){
        console.log(name);
    }
    return (
        <img onClick={()=> promps.selectProfile(promps.name)} className={`rounded-full border-2 border-${promps.color}-500`} src={promps.url || url} alt={promps.name || name} />
    );
}