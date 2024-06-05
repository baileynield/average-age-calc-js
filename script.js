document.getElementById("average-age-btn").addEventListener("click", (e) => {
    const superHeroes = {
        Tony: 42,
        Peter: 18,
        Steve: 104,
        Bruce: 38,
        Thor: 1055
    }

    const averageAge = () => {
        let totalAge = 0;
        let numberOfAges = 0;
        for (let name in superHeroes) {
            totalAge += superHeroes[name];
            numberOfAges++;
        }
        return totalAge / numberOfAges;
    }

    const avgAge = averageAge();
    console.log(avgAge);
})
