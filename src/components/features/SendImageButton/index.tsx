"use client";

import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, useDisclosure } from "@yamada-ui/react";
import { useDropzone } from "react-dropzone";
import getApiClient from "../../../utils/client";
import { imageCopy } from "../../../utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getLgtms } from "../../../store/lgtmListSlice";

const SendImageButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [recievedImage, setRecievedImage] = useState<string>("");
  const [imgBlob, setImgBlob] = useState<Blob>();
  const client = getApiClient();
  const dispatch = useDispatch<AppDispatch>();

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setUploadedImage(result);
      }
    };
    reader.readAsDataURL(file);

    const blob = new Blob([file], { type: file.type });
    setImgBlob(blob);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleOnDelete = () => {
    setUploadedImage(null);
  };

  const handleOnSubmit = async () => {
    try {
      const res = await client.post("api/v1/lgtms", imgBlob, {
        "Content-Type": "application/octet-stream",
      });
      setRecievedImage(res.data.imageUrl);
      dispatch(getLgtms());
    } catch (err) {}
  };

  const handleOnCopy = async (imageUrl: string) => {
    await imageCopy(imageUrl);
    onClose();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="py-2 px-8 text-[#FF8C8C] bg-white rounded-3xl shadow border border-red-400"
      >
        <p className="text-3xl" style={{ fontFamily: "bold" }}>
          + New LGTM
        </p>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setUploadedImage(null);
          setRecievedImage("");
          onClose();
        }}
        style={{ backgroundColor: "white" }}
        duration={0.4}
      >
        <ModalHeader>
          <span className="text-[#E44C4C]">Create LGTM</span>
        </ModalHeader>
        <ModalBody className="flex flex-col items-center justify-center text-center">
          {uploadedImage ? (
            <>
              {!recievedImage ? (
                <div className="w-full flex flex-col items-center">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="max-w-[60%] max-h-[60%] h-auto"
                  />
                  <div className="w-[60%] mt-2 flex justify-between">
                    <button
                      onClick={handleOnDelete}
                      className="bg-gray-100 text-[#FF8C8C] rounded font-bold py-2 px-4"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleOnSubmit}
                      className="bg-[#FF8C8C] text-white rounded font-bold  py-2 px-4"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center mt-4">
                  <img
                    src={recievedImage}
                    alt="Recieved"
                    className="max-w-[60%] max-h-[60%] h-auto"
                  />
                  <div className="mt-2 flex">
                    <button
                      onClick={() => handleOnCopy(recievedImage)}
                      className="bg-[#FF8C8C] text-white py-2 px-4 rounded"
                    >
                      Image Copy
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div
              {...getRootProps()}
              className="border-dashed border-4 border-[#FF8C8C] p-8 rounded-lg text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600">
                Drag & drop a file here, or click to select file
              </p>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default SendImageButton;
