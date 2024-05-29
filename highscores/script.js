document.addEventListener("DOMContentLoaded", function(){
    const scores = JSON.parse(localStorage.getItem("scores_data")) || [];
    scores.sort((a, b) => b.score - a.score);
    console.log(scores)
    const tbody = document.querySelector(`.leaderboard tbody`)

    for(let i=0; i < scores.length; i++){
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td> ${i + 1} </td>
        <td> ${scores[i].name}</td>
        <td> ${scores[i].score}</td>
        `
        tbody.appendChild(tr);
    }
    
})