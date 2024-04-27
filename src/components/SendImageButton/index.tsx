"use client";

import React from "react";
import InputImage from "../InputImage";
import { useSendImage, IMAGE_ID } from "../../hooks/useSendImage";

type SendImageButtonProps = {
  setUploaded: (uploaded: boolean) => void;
};

const SendImageButton = ({
  setUploaded,
}: SendImageButtonProps): JSX.Element => {
  const { fileInputRef, rest, ref, selectFile } = useSendImage(setUploaded);

  return (
    <button
      onClick={selectFile}
      className="py-2 px-8 text-[#FF8C8C] bg-white rounded-3xl shadow border border-red-400"
    >
      <p className="text-3xl" style={{ fontFamily: "bold" }}>
        + New LGTM
      </p>
      <InputImage
        fileInputRef={fileInputRef}
        refCallback={ref}
        id={IMAGE_ID}
        {...rest}
      />
    </button>
  );
};

export default SendImageButton;
