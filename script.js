const summaryElements = document.querySelectorAll(".summary__element");
const averageScore = document.querySelector("#average-score");
let sum = 0;


// injecting the scores from data.json
async function getScores() {
    const dataScores = await fetchData();

    for(let i = 0; i < dataScores.length; i++) {
        let category = dataScores[i].category.toLowerCase();
        let score = dataScores[i].score;
        sum += score; // Sum of all scores 
        
        summaryElements.forEach((element) => {
            if(element.id === category){
                element.querySelector("#element-score").textContent = score;
            }
        })
    }
    // Getting the average result 
    averageScore.textContent = Math.round(sum / dataScores.length);
};
// fetching the scores
async function fetchData() {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
};

window.addEventListener("DOMContentLoaded", () => {
    getScores();
})