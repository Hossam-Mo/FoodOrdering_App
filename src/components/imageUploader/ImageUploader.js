import { useState } from "react";
import "./imageUploader.css";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ImageUploader({ imgUrl, handleChange, number }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImageUpload = () => {
    const storageRef = ref(storage, selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(storageRef).then((url) => {
          console.log("File uploaded successfully!");
          handleChange(url, number, "img");
          setUploadProgress(0);
        });
      }
    );
  };

  return (
    <div className="imageUploader">
      <label className="ImageUploader_fileUpload">
        <span>Select file</span>
        <input type="file" onChange={handleFileInputChange} />
      </label>
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadProgress > 0 && (
        <div className="ImageUploader_progressBarContainer">
          <div
            className="ImageUploader_progress-bar"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {imgUrl && <img src={imgUrl} alt="Uploaded image" />}
    </div>
  );
}

export default ImageUploader;
