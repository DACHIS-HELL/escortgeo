import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import '../css/imageupload.css'
import { LuImagePlus } from "react-icons/lu";


function ImageUploadForm() {
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageUpload = (acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('images', file);
    });

    fetch('YOUR_PHP_API_ENDPOINT_FOR_UPLOAD', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error uploading images');
        }
        return response.json();
      })
      .then((data) => {
        setImageUrls((prevImageUrls) => [...prevImageUrls, ...data]);
      })
      .catch((error) => console.error('Error uploading images:', error));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: handleImageUpload,
  });

  useEffect(() => {
    fetch('YOUR_PHP_API_ENDPOINT_FOR_FETCHING_IMAGES')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching images');
        }
        return response.json();
      })
      .then((data) => {
        setImageUrls(data);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='image-upload-form'>
      <div className='drag' {...getRootProps()}>
        <input {...getInputProps()} />
        <LuImagePlus className='addimg' />
        <p>დაამატე ფოტო</p>
      </div>
      <div className="responsive">
      <div className='gallery'>
        {imageUrls.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} alt="Gallery" width={'300px'} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default ImageUploadForm;
