import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { Pie, Bar } from "react-chartjs-2";

export default function App() {
  const [complete, setComplete] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [uploaded, setUploaded] = useState([]);
  const [econsent, setEconsent] = useState([]);

  // study complete
  const [studyComplete, setStudyComplete] = useState({
    study1Complete: [],
    study2Complete: [],
    study3Complete: [],
    study4Complete: [],
    study5Complete: []
  });

  // study complete filtered
  const [studyCompleteFiltered, setStudyCompleteFiltered] = useState({
    study1CompleteFiltered: [],
    study2CompleteFiltered: [],
    study3CompleteFiltered: [],
    study4CompleteFiltered: [],
    study5CompleteFiltered: []
  });

  // study incomplete
  const [studyIncomplete, setStudyIncomplete] = useState({
    study1Incomplete: [],
    study2Incomplete: [],
    study3Incomplete: [],
    study4Incomplete: [],
    study5Incomplete: []
  });

  // study incomplete filtered
  const [studyIncompleteFiltered, setStudyIncompleteFiltered] = useState({
    study1IncompleteFiltered: [],
    study2IncompleteFiltered: [],
    study3IncompleteFiltered: [],
    study4IncompleteFiltered: [],
    study5IncompleteFiltered: []
  });

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

  const pieDataComplete = {
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
          studyCompleteFiltered.study1CompleteFiltered.length,
          studyCompleteFiltered.study2CompleteFiltered.length,
          studyCompleteFiltered.study3CompleteFiltered.length,
          studyCompleteFiltered.study4CompleteFiltered.length,
          studyCompleteFiltered.study5CompleteFiltered.length
        ]
      },
      {
        label: "Incomplete",
        backgroundColor: "#ff1a40",
        borderWidth: 2,
        data: [
          studyIncompleteFiltered.study1IncompleteFiltered.length,
          studyIncompleteFiltered.study2IncompleteFiltered.length,
          studyIncompleteFiltered.study3IncompleteFiltered.length,
          studyIncompleteFiltered.study4IncompleteFiltered.length,
          studyIncompleteFiltered.study5IncompleteFiltered.length
        ]
      }
    ]
  };

  // function filtered
  const filterStudyByCountry = (value) => {
    switch (value) {
      case "all":
        //complete
        setStudyCompleteFiltered({
          study1CompleteFiltered: studyComplete.study1Complete.slice(),
          study2CompleteFiltered: studyComplete.study2Complete.slice(),
          study3CompleteFiltered: studyComplete.study3Complete.slice(),
          study4CompleteFiltered: studyComplete.study4Complete.slice(),
          study5CompleteFiltered: studyComplete.study5Complete.slice()
        })
        
        // incomplete
        setStudyIncompleteFiltered({
          study1IncompleteFiltered: studyIncomplete.study1Incomplete.slice(),
          study2IncompleteFiltered: studyIncomplete.study2Incomplete.slice(),
          study3IncompleteFiltered: studyIncomplete.study3Incomplete.slice(),
          study4IncompleteFiltered: studyIncomplete.study4Incomplete.slice(),
          study5IncompleteFiltered: studyIncomplete.study5Incomplete.slice()
        })
        break;

      case "german":
        // complete
        const study1CompleteFilteredGerman = studyComplete.study1Complete.filter(
          (data) => data.country === "german"
        );
        const study2CompleteFilteredGerman = studyComplete.study2Complete.filter(
          (data) => data.country === "german"
        );
        const study3CompleteFilteredGerman = studyComplete.study3Complete.filter(
          (data) => data.country === "german"
        );
        const study4CompleteFilteredGerman = studyComplete.study4Complete.filter(
          (data) => data.country === "german"
        );
        const study5CompleteFilteredGerman = studyComplete.study5Complete.filter(
          (data) => data.country === "german"
        );

        setStudyCompleteFiltered({
          study1CompleteFiltered: study1CompleteFilteredGerman,
          study2CompleteFiltered: study2CompleteFilteredGerman,
          study3CompleteFiltered: study3CompleteFilteredGerman,
          study4CompleteFiltered: study4CompleteFilteredGerman,
          study5CompleteFiltered: study5CompleteFilteredGerman,
        })

        // incomplete
        const study1IncompleteFilteredGerman = studyIncomplete.study1Incomplete.filter(
          (data) => data.country === "german"
        );
        const study2IncompleteFilteredGerman = studyIncomplete.study2Incomplete.filter(
          (data) => data.country === "german"
        );
        const study3IncompleteFilteredGerman = studyIncomplete.study3Incomplete.filter(
          (data) => data.country === "german"
        );
        const study4IncompleteFilteredGerman = studyIncomplete.study4Incomplete.filter(
          (data) => data.country === "german"
        );
        const study5IncompleteFilteredGerman = studyIncomplete.study5Incomplete.filter(
          (data) => data.country === "german"
        );

        setStudyIncompleteFiltered({
          study1IncompleteFiltered: study1IncompleteFilteredGerman,
          study2IncompleteFiltered: study2IncompleteFilteredGerman,
          study3IncompleteFiltered: study3IncompleteFilteredGerman,
          study4IncompleteFiltered: study4IncompleteFilteredGerman,
          study5IncompleteFiltered: study5IncompleteFilteredGerman
        })
        break;

      case "poland":
        // complete
        const study1CompleteFilteredPoland = studyComplete.study1Complete.filter(
          (data) => data.country === "poland"
        );
        const study2CompleteFilteredPoland = studyComplete.study2Complete.filter(
          (data) => data.country === "poland"
        );
        const study3CompleteFilteredPoland = studyComplete.study3Complete.filter(
          (data) => data.country === "poland"
        );
        const study4CompleteFilteredPoland = studyComplete.study4Complete.filter(
          (data) => data.country === "poland"
        );
        const study5CompleteFilteredPoland = studyComplete.study5Complete.filter(
          (data) => data.country === "poland"
        );

        setStudyCompleteFiltered({
          study1CompleteFiltered: study1CompleteFilteredPoland,
          study2CompleteFiltered: study2CompleteFilteredPoland,
          study3CompleteFiltered: study3CompleteFilteredPoland,
          study4CompleteFiltered: study4CompleteFilteredPoland,
          study5CompleteFiltered: study5CompleteFilteredPoland,
        })

        // incomplete
        const study1IncompleteFilteredPoland = studyIncomplete.study1Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study2IncompleteFilteredPoland = studyIncomplete.study2Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study3IncompleteFilteredPoland = studyIncomplete.study3Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study4IncompleteFilteredPoland = studyIncomplete.study4Incomplete.filter(
          (data) => data.country === "poland"
        );
        const study5IncompleteFilteredPoland = studyIncomplete.study5Incomplete.filter(
          (data) => data.country === "poland"
        );
        setStudyIncompleteFiltered({
          study1IncompleteFiltered: study1IncompleteFilteredPoland,
          study2IncompleteFiltered: study2IncompleteFilteredPoland,
          study3IncompleteFiltered: study3IncompleteFilteredPoland,
          study4IncompleteFiltered: study4IncompleteFilteredPoland,
          study5IncompleteFiltered: study5IncompleteFilteredPoland
        })
        break;

      case "russia":
        // complete
        const study1CompleteFilteredRussia = studyComplete.study1Complete.filter(
          (data) => data.country === "russia"
        );
        const study2CompleteFilteredRussia = studyComplete.study2Complete.filter(
          (data) => data.country === "russia"
        );
        const study3CompleteFilteredRussia = studyComplete.study3Complete.filter(
          (data) => data.country === "russia"
        );
        const study4CompleteFilteredRussia = studyComplete.study4Complete.filter(
          (data) => data.country === "russia"
        );
        const study5CompleteFilteredRussia = studyComplete.study5Complete.filter(
          (data) => data.country === "russia"
        );

        setStudyCompleteFiltered({
          study1CompleteFiltered: study1CompleteFilteredRussia,
          study2CompleteFiltered: study2CompleteFilteredRussia,
          study3CompleteFiltered: study3CompleteFilteredRussia,
          study4CompleteFiltered: study4CompleteFilteredRussia,
          study5CompleteFiltered: study5CompleteFilteredRussia,
        })

        // incomplete
        const study1IncompleteFilteredRussia = studyIncomplete.study1Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study2IncompleteFilteredRussia = studyIncomplete.study2Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study3IncompleteFilteredRussia = studyIncomplete.study3Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study4IncompleteFilteredRussia = studyIncomplete.study4Incomplete.filter(
          (data) => data.country === "russia"
        );
        const study5IncompleteFilteredRussia = studyIncomplete.study5Incomplete.filter(
          (data) => data.country === "russia"
        );

        setStudyIncompleteFiltered({
          study1IncompleteFiltered: study1IncompleteFilteredRussia,
          study2IncompleteFiltered: study2IncompleteFilteredRussia,
          study3IncompleteFiltered: study3IncompleteFilteredRussia,
          study4IncompleteFiltered: study4IncompleteFilteredRussia,
          study5IncompleteFiltered: study5IncompleteFilteredRussia
        })
        break;

      case "uk":
        // complete
        const study1CompleteFilteredUk = studyComplete.study1Complete.filter(
          (data) => data.country === "uk"
        );
        const study2CompleteFilteredUk = studyComplete.study2Complete.filter(
          (data) => data.country === "uk"
        );
        const study3CompleteFilteredUk = studyComplete.study3Complete.filter(
          (data) => data.country === "uk"
        );
        const study4CompleteFilteredUk = studyComplete.study4Complete.filter(
          (data) => data.country === "uk"
        );
        const study5CompleteFilteredUk = studyComplete.study5Complete.filter(
          (data) => data.country === "uk"
        );

        setStudyCompleteFiltered({
          study1CompleteFiltered: study1CompleteFilteredUk,
          study2CompleteFiltered: study2CompleteFilteredUk,
          study3CompleteFiltered: study3CompleteFilteredUk,
          study4CompleteFiltered: study4CompleteFilteredUk,
          study5CompleteFiltered: study5CompleteFilteredUk,
        })

        // incomplete
        const study1IncompleteFilteredUk = studyIncomplete.study1Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study2IncompleteFilteredUk = studyIncomplete.study2Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study3IncompleteFilteredUk = studyIncomplete.study3Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study4IncompleteFilteredUk = studyIncomplete.study4Incomplete.filter(
          (data) => data.country === "uk"
        );
        const study5IncompleteFilteredUk = studyIncomplete.study5Incomplete.filter(
          (data) => data.country === "uk"
        );

        setStudyIncompleteFiltered({
          study1IncompleteFiltered: study1IncompleteFilteredUk,
          study2IncompleteFiltered: study2IncompleteFilteredUk,
          study3IncompleteFiltered: study3IncompleteFilteredUk,
          study4IncompleteFiltered: study4IncompleteFilteredUk,
          study5IncompleteFiltered: study5IncompleteFilteredUk
        })
        break;

      case "usa":
        // complete
        const study1CompleteFilteredUsa = studyComplete.study1Complete.filter(
          (data) => data.country === "usa"
        );
        const study2CompleteFilteredUsa = studyComplete.study2Complete.filter(
          (data) => data.country === "usa"
        );
        const study3CompleteFilteredUsa = studyComplete.study3Complete.filter(
          (data) => data.country === "usa"
        );
        const study4CompleteFilteredUsa = studyComplete.study4Complete.filter(
          (data) => data.country === "usa"
        );
        const study5CompleteFilteredUsa = studyComplete.study5Complete.filter(
          (data) => data.country === "usa"
        );
     
        setStudyCompleteFiltered({
          study1CompleteFiltered: study1CompleteFilteredUsa,
          study2CompleteFiltered: study2CompleteFilteredUsa,
          study3CompleteFiltered: study3CompleteFilteredUsa,
          study4CompleteFiltered: study4CompleteFilteredUsa,
          study5CompleteFiltered: study5CompleteFilteredUsa,
        })

        // incomplete
        const study1IncompleteFilteredUsa = studyIncomplete.study1Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study2IncompleteFilteredUsa = studyIncomplete.study2Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study3IncompleteFilteredUsa = studyIncomplete.study3Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study4IncompleteFilteredUsa = studyIncomplete.study4Incomplete.filter(
          (data) => data.country === "usa"
        );
        const study5IncompleteFilteredUsa = studyIncomplete.study5Incomplete.filter(
          (data) => data.country === "usa"
        );

        setStudyIncompleteFiltered({
          study1IncompleteFiltered: study1IncompleteFilteredUsa,
          study2IncompleteFiltered: study2IncompleteFilteredUsa,
          study3IncompleteFiltered: study3IncompleteFilteredUsa,
          study4IncompleteFiltered: study4IncompleteFilteredUsa,
          study5IncompleteFiltered: study5IncompleteFilteredUsa
        })
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

      setComplete(complete.concat(dataComplete));
      setIncomplete(incomplete.concat(dataIncomplete));
      setUploaded(uploaded.concat(dataUploaded));
      setEconsent(econsent.concat(dataEconsent));

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

      setStudyComplete({
        study1Complete: studyComplete.study1Complete.concat(dataStudy1Complete),
        study2Complete: studyComplete.study2Complete.concat(dataStudy2Complete),
        study3Complete: studyComplete.study3Complete.concat(dataStudy3Complete),
        study4Complete: studyComplete.study4Complete.concat(dataStudy4Complete),
        study5Complete: studyComplete.study5Complete.concat(dataStudy5Complete)
      });

      // study complete filtered
      setStudyCompleteFiltered({
        study1CompleteFiltered: studyCompleteFiltered.study1CompleteFiltered.concat(
          dataStudy1Complete
        ),
        study2CompleteFiltered: studyCompleteFiltered.study2CompleteFiltered.concat(
          dataStudy2Complete
        ),
        study3CompleteFiltered: studyCompleteFiltered.study3CompleteFiltered.concat(
          dataStudy3Complete
        ),
        study4CompleteFiltered: studyCompleteFiltered.study4CompleteFiltered.concat(
          dataStudy4Complete
        ),
        study5CompleteFiltered: studyCompleteFiltered.study5CompleteFiltered.concat(
          dataStudy5Complete
        )
      });

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

      setStudyIncomplete({
        study1Incomplete: studyIncomplete.study1Incomplete.concat(dataStudy1Incomplete),
        study2Incomplete: studyIncomplete.study2Incomplete.concat(dataStudy2Incomplete),
        study3Incomplete: studyIncomplete.study3Incomplete.concat(dataStudy3Incomplete),
        study4Incomplete: studyIncomplete.study4Incomplete.concat(dataStudy4Incomplete),
        study5Incomplete: studyIncomplete.study5Incomplete.concat(dataStudy5Incomplete)
      });

      // study incomplete filtered
      setStudyIncompleteFiltered({
        study1IncompleteFiltered: studyIncompleteFiltered.study1IncompleteFiltered.concat(
          dataStudy1Incomplete
        ),
        study2IncompleteFiltered: studyIncompleteFiltered.study2IncompleteFiltered.concat(
          dataStudy2Incomplete
        ),
        study3IncompleteFiltered: studyIncompleteFiltered.study3IncompleteFiltered.concat(
          dataStudy3Incomplete
        ),
        study4IncompleteFiltered: studyIncompleteFiltered.study4IncompleteFiltered.concat(
          dataStudy4Incomplete
        ),
        study5IncompleteFiltered: studyIncompleteFiltered.study5IncompleteFiltered.concat(
          dataStudy5Incomplete
        )
      });
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div style={{ width: 600, display: "flex" }}>
        <Pie
          data={pieDataComplete}
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
          <select onChange={(e) => filterBtn(e, e.target.value)}>
            {countries.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label.toUpperCase()}
              </option>
            ))}
          </select>
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
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    </>
  );
}
