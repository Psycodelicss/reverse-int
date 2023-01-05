module.exports = function reverse (n) {
    let i = 0, result = '', text = String(n);
    
    while (i < String(text).length) {
        if (text[i] === '-') {
            i += 1;
        } else {
            result = `${text[i]}${result}`;
            i += 1;
        }
    }
    return Number(result);
}
