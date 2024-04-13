'use client';

import React from 'react';
import { InputImage } from '../InputImage';
import { useSendImageForm, IMAGE_ID } from '../../hooks/useSendImageForm';

export const SendImageForm: React.FC = () => {
  const { fileInputRef, rest, ref, selectFile } = useSendImageForm();

  return (
    <div onClick={selectFile} role="presentation">
      画像を選択する
      <InputImage fileInputRef={fileInputRef} refCallback={ref} id={IMAGE_ID} {...rest} />
    </div>
  );
};
