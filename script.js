const summaryElements = document.querySelectorAll(".summary__element");

// injecting the scores from data.json
async function getScores() {
    const dataScores = await fetchData();

    for(let i = 0; i < dataScores.length; i++) {
        let category = dataScores[i].category.toLowerCase();
        let score = dataScores[i].score;
        
        console.log(category)
        console.log(score)
        
        summaryElements.forEach((element) => {
            if(element.id === category){
                element.querySelector("#element-score").textContent = score;
            }
        })
    }
};
// Fetching the scores
async function fetchData() {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
};

window.addEventListener("DOMContentLoaded", () => {
    getScores();
})