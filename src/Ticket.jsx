
import Ticketnum from "./Ticketnum"
import "./Ticket.css"
export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num , idx) =>(
                <Ticketnum num={num} key={idx} />
            ))}

        </div>
    )
}