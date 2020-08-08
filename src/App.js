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

  // study complete filtered
  const [study1CompleteFiltered, setStudy1CompleteFiltered] = useState([]);
  const [study2CompleteFiltered, setStudy2CompleteFiltered] = useState([]);
  const [study3CompleteFiltered, setStudy3CompleteFiltered] = useState([]);
  const [study4CompleteFiltered, setStudy4CompleteFiltered] = useState([]);
  const [study5CompleteFiltered, setStudy5CompleteFiltered] = useState([]);

  // study incomplete
  const [study1Incomplete, setStudy1Incomplete] = useState([]);
  const [study2Incomplete, setStudy2Incomplete] = useState([]);
  const [study3Incomplete, setStudy3Incomplete] = useState([]);
  const [study4Incomplete, setStudy4Incomplete] = useState([]);
  const [study5Incomplete, setStudy5Incomplete] = useState([]);

  // study incomplete filtered
  const [study1IncompleteFiltered, setStudy1IncompleteFiltered] = useState([]);
  const [study2IncompleteFiltered, setStudy2IncompleteFiltered] = useState([]);
  const [study3IncompleteFiltered, setStudy3IncompleteFiltered] = useState([]);
  const [study4IncompleteFiltered, setStudy4IncompleteFiltered] = useState([]);
  const [study5IncompleteFiltered, setStudy5IncompleteFiltered] = useState([]);

  // select-option
  const [countries] = useState([
    { label: "--- Filter by Country ---", value: "" },
    { label: "all country", value: "all" },
    { label: "german", value: "german" },
    { label: "poland", value: "poland" },
    { label: "russia", value: "russia" },
    { label: "uk", value: "uk" },
    { label: "usa", value: "usa" }
  ]);
  const [value, setValue] = useState("");

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
          study1CompleteFiltered.length,
          study2CompleteFiltered.length,
          study3CompleteFiltered.length,
          study4CompleteFiltered.length,
          study5CompleteFiltered.length
        ]
      },
      {
        label: "Incomplete",
        backgroundColor: "#ff1a40",
        borderWidth: 2,
        data: [
          study1IncompleteFiltered.length,
          study2IncompleteFiltered.length,
          study3IncompleteFiltered.length,
          study4IncompleteFiltered.length,
          study5IncompleteFiltered.length
        ]
      }
    ]
  };

  // function filtered
  const filterStudyByCountry = (value) => {
    switch (value) {
      case "all":
        //complete
        setStudy1CompleteFiltered(study1Complete.slice());
        setStudy2CompleteFiltered(study2Complete.slice());
        setStudy3CompleteFiltered(study3Complete.slice());
        setStudy4CompleteFiltered(study4Complete.slice());
        setStudy5CompleteFiltered(study5Complete.slice());
        // incomplete
        setStudy1IncompleteFiltered(study1Incomplete.slice());
        setStudy2IncompleteFiltered(study2Incomplete.slice());
        setStudy3IncompleteFiltered(study3Incomplete.slice());
        setStudy4IncompleteFiltered(study4Incomplete.slice());
        setStudy5IncompleteFiltered(study5Incomplete.slice());
        break;

      case "german":
        // complete
        const study1CompleteFilteredGerman = study1Complete.filter(
          (data) => data.country === "german"
        );
        const study2CompleteFilteredGerman = study2Complete.filter(
          (data) => data.country === "german"
        );
        const study3CompleteFilteredGerman = study3Complete.filter(
          (data) => data.country === "german"
        );
        const study4CompleteFilteredGerman = study4Complete.filter(
          (data) => data.country === "german"
        );
        const study5CompleteFilteredGerman = study5Complete.filter(
          (data) => data.country === "german"
        );
        setStudy1CompleteFiltered(study1CompleteFilteredGerman);
        setStudy2CompleteFiltered(study2CompleteFilteredGerman);
        setStudy3CompleteFiltered(study3CompleteFilteredGerman);
        setStudy4CompleteFiltered(study4CompleteFilteredGerman);
        setStudy5CompleteFiltered(study5CompleteFilteredGerman);
        // incomplete
        const study1IncompleteFilteredGerman = study1Incomplete.filter(
          (data) => data.country === "german"
        );
        const study2IncompleteFilteredGerman = study2Incomplete.filter(
          (data) => data.country === "german"
        );
        const study3IncompleteFilteredGerman = study3Incomplete.filter(
          (data) => data.country === "german"
        );
        const study4IncompleteFilteredGerman = study4Incomplete.filter(
          (data) => data.country === "german"
        );
        const study5IncompleteFilteredGerman = study5Incomplete.filter(
          (data) => data.country === "german"
        );
        setStudy1IncompleteFiltered(study1IncompleteFilteredGerman);
        setStudy2IncompleteFiltered(study2IncompleteFilteredGerman);
        setStudy3IncompleteFiltered(study3IncompleteFilteredGerman);
        setStudy4IncompleteFiltered(study4IncompleteFilteredGerman);
        setStudy5IncompleteFiltered(study5IncompleteFilteredGerman);
        break;

      case "poland":
        // complete
        const study1CompleteFilteredPoland = study1Complete.filter(
          (data) => data.country === "poland"
        );
        const study2CompleteFilteredPoland = study2Complete.filter(
          (data) => data.country === "poland"
        );
        const study3CompleteFilteredPoland = study3Complete.filter(
          (data) => data.country === "poland"
        );
        const study4CompleteFilteredPoland = study4Complete.filter(
          (data) => data.country === "poland"
        );
        const study5CompleteFilteredPoland = study5Complete.filter(
          (data) => data.country === "poland"
        );
        setStudy1CompleteFiltered(study1CompleteFilteredPoland);
        setStudy2CompleteFiltered(study2CompleteFilteredPoland);
        setStudy3CompleteFiltered(study3CompleteFilteredPoland);
        setStudy4CompleteFiltered(study4CompleteFilteredPoland);
        setStudy5CompleteFiltered(study5CompleteFilteredPoland);
        // incomplete
        const study1IncompleteFilteredPoland = study1Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study2IncompleteFilteredPoland = study2Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study3IncompleteFilteredPoland = study3Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study4IncompleteFilteredPoland = study4Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study5IncompleteFilteredPoland = study5Incomplete.filter(
          (data) => data.country === "poland"
        );
        setStudy1IncompleteFiltered(study1IncompleteFilteredPoland);
        setStudy2IncompleteFiltered(study2IncompleteFilteredPoland);
        setStudy3IncompleteFiltered(study3IncompleteFilteredPoland);
        setStudy4IncompleteFiltered(study4IncompleteFilteredPoland);
        setStudy5IncompleteFiltered(study5IncompleteFilteredPoland);
        break;

      case "russia":
        // complete
        const study1CompleteFilteredRussia = study1Complete.filter(
          (data) => data.country === "russia"
        );
        const study2CompleteFilteredRussia = study2Complete.filter(
          (data) => data.country === "russia"
        );
        const study3CompleteFilteredRussia = study3Complete.filter(
          (data) => data.country === "russia"
        );
        const study4CompleteFilteredRussia = study4Complete.filter(
          (data) => data.country === "russia"
        );
        const study5CompleteFilteredRussia = study5Complete.filter(
          (data) => data.country === "russia"
        );
        setStudy1CompleteFiltered(study1CompleteFilteredRussia);
        setStudy2CompleteFiltered(study2CompleteFilteredRussia);
        setStudy3CompleteFiltered(study3CompleteFilteredRussia);
        setStudy4CompleteFiltered(study4CompleteFilteredRussia);
        setStudy5CompleteFiltered(study5CompleteFilteredRussia);
        // incomplete
        const study1IncompleteFilteredRussia = study1Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study2IncompleteFilteredRussia = study2Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study3IncompleteFilteredRussia = study3Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study4IncompleteFilteredRussia = study4Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study5IncompleteFilteredRussia = study5Incomplete.filter(
          (data) => data.country === "russia"
        );
        setStudy1IncompleteFiltered(study1IncompleteFilteredRussia);
        setStudy2IncompleteFiltered(study2IncompleteFilteredRussia);
        setStudy3IncompleteFiltered(study3IncompleteFilteredRussia);
        setStudy4IncompleteFiltered(study4IncompleteFilteredRussia);
        setStudy5IncompleteFiltered(study5IncompleteFilteredRussia);
        break;

      case "uk":
        // complete
        const study1CompleteFilteredUk = study1Complete.filter(
          (data) => data.country === "uk"
        );
        const study2CompleteFilteredUk = study2Complete.filter(
          (data) => data.country === "uk"
        );
        const study3CompleteFilteredUk = study3Complete.filter(
          (data) => data.country === "uk"
        );
        const study4CompleteFilteredUk = study4Complete.filter(
          (data) => data.country === "uk"
        );
        const study5CompleteFilteredUk = study5Complete.filter(
          (data) => data.country === "uk"
        );
        setStudy1CompleteFiltered(study1CompleteFilteredUk);
        setStudy2CompleteFiltered(study2CompleteFilteredUk);
        setStudy3CompleteFiltered(study3CompleteFilteredUk);
        setStudy4CompleteFiltered(study4CompleteFilteredUk);
        setStudy5CompleteFiltered(study5CompleteFilteredUk);
        // incomplete
        const study1IncompleteFilteredUk = study1Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study2IncompleteFilteredUk = study2Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study3IncompleteFilteredUk = study3Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study4IncompleteFilteredUk = study4Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study5IncompleteFilteredUk = study5Incomplete.filter(
          (data) => data.country === "uk"
        );
        setStudy1IncompleteFiltered(study1IncompleteFilteredUk);
        setStudy2IncompleteFiltered(study2IncompleteFilteredUk);
        setStudy3IncompleteFiltered(study3IncompleteFilteredUk);
        setStudy4IncompleteFiltered(study4IncompleteFilteredUk);
        setStudy5IncompleteFiltered(study5IncompleteFilteredUk);
        break;

      case "usa":
        // complete
        const study1CompleteFilteredUsa = study1Complete.filter(
          (data) => data.country === "usa"
        );
        const study2CompleteFilteredUsa = study2Complete.filter(
          (data) => data.country === "usa"
        );
        const study3CompleteFilteredUsa = study3Complete.filter(
          (data) => data.country === "usa"
        );
        const study4CompleteFilteredUsa = study4Complete.filter(
          (data) => data.country === "usa"
        );
        const study5CompleteFilteredUsa = study5Complete.filter(
          (data) => data.country === "usa"
        );
        setStudy1CompleteFiltered(study1CompleteFilteredUsa);
        setStudy2CompleteFiltered(study2CompleteFilteredUsa);
        setStudy3CompleteFiltered(study3CompleteFilteredUsa);
        setStudy4CompleteFiltered(study4CompleteFilteredUsa);
        setStudy5CompleteFiltered(study5CompleteFilteredUsa);
        // incomplete
        const study1IncompleteFilteredUsa = study1Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study2IncompleteFilteredUsa = study2Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study3IncompleteFilteredUsa = study3Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study4IncompleteFilteredUsa = study4Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study5IncompleteFilteredUsa = study5Incomplete.filter(
          (data) => data.country === "usa"
        );
        setStudy1IncompleteFiltered(study1IncompleteFilteredUsa);
        setStudy2IncompleteFiltered(study2IncompleteFilteredUsa);
        setStudy3IncompleteFiltered(study3IncompleteFilteredUsa);
        setStudy4IncompleteFiltered(study4IncompleteFilteredUsa);
        setStudy5IncompleteFiltered(study5IncompleteFilteredUsa);
        break;
    }
  };

  const filterBtn = (e, value) => {
    e.preventDefault();
    filterStudyByCountry(value);
  };

  useEffect(() => {
    csv("/data/mock.csv").then((data) => {
      const dataResult = data.filter((data) => !data.columns);

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

      // study complete
      setStudy1Complete(study1Complete.concat(dataStudy1Complete));
      setStudy2Complete(study2Complete.concat(dataStudy2Complete));
      setStudy3Complete(study3Complete.concat(dataStudy3Complete));
      setStudy4Complete(study4Complete.concat(dataStudy4Complete));
      setStudy5Complete(study5Complete.concat(dataStudy5Complete));

      // study complete filtered
      setStudy1CompleteFiltered(
        study1CompleteFiltered.concat(dataStudy1Complete)
      );
      setStudy2CompleteFiltered(
        study2CompleteFiltered.concat(dataStudy2Complete)
      );
      setStudy3CompleteFiltered(
        study3CompleteFiltered.concat(dataStudy3Complete)
      );
      setStudy4CompleteFiltered(
        study4CompleteFiltered.concat(dataStudy4Complete)
      );
      setStudy5CompleteFiltered(
        study5CompleteFiltered.concat(dataStudy5Complete)
      );

      // study incomplete
      setStudy1Incomplete(study1Incomplete.concat(dataStudy1Incomplete));
      setStudy2Incomplete(study2Incomplete.concat(dataStudy2Incomplete));
      setStudy3Incomplete(study3Incomplete.concat(dataStudy3Incomplete));
      setStudy4Incomplete(study4Incomplete.concat(dataStudy4Incomplete));
      setStudy5Incomplete(study5Incomplete.concat(dataStudy5Incomplete));

      // study incomplete filtered
      setStudy1IncompleteFiltered(
        study1IncompleteFiltered.concat(dataStudy1Incomplete)
      );
      setStudy2IncompleteFiltered(
        study2IncompleteFiltered.concat(dataStudy2Incomplete)
      );
      setStudy3IncompleteFiltered(
        study3IncompleteFiltered.concat(dataStudy3Incomplete)
      );
      setStudy4IncompleteFiltered(
        study4IncompleteFiltered.concat(dataStudy4Incomplete)
      );
      setStudy5IncompleteFiltered(
        study5IncompleteFiltered.concat(dataStudy5Incomplete)
      );
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
      <div style={{ width: 600, marginTop: 50 }}>
        <div>
          <select onChange={(e) => setValue(e.target.value)}>
            {countries.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label.toUpperCase()}
              </option>
            ))}
          </select>
          <button style={{marginLeft: 10}} onClick={(e) => filterBtn(e, value)}>Filter</button>
        </div>
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
