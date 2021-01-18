const currentYear = () => {
    const data = new Date();
    const year = data.getFullYear();
    return year
}

const myAge = () => {
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth();
    const day = data.getDate()

    if (month < 3) return year - 1993 - 1
    if (month === 3 && day < 12) return year - 1993 - 1

    return year - 1993
}

function main () {
    const year = document.querySelector("#current-year");
    year.innerHTML = currentYear();
    
    const idade = document.querySelector("#my-age");
    idade.innerHTML = myAge();
}

main();
