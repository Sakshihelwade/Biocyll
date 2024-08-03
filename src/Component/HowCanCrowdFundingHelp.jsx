import React from 'react'
import "../Css/style.css"

const HowCanCrowdFundingHelp = () => {
  return (
    <div className="container">
      <h2 className="heading mb-4">How Can Crowdfunding Help?</h2>
      <p className="subtext">Crowdfunding can be an effective way to raise funds. <br/>It leverages the power of the crowd to gather small amounts of money from a large number of people.</p>
      <div className="transparent-section">
        <div className="partition">
            <p style={{fontSize:25}}>25000+<br/>
            Patients Funded</p>
        </div>
        <div className="partition">
            <p style={{fontSize:25}}>24/ 7<br/>
           Personalized Expert Assistance</p>
        </div>
        <div className="partition">
            <p style={{fontSize:25}}>30 Lakh+<br/>
            Donor Community</p>
        </div>
      </div>
      <div className="transparent-section">
        <div className="partition">
            <p style={{fontSize:25}}>Fast Review of Fundraisers</p>
        </div>
        <div className="partition">
            <p style={{fontSize:25}}>Indian Tax Benefits</p>
        </div>
        <div className="partition">
            <p style={{fontSize:25}}>Free iOS & Android App.</p>
        </div>
      </div>
    </div>
  )
}

export default HowCanCrowdFundingHelp
