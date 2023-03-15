import { useState } from "react";
import "./imageUploader.css";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ImageUploader({ uploadData = null }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
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
          if (uploadData) uploadData(url);
          setUploadProgress(0);
        });
      }
    );
  };

  return (
    <div className="imageUploader">
      <label className="ImageUploader_fileUpload">
        <span>Select an Image</span>
        <input type="file" onChange={handleFileInputChange} />
      </label>
      {uploadProgress > 0 && (
        <div className="ImageUploader_progressBarContainer">
          <div
            className="ImageUploader_progress-bar"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {selectedFile && <p>{selectedFile.name}</p>}
      <button className="imageUploadder_button" onClick={handleImageUpload}>
        Add
      </button>
    </div>
  );
}

export default ImageUploader;
