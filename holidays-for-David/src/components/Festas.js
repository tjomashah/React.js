import React from "react";

class Holidays extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let data = [];
    const HolidaysFactory = {
      getYearsUntil(from, to = 0, callback) {
        while (from <= to) {
          callback(from);
          from++;
        }
      },
      createHolidaysPeriods(holidays = [], from, to) {
        let holidaysDates = Object.keys(holidays);
        console.log(holidaysDates);

        this.getYearsUntil(from, to, function (year) {
          for (let i = 0; i < holidaysDates.length; i++) {
            const monthDay = holidaysDates[i];
            console.log(monthDay);

            // const item = [i + 1, holidays[monthDay], `${year}-${monthDay}`];
            const item = [`"${holidays[monthDay]}";` + `"${year}-${monthDay}"`];
            data.push(item);
          }
        });
        console.log(data);
      },
    };

    // example
    const from = 2021;
    const to = 2121;
    const HOLIDAYS = {
      "01-06": "Dia de Reis",
      "01-01": "Cap d'Any",
      "05-01": "Dia del Treballador",
      "06-24": "Sant Joan",
      "09-11": "Diada Nacional de Catalunya",
      "10-12": "Festa Nacional d'Espanya",
      "11-01": "Tots Sants",
      "12-06": "Dia de la Constitució",
      "12-08": "La Immaculada",
      "12-25": "Nadal",
      "12-26": "Sant Esteve",
    };
    const holidaysPeriod = HolidaysFactory.createHolidaysPeriods(
      HOLIDAYS,
      from,
      to
    );

    this.setState({ data });
  }

  parseJSon() {
    const tableHeader = [["Festas nom;" + "Data"]];
    let auxData = this.state.data;

    for (let i = 0; i < tableHeader.length; i++) {
      auxData.unshift(tableHeader[i].join(","));
    }
    let csvString = auxData.join("%0A");
    console.log(csvString);

    let a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_blank";
    a.download = "Festas.csv";
    document.body.appendChild(a);
    a.click();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <button
          className="btn btn-dark"
          onClick={() => {
            this.parseJSon();
          }}
        >
          Exportar a csv
        </button>

        <table
          className="table table-bordered table-hover"
          style={{ width: 800, textAlign: "center", marginTop: 30 }}
        >
          <thead>
            <tr>
              <th scope="col">Festas nom</th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((record, i) => {
              return (
                <tr key={i}>
                  {Object.keys(record).map((row, key) => {
                    return <td key={key}>{record[row]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Holidays;