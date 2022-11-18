import {Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default 
function Account(){
  const navigate = useNavigate();
  return(
    <div>
      <div style={{width:'100%', height: "3rem", backgroundColor: "blueviolet", display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
        <strong>Account information</strong>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", border:"solid"}}>
        <div>
          Petty Cash allocated:
        </div>
        <div>INR 47,000</div>
        <div>
          Petty Cash Utilised:
        </div>
        <div>INR 15,000</div>
        <div>
          Managers Handling Petty Cash -
        </div>
        <div>[ Shruthi,Tharun ,Kholi ,Karan]</div>
        <div>
          Billing Cycle :
        </div>
        <div>15th every month</div>
        <div>
          Petty Cash Account Expirey:
        </div>
        <div>17th January 2023</div>
      </div>
    </div>
  )
}


function AllReceipts(){
  return(
    <div>
      all receipts
    </div>
  )
}

function Managers(){
  return(
    <div>
      all managers
    </div>
  )
}

function Summary(){
  return(
    <div>
      all summary
    </div>
  )
}