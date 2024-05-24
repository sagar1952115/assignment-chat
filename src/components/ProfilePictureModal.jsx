import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../App";

const ProfilePictureModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const {setUploadedImage,uploadedImage}=useContext(UserContext)

  const  handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        // It's an image file
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload an image file.");
      }
    }
  };

  const handleDeleteClick = () => {
    setUploadedImage(null);
    setImage(null)
    onClose()
  };

  const handleUpload=()=>{
    if(!image){
     return  alert("Please choose an image")
    }
    setUploadedImage(image)
    onClose()
  }
  

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center w-full overflow-y-auto bg-gray-600 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="p-5 mx-auto bg-white border rounded-md shadow-lg h-68 w-96 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center mb-4">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-32 h-32 rounded-full"
            />
          ) : (
            <div
            onClick={handleUploadClick}
              className="flex items-center justify-center w-32 h-32 text-sm rounded-full cursor-pointer text-slate-600 bg-slate-300"
            >Upload Picture</div>
          )}
        </div>
        <div className="flex justify-center gap-10">
          {uploadedImage && (
            <button
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          )}
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleUpload}
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
