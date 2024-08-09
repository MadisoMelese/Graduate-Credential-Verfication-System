import React from 'react'
import '../AdminPortal/AdminPage.css'
import Body from '../../Components/Body/Body'

function AdminPage() {
  return (
    <Body>
    <div className='admin'>
      <div className="upload">
      <i class='bx bx-cloud-upload'></i>
      <p>Browse Files .csv/excel</p>
      </div>
      <div className="upload-btn">
        <p>Upload</p>
      </div>
      <div className="table">
      <table>
            <tr>
                <th>SL No.</th>
                <th>Certificate ID</th>
                <th>Student Name</th>
                <th>Domain Name</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
        <tbody>
            <tr>
                <td>1</td>
                <td>228942</td>
                <td>Spider Man</td>
                <td>Web-Developer</td>
                <td>03-12-2023</td>
                <td>03-12-2024</td>
            </tr>
            <tr>
                <td>2</td>
                <td>467382</td>
                <td>Bat-Man</td>
                <td>UI/UX Design</td>
                <td>10-03-2-2024</td>
                <td>10-0402024</td>
            </tr>
            <tr>
                <td>3</td>
                <td>228942</td>
                <td>Spider Man</td>
                <td>Web-Developer</td>
                <td>03-12-2023</td>
                <td>03-12-2024</td>
            </tr>
            <tr>
                <td>4</td>
                <td>467382</td>
                <td>Bat-Man</td>
                <td>UI/UX Design</td>
                <td>10-03-2-2024</td>
                <td>10-0402024</td>
            </tr>
            
        </tbody>
    </table>
      </div>
    </div>
    </Body>
  )
}

export default AdminPage
