'use client';

import { InputImage } from '../InputImage';

import { useSendImageForm, IMAGE_ID } from '../../hooks/useSendImageForm';

export const SendImageForm: React.FC = () => {
  const {
    fileInputRef,
    rest,
    ref,
    onSubmit,
    handleSubmit,
    selectFile,
  } = useSendImageForm();

  // handleSubmitに送信時の処理を渡す。
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div  onClick={selectFile} role="presentation">
        '画像を選択する'

        <InputImage
          fileInputRef={fileInputRef}
          refCallback={ref}
          id={IMAGE_ID}
          {...rest}
        />
      </div>
      <div >
        <button type="submit">画像を送信</button>
      </div>
    </form>
  );
};