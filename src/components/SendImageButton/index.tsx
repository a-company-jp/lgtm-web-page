'use client';

import React from 'react';
import InputImage from '../InputImage';
import { useSendImage, IMAGE_ID } from '../../hooks/useSendImage';

type SendImageButtonProps = {
  setUploaded: (uploaded: boolean) => void;
  
};

const SendImageButton = ({ setUploaded }: SendImageButtonProps): JSX.Element => {
  const { fileInputRef, rest, ref, selectFile } = useSendImage(setUploaded);

  const style = {
    container: "flex justify-center md:justify-end mt-4 md:mr-36",
    btn: 'text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2',
  };

  return (
    <div className={style.container}>
      <button onClick={selectFile} role="presentation" type="button" className={`${style.btn}`}>
        <p className="text-4xl">
          ➕ New LGTM
        </p>
        <InputImage  fileInputRef={fileInputRef} refCallback={ref} id={IMAGE_ID} {...rest} />
      </button>
    </div>

  );
};

export default SendImageButton;
