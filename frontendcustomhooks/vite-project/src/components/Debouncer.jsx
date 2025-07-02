import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function useDebouncer(inputval, time, arr, setArr) {
  const [deb, setDeb] = useState(inputval);
  useEffect(() => {
    const tout = setTimeout(() => {
      if (inputval === "hi") {
        // just to check authorization if a real server were there
        axios.get("http://localhost:5000/todos").then((res) => {
          {
            setArr(res.data);
          }
        });
      }
      setDeb(inputval);
    }, time);

    return () => {
      clearTimeout(tout);
    };
  }, [inputval, time, arr]);
  return deb;
}

export default function Debouncer() {
  const [inputval, setInputVal] = useState("");
  const [arr, setArr] = useState([]);
  const debouncedval = useDebouncer(inputval, 3000, arr, setArr);
  return (
    <div>
      <input
        type="text"
        placeholder="write down "
        onChange={(e) => setInputVal(e.target.value)}
      />
      Debounced value is {debouncedval}
      {arr.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
}
