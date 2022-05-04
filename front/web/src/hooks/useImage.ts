import React, { useCallback, useState } from "react";

export type IUseImage = [
  ArrayBuffer | string,
  File | undefined,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useImage = (): IUseImage => {
  const [base64, setBase64] = useState<ArrayBuffer | string>("");
  const [image, setImage] = useState<File>();
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        if (reader.result) {
          setBase64(reader.result);
        }
      };
    }
  }, []);
  return [base64, image, onChange];
};

export default useImage;
