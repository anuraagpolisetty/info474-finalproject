(function() {

    const width = 960;
    const height = 500;
    let statesLivedData = []
    let citiesLivedData = [];
    let statesGeoJSON = [];
    window.onload = function() {

        d3.csv("data/cities-lived.csv")
        .then((data) => {
            citiesLivedData = data;
            loadStatesLivedData();
        })

    }

    function loadStatesLivedData() {
        d3.csv("data/stateslived.csv")
        .then((data) => {
            statesLivedData = data;
            loadGeoJSON();
        })
    }

    function loadGeoJSON() {
        d3.json("data/us-states.json")
        .then((data) => {
            statesGeoJSON = data;
            loadGeoJSON();
            makeMap();
        })
    }

    function makeMap() {
        console.log(statesLivedData);
        console.log(citiesLivedData);
        console.log(statesGeoJSON);
    }
})();