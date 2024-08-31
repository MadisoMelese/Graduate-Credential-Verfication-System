import React,{useState} from 'react'
import '../StudentPortal/StudentPage.css'
import Body from '../Components/Body/Body'
import 'boxicons/css/boxicons.min.css';
import jsPDF from 'jspdf';
import axios from 'axios';



function StudentPage() {

  const [certificateData, setCertificateData] = useState(null);
  const [certificateId, setCertificateId] = useState('');

  const fetchCertificate = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/student/${certificateId}`);
      setCertificateData(response.data);
      console.log("file fetched")
    } catch (err) {
      console.error('Error fetching certificate data', err);
      alert('Certificate not found')
      console.log(certificateId)
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'A4',
    });
  
    // Set background color (light gray)
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');
  
    // Add Certificate Title
    doc.setFont('Times', 'bold');
    doc.setFontSize(30);
    doc.setTextColor(0, 0, 128); // Dark blue color
    doc.text('Certificate of Internship', doc.internal.pageSize.width / 2, 80, { align: 'center' });
  
    // Add Decorative Line
    doc.setDrawColor(0, 0, 128); // Dark blue color
    doc.setLineWidth(1);
    doc.line(100, 95, doc.internal.pageSize.width - 100, 95);
  
    // Add Certificate Body Text
    doc.setFont('Times', 'normal');
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text('This is to certify that', doc.internal.pageSize.width / 2, 150, { align: 'center' });
  
    // Add Student Name
    doc.setFont('Times', 'bold');
    doc.setFontSize(24);
    doc.text(certificateData.studentName, doc.internal.pageSize.width / 2, 190, { align: 'center' });
  
    // Add Internship Domain Text
    doc.setFont('Times', 'normal');
    doc.setFontSize(18);
    doc.text('has successfully completed an internship in', doc.internal.pageSize.width / 2, 230, { align: 'center' });
  
    // Add Internship Domain
    doc.setFont('Times', 'bold');
    doc.setFontSize(22);
    doc.text(certificateData.internshipDomain, doc.internal.pageSize.width / 2, 270, { align: 'center' });
  
    // Add Date Range
    doc.setFont('Times', 'normal');
    doc.setFontSize(18);
    doc.text(`from ${new Date(certificateData.startDate).toLocaleDateString()} to ${new Date(certificateData.endDate).toLocaleDateString()}.`, doc.internal.pageSize.width / 2, 310, { align: 'center' });
  
    // Add Signature Area
    doc.setFont('Times', 'italic');
    doc.setFontSize(16);
    doc.text('Authorized Signature', doc.internal.pageSize.width / 2 + 150, doc.internal.pageSize.height - 100, { align: 'center' });
    doc.line(doc.internal.pageSize.width / 2 + 50, doc.internal.pageSize.height - 120, doc.internal.pageSize.width / 2 + 250, doc.internal.pageSize.height - 120);
  
    // Add Seal (Optional)
    doc.setFontSize(12);
    doc.text('Official Seal', doc.internal.pageSize.width / 2 - 250, doc.internal.pageSize.height - 100, { align: 'center' });
    doc.circle(doc.internal.pageSize.width / 2 - 250, doc.internal.pageSize.height - 140, 30, 'S');
  
    // Save the PDF
    doc.save('certificate.pdf');
  };
  
  
  return (
    <div>
      <Body>
        <div className='student-main'>
        <div className='search-container'>
          <input type="text" placeholder='Enter your ID' 
           value={certificateId}
           onChange={(e) => setCertificateId(e.target.value)}
          />
          <div className='search-btn'  onClick={fetchCertificate}>Search</div>
        </div>
        <div className='certificate'>
        {certificateData && (
        <div style={styles.certificatePreview}>
          <h1 style={styles.title}>Certificate of Internship</h1>
          <hr style={styles.decorativeLine} />
          <p style={styles.bodyText}>This is to certify that</p>
          <h2 style={styles.studentName}>{certificateData.studentName}</h2>
          <p style={styles.bodyText}>has successfully completed an internship in</p>
          <h3 style={styles.internshipDomain}>{certificateData.internshipDomain}</h3>
          <p style={styles.bodyText}>
            from {new Date(certificateData.startDate).toLocaleDateString()} to {new Date(certificateData.endDate).toLocaleDateString()}.
          </p>
          <div style={styles.signatureSection}>
            <div style={styles.signatureLine}></div>
            <p style={styles.signatureText}>Authorized Signature</p>
          </div>
          <div style={styles.sealSection}>
            <div style={styles.sealCircle}></div>
            <p style={styles.sealText}>Official Seal</p>
          </div>
        </div>
      )}
        </div>
       {certificateData && (<div className='download-btn' onClick={generatePDF}><i class='bx bxs-download' ></i>Download PDF</div>)}
        </div>
      </Body>
    </div>
  )
}

const styles = {
  certificatePreview: {
    marginTop: '20px',
    padding: '40px',
    backgroundColor: '#f0f0f2',
    borderRadius: '10px',
    width: '800px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#000080', // Dark blue
  },
  decorativeLine: {
    width: '80%',
    margin: '10px auto',
    border: '1px solid #000080',
  },
  bodyText: {
    fontSize: '18px',
    margin: '20px 0',
  },
  studentName: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  internshipDomain: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  signatureSection: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  signatureLine: {
    width: '200px',
    borderBottom: '1px solid black',
  },
  signatureText: {
    marginTop: '10px',
    fontStyle: 'italic',
    fontSize: '16px',
  },
  sealSection: {
    position: 'absolute',
    top: 'calc(100% - 150px)',
    left: '250px',
    textAlign: 'center',
  },
  sealCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '2px solid black',
    margin: '0 auto',
  },
  sealText: {
    marginTop: '10px',
    fontSize: '12px',
  },
};

export default StudentPage
