import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import ShareButton from "@/components/ShareButton"; // This avoids recursion

const ShareDropdown = ({ url }) => {
  const shareUrl = url || window.location.href;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShareButton />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="
          w-[220px] bg-white border border-[#c4c4c4]
          rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          animate-in fade-in zoom-in
          z-50
        "
      >
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(shareUrl)}
          className="hover:bg-gray-100 px-3 py-2 text-[#1a1a1a] cursor-pointer"
        >
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
          className="hover:bg-gray-100 px-3 py-2 text-[#1a1a1a] cursor-pointer"
        >
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}`,
              "_blank"
            )
          }
          className="hover:bg-gray-100 px-3 py-2 text-[#1a1a1a] cursor-pointer"
        >
          Share on Twitter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareDropdown;
