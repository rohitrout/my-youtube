import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ResultsCard from "./ResultsCard";

const Results = () => {
  const [resultsData, setResultsData] = useState([]);
  const [params] = useSearchParams();
  console.log(params.get("s"));

  useEffect(() => {
    getResultsData();
  }, []);

  const getResultsData = async () => {
    const response = await fetch(
      //   "https://youtube.googleapis.com/youtube/v3/search?maxResults=15&type=" +
      //     params.get("s") +
      //     "demons&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        params.get("s") +
        "&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"
    );
    const json = await response.json();
    // console.log(json);
    setResultsData(json.items);
  };

  return (
    <div>
      {resultsData.map((item) => (
        <Link to={"/watch?v=" + item?.id?.videoId} key={item?.id?.videoId}>
          {" "}
          <ResultsCard info={item} />
        </Link>
      ))}
      {/* <ResultsCard info={resultsData[0]} /> */}
    </div>
  );
};

export default Results;
