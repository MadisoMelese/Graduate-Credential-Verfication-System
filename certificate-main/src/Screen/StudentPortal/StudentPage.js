import React from 'react'
import '../StudentPortal/StudentPage.css'
import Body from '../../Components/Body/Body'
import 'boxicons/css/boxicons.min.css';

function StudentPage() {
  return (
    <div>
      <Body>
        <div className='student-main'>
        <div className='search-container'>
          <input type="text" placeholder='Enter your ID' />
          <div className='search-btn'>Search</div>
        </div>
        <div className='certificate'>
          <img src="https://marketplace.canva.com/EAFCP1Ox_-c/1/0/1600w/canva-blue-yellow-minimalist-internship-certificate-RR9ND_Uk1Bw.jpg" alt="Certificate" />
        </div>
        <div className='download-btn'><i class='bx bxs-download' ></i>Download PDF</div>
        </div>
      </Body>
    </div>
  )
}

export default StudentPage
