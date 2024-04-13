'use client';

import React from 'react';
import { InputImage } from '../InputImage';
import { useSendImageForm, IMAGE_ID } from '../../hooks/useSendImageForm';

export const SendImageForm: React.FC = () => {
  const { fileInputRef, rest, ref, selectFile } = useSendImageForm();

  const style = {
    container: 'w-20 h-7  rounded-md bg-green-700 text-white flex justify-center items-center cursor-pointer hover:bg-green-600',
};
  return (
    <div onClick={selectFile} role="presentation" className={`${style.container}`} >
      +追加
      <InputImage fileInputRef={fileInputRef} refCallback={ref} id={IMAGE_ID} {...rest} />
    </div>
  );
};
