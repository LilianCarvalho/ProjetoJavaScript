  
const lista = (rock) => {
    let longestWord = ""
     rock.forEach(value => {
        if (value.length > longestWord.length) {
            longestWord = value

        }
    });
    return longestWord
}
console.log(lista(["Ramones", "Guns N' Roses", "Nirvana", "slipknot", "Legião Urbana", 'Skank']))