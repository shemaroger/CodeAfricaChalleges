function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {

        const reversed = input.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
       
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
       
        return input.split('').reverse().join('');
    }

    return input;
}


console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
