let cena = Number(prompt("popdaj cene: "))
let rabat = Number(prompt("popdaj rabat: "))

let porab = cena * (1 - rabat / 100)
porab = Math.round(porab * 100) / 100

document.getElementById("wynik").textContent = "cena po rabacie: " + porab

