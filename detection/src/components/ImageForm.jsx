
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const ImageForm = ({onFileSubmit, onFileUpload}) => {
    const [file, setFile]=useState({});

    const handleChange = (e)=>{
        setFile(e.target.files[0]);
        onFileUpload(e.target.files[0]);
        console.log(file);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onFileSubmit(file)
    }
    return (
        <form onSubmit={handleSubmit} className='ImageForm'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} sx={{
                    textAlign: "center"
                }}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            backgroundColor: "#05386B",
                            color: "#EDF5E1",
                        }}
                        onChange={handleChange}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{
                    textAlign: "center"
                }} >
                    <Button 
                        type="submit" 
                        variant="contained"
                        sx={{
                            backgroundColor: "#05386B",
                            color: "#EDF5E1",
                        }}
                        disabled= {
                            !file.name
                        }
                    >Start Processing...</Button>
                </Grid>
            </Grid>
            
            {/* <input type='file' onChange={handleChange}/> */}
            
        </form>
    )
}

export default ImageForm
