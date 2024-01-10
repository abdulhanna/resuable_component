// import React, { useEffect, useState } from "react";
// // import cloudinary from 'cloudinary';

// const FileUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [fileStatus, setFileStatus] = useState([]);
//   const [progress, setProgress] = useState(0);

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     setSelectedFiles([...selectedFiles, ...files]);
//     setFileStatus(Array.from({ length: files.length }, () => ({ status: "", progress: 0 })));
//   };

//   const handleFileUpload = async () => {
//     if (selectedFiles.length === 0) {
//       alert("Please select at least one file to upload.");
//       return;
//     }

//     const totalFiles = selectedFiles.length;
//     let filesUploaded = 0;

//     for (let i = 0; i < totalFiles; i++) {
//       const file = selectedFiles[i];
//       const formData = new FormData();
//       formData.append("file", file);

//       try {
       
//         const response = await fetch("http://localhost:6001/single/upload", {
//           method: "POST",
//           body: formData,
//         });

//         if (response.ok) {
//           const result = await response.json();
//           console.log("File uploaded successfully:", result);

//           filesUploaded++;
//           const updatedFileStatus = [...fileStatus];
//           updatedFileStatus[i] = "Uploaded";
//           setFileStatus(updatedFileStatus);

//           setProgress((filesUploaded / totalFiles) * 100);

//           if (filesUploaded === totalFiles) {
//             setProgress(0);
//           }
//         } else {
//           console.error("Error uploading file:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         const updatedFileStatus = [...fileStatus];
//         updatedFileStatus[i] = "Failed";
//         setFileStatus(updatedFileStatus);
//       }
//     }
//   };

//   useEffect(()=>{
//        console.log(fileStatus,'status')
//   },[fileStatus])

//   return ( <>
//        <div>
//       <h2>Multiple File Upload to Cloudinary</h2>
//       <div>
//         <p>{`Progress at ${progress}%`}</p>
//         <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'green' }}></div>
//       </div>

//       <input type="file" onChange={handleFileChange} multiple />
//       <button onClick={handleFileUpload}>Upload Files</button>

//       <div>
//         {fileStatus.map((status, index) => (
//           <p key={index}>{`File ${index + 1}: ${status.progress}%`}</p>
//         ))}
//       </div>
//      </div>
//  </>);
// };

// export default FileUpload;

import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileStatus, setFileStatus] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    setFileStatus([...fileStatus, ...Array(files.length).fill({ status: "Pending", progress: 0 })]);
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }

    const totalFiles = selectedFiles.length;

    for (let i = 0; i < totalFiles; i++) {
      const file = selectedFiles[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:6001/single/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("File uploaded successfully:", result);

          setFileStatus((prevFileStatus) => {
            const updatedFileStatus = [...prevFileStatus];
            updatedFileStatus[i] = { status: "Uploaded", progress: 100 };
            return updatedFileStatus;
          });
          

          setProgress(((i + 1) / totalFiles) * 100);

          if (i + 1 === totalFiles) {
            setProgress(0);
          }
        } else {
          console.error("Error uploading file:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        const updatedFileStatus = [...fileStatus];
        updatedFileStatus[i] = { status: "Failed", progress: 0 };
        setFileStatus([...updatedFileStatus]);
      }
    }
  };

  useEffect(() => {
    console.log(fileStatus, "status");
  }, [fileStatus]);

  return (
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
          <div key={index}>
            <p>{`File ${index + 1}: ${status.status}`}</p>
            <div style={{ width: `${status.progress}%`, height: '10px', backgroundColor: 'blue' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
