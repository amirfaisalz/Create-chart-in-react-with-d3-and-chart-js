import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { Pie, Bar } from "react-chartjs-2";

export default function App() {
  const [allQuiz, setAllQuiz] = useState([]);
  const [allQuizFiltered, setAllQuizFiltered] = useState([]);
  const [quizCompletion, setQuizCompletion] = useState([]);
  const [document, setDocument] = useState([]);
  const [studyId, setStudyId] = useState([]);
  const [country, setCountry] = useState([]);
  const [colors] = useState(["red", "blue", "pink", "green"]);
  const [colorHovers] = useState(["#800000", "#000080", "#99003d", "#004d1a"]);

  const pieDataComplete = {
    labels: quizCompletion,
    datasets: [
      {
        backgroundColor: quizCompletion.map((el, i) => {
          return colors[i]
        }),
        hoverBackgroundColor: quizCompletion.map((el, i) => {
          return colorHovers[i]
        }),
        data: quizCompletion.map((el) => {
          return allQuiz.filter((el2) => el2.quiz_completion === el).length;
        })
      }
    ]
  };

  const pieDataDocument = {
    labels: document,
    datasets: [
      {
        backgroundColor: document.map((el, i) => {
          return colors[i]
        }),
        hoverBackgroundColor: document.map((el, i) => {
          return colorHovers[i]
        }),
        data: document.map((el) => {
          return allQuiz.filter((el2) => el2.document === el).length;
        })
      }
    ]
  };

  const barDataStudyBeneran = {
    labels: studyId,
    datasets: [
      ...quizCompletion.map((el, i) => {
        return {
          label: el,
          backgroundColor: colors[i],
          borderWidth: 2,
          data: studyId.map((studId) => {
            return allQuizFiltered.filter(
              (quiz) => quiz.quiz_completion === el && quiz.study_id === studId
            ).length;
          })
        };
      })
    ]
  };

  const filterStudyByCountry = (value) => {
    if (value === "all") {
      setAllQuizFiltered([...allQuiz]);
    } else {
      setAllQuizFiltered([...allQuiz.filter((quiz) => quiz.country === value)]);
    }
  };

  const filterBtn = (e, value) => {
    e.preventDefault();
    filterStudyByCountry(value);
  };

  useEffect(() => {
    csv("/data/mock.csv").then((data) => {

      const dataResult = data.filter((data) => !data.columns);
      setAllQuiz(dataResult);
      setAllQuizFiltered(dataResult);

      // quiz completion
      const quizCompletion = Array.from(
        new Set(
          dataResult.map((el) => {
            return el.quiz_completion;
          })
        )
      );
      setQuizCompletion(quizCompletion.sort());

      // document
      const documentData = Array.from(
        new Set(
          dataResult.map((el) => {
            return el.document;
          })
        )
      );
      setDocument(documentData.sort());

      // study_id
      const studyIdData = Array.from(
        new Set(
          dataResult.map((el) => {
            return el.study_id;
          })
        )
      );
      setStudyId(studyIdData.sort());

      // country
      const countryData = Array.from(
        new Set(
          dataResult.map((el) => {
            return el.country;
          })
        )
      );
      setCountry(countryData.sort());
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
      <div style={{ width: 600, marginTop: 50, display: "flex" }}>
        <div>
          <select onChange={(e) => filterBtn(e, e.target.value)}>
          <option value={"all"}>ALL COUNTRY</option>
            {country
              .map((item, i) => (
                <option key={i} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
          </select>
        </div>
        <Bar
          min={0}
          data={barDataStudyBeneran}
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
