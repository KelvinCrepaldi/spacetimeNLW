"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export function MediaPicket() {
  const [preview, setPreview] = useState<string | null>(null);

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  }
  return (
    <>
      <input
        name="coverUrl"
        onChange={onMediaSelected}
        type="file"
        id="media"
        className="invisible w-0 h-0"
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="image preview"
          className="w-full h-auto max-w-[400px] mx-auto my-1"
        />
      )}
    </>
  );
}
