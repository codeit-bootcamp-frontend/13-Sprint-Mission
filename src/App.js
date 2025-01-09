import { useEffect } from "react";

function App() {
  console.log("asd");
  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/docs/#/")
      .then((response) => response.json())
      .then((result) => console.log(result));
  }, []);

  return <div>react 프로젝트 시작</div>;
}

export default App;
