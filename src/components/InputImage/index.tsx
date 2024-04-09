import React, { InputHTMLAttributes } from 'react';
import { RefCallBack } from 'react-hook-form';

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputImage: React.FC<Props> = ({
  onChange,
  id,
  fileInputRef,
  ...rest
}) => {
  return (
    <input
      ref={fileInputRef} // refを受け取れるようにする。
      id={id}
      type="file"
      accept="image/*"
      onChange={onChange}
      hidden
      {...rest}
    />
  );
};