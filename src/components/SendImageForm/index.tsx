// SendImageForm.tsx

import React, { useRef, useState } from 'react';
import { InputImage } from '../InputImage';

const IMAGE_ID = 'image';

export const SendImageForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [imageSource, setImageSource] = useState('');

  const selectFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const generateImageSource = (files: FileList) => {
    const file = files[0];
    const fileReader = new FileReader();
    setFileName(file.name);
    fileReader.onload = () => {
      setImageSource(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;

    generateImageSource(files);
    setImageFile(files[0]);
  };

  return (
    <form>
      <div>
        <button type="button" onClick={selectFile}>Upload Image</button>
        <InputImage
          fileInputRef={fileInputRef}
          onChange={handleFileChange}
          id={IMAGE_ID}
        />
      </div>
    </form>
  );
};