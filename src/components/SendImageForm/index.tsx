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

  const handleClickCancelButton = () => {
    setFileName('');
    setImageSource('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form>
      <div onClick={selectFile} role="presentation">
        {fileName ? (
          <img src={imageSource} alt="Uploaded Image" />
        ) : (
          '+ Upload Image'
        )}

        <InputImage
          fileInputRef={fileInputRef}
          onChange={handleFileChange}
          id={IMAGE_ID}
        />
      </div>

      <div>
        <button onClick={handleClickCancelButton}>× Cancel</button>
        <button type="submit">Send Image</button>
      </div>
    </form>
  );
};
