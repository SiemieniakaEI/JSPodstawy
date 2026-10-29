let liczba = Number(prompt("podaj liczbe: "))

liczba = Math.max(0, liczba)
liczba = Math.min(100, liczba)

document.getElementById("wynik").textContent = "liczba to: " + liczba