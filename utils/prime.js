const forge = require("node-forge");

module.exports.getPrime = bits => {
	return new Promise((resolve, reject) => {
		forge.prime.generateProbablePrime(bits, (err, num) => {
			if (err) {
				reject(err);
			} else {
				resolve(num.toString());
			}
		});
	});
};
