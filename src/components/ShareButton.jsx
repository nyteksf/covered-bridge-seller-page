import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils"; // if you use class merging

const ShareButton = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      {...props}
      className={cn(
        "transition-all duration-200 ease-in-out font-bold text-sm leading-5 tracking-wider flex items-center px-4 py-2 uppercase whitespace-nowrap text-[#131313] bg-white border border-[#131313] rounded-[3px] shadow-sm hover:bg-[#131313] hover:text-white",
        className
      )}
    >
      <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
});

ShareButton.displayName = "ShareButton";

export default ShareButton;
