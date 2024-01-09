import React, { useState } from "react";
// import cloudinary from 'cloudinary';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileStatus, setFileStatus] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    setFileStatus([...fileStatus, ...Array(files.length).fill("Pending")]);
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }

    const totalFiles = selectedFiles.length;
    let filesUploaded = 0;

    for (let i = 0; i < totalFiles; i++) {
      const file = selectedFiles[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
       
        const response = await fetch("http://10.0.0.242:6001/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("File uploaded successfully:", result);

          filesUploaded++;
          const updatedFileStatus = [...fileStatus];
          updatedFileStatus[i] = "Uploaded";
          setFileStatus(updatedFileStatus);

          setProgress((filesUploaded / totalFiles) * 100);

          if (filesUploaded === totalFiles) {
            setProgress(0);
          }
        } else {
          console.error("Error uploading file:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        const updatedFileStatus = [...fileStatus];
        updatedFileStatus[i] = "Failed";
        setFileStatus(updatedFileStatus);
      }
    }
  };

  return ( <>
       <div>
      <h2>Multiple File Upload to Cloudinary</h2>
      <div>
        <p>{`Progress at ${progress}%`}</p>
        <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'green' }}></div>
      </div>

      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleFileUpload}>Upload Files</button>

      <div>
        {fileStatus.map((status, index) => (
          <p key={index}>{`File ${index + 1}: ${status}`}</p>
        ))}
      </div>
     </div>
 </>);
};

export default FileUpload;

