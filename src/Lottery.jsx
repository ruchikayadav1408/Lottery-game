import { useState } from "react";
import {getTicket , sum} from "./helper";
import Ticket from './Ticket'

export default function Lottery({n=3 , winningsum=15}){
    let [ticket , setTicket] = useState(getTicket(n));
   let isWinning = sum(ticket) === winningsum;

   let buyticket =() =>{
    setTicket(getTicket(n));
   }
    return (
        <div>
        <h1> Lottery Game!</h1>
        <div className="ticket">
        <Ticket ticket={ticket}/>
        <button onClick={buyticket}>Buy New Ticket</button>
        <h2>{isWinning && "Congratulations , you won!!"}</h2>
        </div>
        </div>
    )
}