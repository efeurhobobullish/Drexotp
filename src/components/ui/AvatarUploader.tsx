import React, { useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import { toBase64 } from "@/helpers/toBase64String";

interface AvatarUploaderProps {
  value?: string;
  onChange?: (dataUrl: string | undefined) => void;
  size?: number;
}

export default function AvatarUploader({ value, onChange, size = 112 }: AvatarUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(value);

  const handlePick = () => inputRef.current?.click();

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const dataUrl = await toBase64(file);
    setPreview(dataUrl);
    onChange?.(dataUrl);
  };

  const handleRemove = () => {
    setPreview(undefined);
    if (inputRef.current) inputRef.current.value = "";
    onChange?.(undefined);
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      <div
        className="w-full h-full rounded-full overflow-hidden bg-primary-2 border border-line center"
        onClick={handlePick}
        role="button"
        aria-label="Upload avatar"
      >
        {preview ? (
          <img src={preview} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <Camera className="text-primary" />
        )}
      </div>
      {preview && (
        <button
          type="button"
          onClick={handleRemove}
          className="absolute -bottom-2 right-0 text-xs px-2 py-1 rounded-full bg-secondary border border-line flex items-center gap-1"
        >
          <X size={14} /> Remove
        </button>
      )}
    </div>
  );
}