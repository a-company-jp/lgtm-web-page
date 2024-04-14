import { copyImageToClipboard } from 'copy-image-clipboard';

export const imageCopy = async (imageUrl: string) => {
  try {
    const res = await copyImageToClipboard(imageUrl);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
