import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [UserData, setUserData] = useState([]);

  const [index, setindex] = useState(1);

  const getdata = async () => {
    const photoResponse = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(photoResponse.data);
  };

  useEffect(
    function () {
      getdata();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-400 text-xs">no user availble</h3>
  );

  if (UserData.length > 0) {
    printUserData = UserData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="blank">
            <div className="h-40 w-44 mt-5 rounded-xl">
              <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-full object-cover rounded-xl "
              />
              <h3 className="text-sm text-gray-800 bg-white p-1 text-center">
                {elem.author}
              </h3>
            </div>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-blue-200 h-screen text-white p-4">
      <h1 className="text-6xl text-white fixed font-bold">{index}</h1>
      <div className="flex flex-wrap gap-6 p-2">{printUserData}</div>
    </div>
  );
};

export default App;
