import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import Online from "./components/Online";
import Mousemoove from "./components/Mousemove";
import Debouncer from "./components/Debouncer";

function App() {
  return (
    <div>
      <Debouncer />
    </div>
  );
}

export default App;
