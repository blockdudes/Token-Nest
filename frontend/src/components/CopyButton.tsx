import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleCopy}
    >
      {copied ? <LuCopyCheck /> : <LuCopy />}
    </div>
  );
};

export default CopyButton;
