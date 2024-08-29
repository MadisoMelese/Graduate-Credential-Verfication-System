import React,{ useState, useRef } from 'react'
import '../AdminPortal/AdminPage.css'
import Body from '../Components/Body/Body'
import axios from 'axios';


function AdminPage() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [fileName, setFileName] = useState('Browse Files .csv/excel'); 

    const handleIconClick = () => {
      fileInputRef.current.click();
      console.log('icon clicked')
    };
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileName(selectedFile.name); 
        console.log('file changed');
      }
    };
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);

      try {
          const response = await axios.post('https://certificate-verificationn-system-api.vercel.app/admin/upload', formData);
          setMessage(response.data.message);
          console.log(formData)
          alert("Uploaded Successfully")
      } catch (error) {
        console.log(error)
          setMessage('Upload failed');
          alert("Error uploading file " )
      }
  };

  return (
    <Body>
    <div className='admin'>
      <div>
      <p className='msg'>Welcome To <br/> Admin <br/>Dashboard</p>

      </div>
  


      <div className="upload">
      <input type="file" style={{ display: 'none' }}  ref={fileInputRef} onChange={handleFileChange} />
      <i className='bx bx-cloud-upload' onClick={handleIconClick}></i>
      <p>{fileName}</p>
      </div>
      <div className="upload-btn" onClick={handleUpload}>
        <p>Upload</p>
      </div>
     
     
    </div>
    </Body>
  )
}

export default AdminPage
