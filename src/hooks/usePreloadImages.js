// src/hooks/usePreloadImages.js
import { useEffect } from "react";

export const usePreloadImages = (imageUrls = []) => {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
};
