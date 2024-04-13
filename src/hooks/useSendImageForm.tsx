import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export const IMAGE_ID = 'image';

type FormValues = {
  image: FileList;
};

export const useSendImageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
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
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;

    generateImageData(files);
  };

  const { ref, ...rest } = register(IMAGE_ID, {
    onChange: handleFileChange, 
    required: 'ファイルを選択してください',
  });

  // フォーム送信時の処理
  const onSubmit = async (data: FormValues) => {
    // フォームデータを作成
    const formData = new FormData();
    formData.append('image', data.image[0]); // ここで選択されたファイルを追加

    try {
      // ファイルをサーバーに送信するリクエストを行う
      const response = await fetch('https://example.com/upload', {
        method: 'POST',
        body: formData,
      });

      // レスポンスの処理
      const responseData = await response.json();
      console.log('サーバーからのレスポンス:', responseData);
    } catch (error) {
      console.error('エラー:', error);
    }

    // フォーム送信後に画像関連のステートをリセット
    reset();
  };

  return {
    fileInputRef,
    rest,
    ref,
    onSubmit,
    handleSubmit,
    selectFile,
  };
};
