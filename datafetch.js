const populationData;

fetch("https://datausa.io/api/data?drilldowns=State&measures=Population")
  .catch((e) =>
    wait(500).then(
      fetch("https://datausa.io/api/data?drilldowns=State&measures=Population")
    )
  )
  .then((response) => {
    if (!response.ok) {
      return null;
    }

    let type = response.headers.get("content-type");
    if (type !== "application/json; charset=utf-8") {
      throw new TypeError("Oczekiwany format JSON. Błędny typ.");
    }

    return response.json();
  })
  .then((_jsonData) => {
    populationData = _jsonData;
    getData();
  })
  .catch((e) => {
    if (e instanceof NetworkError) {
      console.log("Błąd sieci. Sprawdz połączenie.");
    } else if (e instanceof TypeError) {
      console.log("Z serwerem dzieje się coś niedobrego!");
    } else {
      console.error(e);
    }
  });

let statTable = new Array();
function getData() {
  let _temporaryObject = populationData.data;
  for (x of _temporaryObject) {
    statTable.push(new dataObject(x.State, x.Year, x.Population));
    addElement(x);
  }
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

let _yearState = 0;
let _populationState = 0;
let _stateState = 0;

function sortByYear() {
  removeElementsByClass("nationInfo");
  removeElementsByClass("yearInfo");
  removeElementsByClass("populationInfo");
  removeElementsByClass("mainDIV");

  if (_yearState == 0) {
    statTable.sort((a, b) => a.Year - b.Year);
    _yearState = 1;
  } else if (_yearState == 1) {
    statTable.sort((a, b) => b.Year - a.Year);
    _yearState = 0;
  }

  for (x of statTable) {
    addElement(x);
  }
}

function sortByPopulation() {
  removeElementsByClass("nationInfo");
  removeElementsByClass("yearInfo");
  removeElementsByClass("populationInfo");
  removeElementsByClass("mainDIV");

  if (_populationState == 0) {
    statTable.sort((a, b) => a.Population - b.Population);
    _populationState = 1;
  } else if (_populationState == 1) {
    statTable.sort((a, b) => b.Population - a.Population);
    _populationState = 0;
  }

  for (x of statTable) {
    addElement(x);
  }
}

function sortByState() {
  removeElementsByClass("nationInfo");
  removeElementsByClass("yearInfo");
  removeElementsByClass("populationInfo");
  removeElementsByClass("mainDIV");

  if (_stateState == 0) {
    statTable.sort(function (a, b) {
      if (a.State < b.State) {
        return -1;
      }
      if (a.State > b.State) {
        return 1;
      }
    });
    _stateState = 1;
  } else if (_stateState == 1) {
    statTable.sort(function (a, b) {
      if (b.State < a.State) {
        return -1;
      }
      if (b.State > a.State) {
        return 1;
      }
    });
    _stateState = 0;
  }

  for (x of statTable) {
    addElement(x);
  }
}

function defaultSetting() {
  removeElementsByClass("nationInfo");
  removeElementsByClass("yearInfo");
  removeElementsByClass("populationInfo");
  removeElementsByClass("mainDIV");

  statTable.sort(function (a, b) {
    if (a.State < b.State) {
      return -1;
    }
    if (a.State > b.State) {
      return 1;
    }
  });
  _stateState = 1;
  statTable.sort((a, b) => b.Year - a.Year);
  _yearState = 0;
  for (x of statTable) {
    addElement(x);
  }
}

function dataObject(State, Year, Population) {
  this.State = State;
  this.Year = Year;
  this.Population = Population;
}

function addElement(x) {
  let  = document.createElement("div");
  mainDIV.classList.add("mainDIV");
  mainDIV.classList.add("bg-blur");

  let nationDIV = document.createElement("div");
  nationDIV.className = "nationInfo";
  nationDIV.innerHTML = x.State;
  mainDIV.appendChild(nationDIV);

  let yearDIV = document.createElement("div");
  yearDIV.className = "yearInfo";
  yearDIV.innerHTML = x.Year;
  mainDIV.appendChild(yearDIV);

  let populationDIV = document.createElement("div");
  populationDIV.className = "populationInfo";
  populationDIV.innerHTML = "Population: " + x.Population;
  mainDIV.appendChild(populationDIV);
  document.getElementById("tabela").appendChild(mainDIV);
}
