const primes = {
    11: [2, 6, 7, 8],
    13: [2, 6, 7, 11],
    17: [3, 5, 6, 7, 10, 11, 12, 14],
    19: [2, 3, 10, 13, 14, 15],
    23: [5, 7, 10, 11, 14, 15, 17, 19, 20, 21],
    29: [2, 3, 8, 10, 11, 14, 15, 18, 19, 21, 26, 27],
    31: [3, 11, 12, 13, 17, 21, 22, 24],
    37: [2, 5, 13, 15, 17, 18, 19, 20, 22, 24, 32, 35],
    41: [6, 7, 11, 12, 13, 15, 17, 19, 22, 24, 26, 28, 29, 30, 34, 35],
    43: [3, 5, 12, 18, 19, 20, 26, 28, 29, 30, 33, 34],
    47: [5, 10, 11, 13, 15, 19, 20, 22, 23, 26, 29, 30, 31, 33, 35, 38, 39, 40, 41, 43, 44, 45]
};

module.exports.genPrimes = () => {
    const main = Object.keys(primes);
    const p = main[Math.floor(Math.random() * main.length)];
    const primitiveRoots = primes[p];
    const q = primitiveRoots[Math.floor(Math.random() * primitiveRoots.length)];
    return [parseInt(p), q];
} 
