import { setSearchFocus } from "./searchBar.js";
import { 
    buildSearchResults, 
    clearStatsLine, 
    setStatsLine } from"./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readtstatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // TODO: 3 listeners clear text


    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
    event.preventDefault();
    // TODO: delete search results
    processTheSearch();
    setSearchFocus();
};

// Procedural

const processTheSearch = async () => {
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === " ") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
};