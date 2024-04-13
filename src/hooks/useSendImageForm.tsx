import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

export const IMAGE_ID = 'image';

type FormValues = {
  image: FileList;
};

export const useSendImageForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isImageSelected = useRef<boolean>(false);

  const selectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;
    generateImageData(files);
    sendImage({ image: files });
  };

  const generateImageData = (files: FileList) => {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const imageSource = fileReader.result as string;
      const fileName = file.name;
      console.log('画像ソース:', imageSource);
      console.log('ファイル名:', fileName);
    };
    fileReader.readAsDataURL(file);
    isImageSelected.current = true;
    console.log('fileInputRef.current:', fileInputRef.current);
  };

  const { ref, ...rest } = register(IMAGE_ID, {
    onChange: handleFileChange,
    required: 'ファイルを選択してください',
  });

  const sendImage = async (data: FormValues) => {
    if (!isImageSelected.current) return;

    const formData = new FormData();
    formData.append('image', data.image[0]);
    try {
      const response = await fetch('https://example.com/upload', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log('サーバーからのレスポンス:', responseData);
    } catch (error) {
      console.error('エラー:', error);
    }
    reset();
  };

  return {
    fileInputRef,
    rest,
    ref,
    onSubmit: sendImage,
    handleSubmit,
    selectFile,
  };
};
