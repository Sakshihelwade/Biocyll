import React from 'react'
import "../Css/style.css"
const CategoriWise = () => {
  return (
    <>
    <div className="container">
      <text className="heading mb-8 text-3xl font-bold text-blue-900">Shop By Category</text>
      <hr className='divider' style={{marginTop:20}}></hr>
      <text className="subtext mb-5 text-blue-500 "><br/>
      Discover Products by Category: Shop Our Wide Range of Selections
      </text>
      <table className="transparent-section mt-5">
        <tbody>
          <tr >
            <td style={{padding:30,borderBottom:'1px solid white',borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>25000+<br />Patients Funded</p>
            </td>
            <td style={{padding:30,borderBottom:'1px solid white',borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>24/7<br />Personalized Expert Assistance</p>
            </td>
            <td style={{padding:30,borderBottom:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>30 Lakh+<br />Donor Community</p>
            </td>
          </tr>
          <tr>
            <td style={{padding:30,borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>Fast Review of Fundraisers</p>
            </td>
            <td style={{padding:30,borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>Indian Tax Benefits</p>
            </td>
            <td style={{padding:30}}>
              <p style={{ fontSize: 25 }}>Free iOS & Android App</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default CategoriWise
