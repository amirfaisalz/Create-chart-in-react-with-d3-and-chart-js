import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { Pie } from "react-chartjs-2";

export default function App() {
  const [complete, setComplete] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [uploaded, setUploaded] = useState([]);
  const [econsent, setEconsent] = useState([]);

  const pieDataCompletion = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        backgroundColor: ["green", "pink"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: [complete.length, incomplete.length]
      }
    ]
  };

  const pieDataDocument = {
    labels: ["Uploaded", "eConsent"],
    datasets: [
      {
        backgroundColor: ["blue", "red"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: [uploaded.length, econsent.length]
      }
    ]
  };

  useEffect(() => {
    csv("/data/mock.csv").then((data) => {
      const dataResult = data.filter((data) => !data.colums);

      // console.log(dataResult);

      const dataComplete = dataResult.filter(
        (data) => data.quiz_completion === "complete"
      );

      const dataIncomplete = dataResult.filter(
        (data) => data.quiz_completion === "incomplete"
      );

      const dataUploaded = dataResult.filter(
        (data) => data.document === "Uploaded"
      );

      const dataEconsent = dataResult.filter(
        (data) => data.document === "eConsent"
      );

      setComplete(complete.concat(dataComplete));
      setIncomplete(incomplete.concat(dataIncomplete));
      setUploaded(uploaded.concat(dataUploaded));
      setEconsent(econsent.concat(dataEconsent));
    });
  }, []);

  return (
    <div style={{ width: 600, display: "flex" }}>
      <Pie
        data={pieDataCompletion}
        options={{
          title: {
            display: true,
            text: "Average quiz completion",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "top"
          }
        }}
      />

      <Pie
        data={pieDataDocument}
        options={{
          title: {
            display: true,
            text: "Average quiz document",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "top"
          }
        }}
      />
    </div>
  );
}
