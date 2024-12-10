import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-[20px] items-center border-2 p-[20px]">
      <h3 className="text-lg font-bold">Count: {count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-md p-2 bg-blue-600 text-white text-lg"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="rounded-md p-2 bg-blue-600 text-white text-lg"
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
