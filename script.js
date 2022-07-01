function initPortfolioMenu() {
    fetch('./illustrations.json')
        .then((response) => response.json())
        .then((result) => console.log(result));
}

initPortfolioMenu();


