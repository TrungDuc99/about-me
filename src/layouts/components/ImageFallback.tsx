/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import { useState } from "react";
export const __client = true;

const ImageFallback = (props: any) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
