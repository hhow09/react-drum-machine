import { useEffect } from "react";

const useDoubleClick = ({
  ref,
  latency = 200,
  onSingleClick = () => null,
  onDoubleClick = () => null,
}) => {
  useEffect(() => {
    const clickRef = ref.current;
    let clickCount = 0;
    const handleClick = (e) => {
      clickCount += 1;

      setTimeout(() => {
        if (clickCount === 1) onSingleClick(e);
        else if (clickCount === 2) onDoubleClick(e);

        clickCount = 0;
      }, latency);
    };

    // Add event listener for click events
    clickRef.addEventListener("click", handleClick);

    // Remove event listener
    return () => {
      clickRef.removeEventListener("click", handleClick);
    };
  });
};

export default useDoubleClick;
