import React ,{useState} from "react";

const ContactCard = () => {
    const [showAge, setShowAge] = useState(false)
    return (
        <div className="contact-card">
            <img src="https://via.placeholder.com/150"
                alt="profile">
            </img>
            <div className="user-details">
                <p>Name: Jenny Han</p>
                <p>Email: jenny.han@notreal.com</p>
                 <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
                {showAge && <p>Age : 25 </p>}
            </div>


        </div>
    )
}

export default ContactCard;