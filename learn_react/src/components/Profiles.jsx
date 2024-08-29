import { useState } from "react";
import Profile from "./Profile";
function Profiles(){
    const [selectedProfileName, setSelectedProfileName] = useState('Skillup Labs');
    function selectProfile(name){
        console.log(name);
        setSelectedProfileName(name);
    };
    return(
        <section className="flex gap-2 shadow p-8 flex flex-col bg-white">
            <div className="flex gap-2">
            <Profile url= "https://i.imgur.com/1bX5QH6.jpg" selectProfile={selectProfile} color="red" name="Yam" />
            <Profile url="https://i.imgur.com/OKS67lhs.jpg" selectProfile={selectProfile} color="green" name="Punam" />
            <Profile url="https://i.imgur.com/YfeOqp2s.jpg" selectProfile={selectProfile} color="blue" name="Sandesh" />
            <Profile url="https://i.imgur.com/7vQD0fPs.jpg" selectProfile={selectProfile} color="yellow" name="Sandesh" />
            </div>
            <h3 className="text-xl">{selectedProfileName}</h3>

        </section>
    )
}
export default Profiles;