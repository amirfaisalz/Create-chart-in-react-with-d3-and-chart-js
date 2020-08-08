import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { Pie, Bar } from "react-chartjs-2";

export default function App() {
  const [complete, setComplete] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [uploaded, setUploaded] = useState([]);
  const [econsent, setEconsent] = useState([]);

  // study complete
  const [study1Complete, setStudy1Complete] = useState([]);
  const [study2Complete, setStudy2Complete] = useState([]);
  const [study3Complete, setStudy3Complete] = useState([]);
  const [study4Complete, setStudy4Complete] = useState([]);
  const [study5Complete, setStudy5Complete] = useState([]);

  // study incomplete
  const [study1Incomplete, setStudy1Incomplete] = useState([]);
  const [study2Incomplete, setStudy2Incomplete] = useState([]);
  const [study3Incomplete, setStudy3Incomplete] = useState([]);
  const [study4Incomplete, setStudy4Incomplete] = useState([]);
  const [study5Incomplete, setStudy5Incomplete] = useState([]);

  const pieDataCompletion = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        backgroundColor: ["#00ff00", "#ff1a40"],
        hoverBackgroundColor: ["#014001", "#b30000"],
        data: [complete.length, incomplete.length]
      }
    ]
  };

  const pieDataDocument = {
    labels: ["Uploaded", "eConsent"],
    datasets: [
      {
        backgroundColor: ["blue", "red"],
        hoverBackgroundColor: ["#0505aa", "#910202"],
        data: [uploaded.length, econsent.length]
      }
    ]
  };

  const barDataStudy = {
    labels: ["Study1", "Study2", "Study3", "Study4", "Study5"],
    datasets: [
      {
        label: "Complete",
        backgroundColor: "#00ff00",
        borderWidth: 2,
        data: [
          study1Complete.length,
          study2Complete.length,
          study3Complete.length,
          study4Complete.length,
          study5Complete.length
        ]
      },
      {
        label: "Incomplete",
        backgroundColor: "#ff1a40",
        borderWidth: 2,
        data: [
          study1Incomplete.length,
          study2Incomplete.length,
          study3Incomplete.length,
          study4Incomplete.length,
          study5Incomplete.length
        ]
      }
    ]
  };


  useEffect(() => {
    csv("/data/mock.csv").then((data) => {
      const dataResult = data.filter((data) => !data.colums);

      const dataComplete = dataResult.filter(
        (data) => data.quiz_completion === "complete"
      );

      const dataIncomplete = dataResult.filter(
        (data) => data.quiz_completion === "incomplete"
      );

      const dataUploaded = dataResult.filter(
        (data) => data.document === "Uploaded"
      );

      const dataEconsent = dataComplete.filter(
        (data) => data.document === "eConsent"
      );

      // study complete
      const dataStudy1Complete = dataComplete.filter(
        (data) => data.study_id === "study1"
      );
      const dataStudy2Complete = dataComplete.filter(
        (data) => data.study_id === "study2"
      );
      const dataStudy3Complete = dataComplete.filter(
        (data) => data.study_id === "study3"
      );
      const dataStudy4Complete = dataComplete.filter(
        (data) => data.study_id === "study4"
      );
      const dataStudy5Complete = dataComplete.filter(
        (data) => data.study_id === "study5"
      );

      // study incomplete
      const dataStudy1Incomplete = dataIncomplete.filter(
        (data) => data.study_id === "study1"
      );
      const dataStudy2Incomplete = dataIncomplete.filter(
        (data) => data.study_id === "study2"
      );
      const dataStudy3Incomplete = dataIncomplete.filter(
        (data) => data.study_id === "study3"
      );
      const dataStudy4Incomplete = dataIncomplete.filter(
        (data) => data.study_id === "study4"
      );
      const dataStudy5Incomplete = dataIncomplete.filter(
        (data) => data.study_id === "study5"
      );

      setComplete(complete.concat(dataComplete));
      setIncomplete(incomplete.concat(dataIncomplete));
      setUploaded(uploaded.concat(dataUploaded));
      setEconsent(econsent.concat(dataEconsent));

      // complete

      setStudy1Complete(study1Complete.concat(dataStudy1Complete));
      setStudy2Complete(study2Complete.concat(dataStudy2Complete));
      setStudy3Complete(study3Complete.concat(dataStudy3Complete));
      setStudy4Complete(study4Complete.concat(dataStudy4Complete));
      setStudy5Complete(study5Complete.concat(dataStudy5Complete));

      // complete

      setStudy1Incomplete(study1Incomplete.concat(dataStudy1Incomplete));
      setStudy2Incomplete(study2Incomplete.concat(dataStudy2Incomplete));
      setStudy3Incomplete(study3Incomplete.concat(dataStudy3Incomplete));
      setStudy4Incomplete(study4Incomplete.concat(dataStudy4Incomplete));
      setStudy5Incomplete(study5Incomplete.concat(dataStudy5Incomplete));
    });
  }, []);

  return (
    <>
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
      <div style={{ width: 600, marginTop: 80, display: "flex" }}>
        <Bar
          min={0}
          data={barDataStudy}
          options={{
            title: {
              display: true,
              text: "Average complete and incomplete quiz per study",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "top"
            }
          }}
        />
      </div>
    </>
  );
}
