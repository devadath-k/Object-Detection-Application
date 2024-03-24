// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import ImageForm from './components/ImageForm';
import ImageSection from './components/ImageSection';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {

  const [message, setMessage] = useState('');
  const [image, setImage]= useState('');
  const [processedImage, setProcessedImage]= useState('');

  const fetchAPI = async ()=>{
    const response = await axios.get("http://127.0.0.1:8080/api/data");
    console.log(response.data.message);
    setMessage(response.data.message);
  }

  useEffect (()=>{
    fetchAPI()
  },[]);

  const handleFileUpload = (file) =>{
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleFileSubmit = async (file) =>{
    const formData = new FormData();
    formData.append(
      "file",
      file,
      file.name
    );

    console.log(formData)

    try {
      const response = await axios.post('http://127.0.0.1:8080/api/process', formData);
      setProcessedImage(`http://127.0.0.1:8080${response.data.processed_image_url}`);
      console.log(processedImage);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    // getProcessedImage()

  };

  return (
    <>
      <CssBaseline />
      <div className='App'>
        <header>
          <NavBar />
        </header>
        <Container maxWidth="lg">
          <ImageForm onFileSubmit = {handleFileSubmit} onFileUpload = {handleFileUpload} />
          {
            image ? (
              <ImageSection image= {image} image2={processedImage}/>
            ): null
          }
          
        </Container>
          
      </div>
    </>
  );
}

export default App;
