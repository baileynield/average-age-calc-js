document.getElementById("average-age-btn").addEventListener("click", (e) => {
    const superHeroes = {
        Tony: 42,
        Peter: 18,
        Steve: 104,
        Bruce: 38,
        Thor: 1055
    }

    function averageAge(heroes) {
        let totalAge = 0;
        let numberOfAges = 0;
        for (let name in heroes) {
            totalAge += heroes[name];
            numberOfAges++;
        }
        return totalAge / numberOfAges;
    }

    const avgAge = averageAge(superHeroes);
    console.log(avgAge);
})
