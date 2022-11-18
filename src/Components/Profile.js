export default function Profile(){
    return(
      <div>
        <div style={{width:'100%', height: "3rem", backgroundColor: "blueviolet", display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
          <strong>Profile</strong>
        </div>
        <div className="profilediv">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", border:"solid", margin:"1rem"}}>
            <h3>General Information</h3>
            <h3>Details</h3>
            <h5>Company ID: </h5><h5>kjHuKh37kkU</h5>
            <h5>Company Name: </h5> <h5>Almika Pvt.Ltd.</h5>
            <h5>Petty Cash ID: </h5> <h5>573457</h5>
            <h5>Description: </h5> <h5>Mini-Ratna Company</h5>
            <h5>Currency: </h5> <h5>INR</h5>
            <h5>Subscription Plan </h5> <h5>Platinum</h5>

          </div >
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", border:"solid", margin:"1rem"}}>
            <h3>Tax Information</h3>
            <h3>Details</h3>
            <h5>Country Region: </h5><h5>IN - India</h5>
            <h5>City: </h5> <h5>Mumbai</h5>
            <h5>State: </h5> <h5>Maharashtra</h5>
            <h5>GSTIN No.: </h5> <h5>22AAAAA0000A1Z5</h5>
          </div>
        </div>

      </div>
    )
  }
  