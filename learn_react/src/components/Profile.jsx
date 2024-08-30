export default function Profile(props) {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
    const name = "Skillup Labs";
    
    }
    return (
        <img onClick={()=> props.selectProfile(promps.name)} className={`rounded-full border-2 border-${promps.color}-500`} src={promps.url || url} alt={promps.name || name} />
    );
}