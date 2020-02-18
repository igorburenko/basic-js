class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        let spaces = 0;
        if (message === undefined || key === undefined) throw Error;
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        // console.log(message, key);
        const encrypted = message.map((value, index) => {
            if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) {
                spaces++;
                return value;
            }
            let keyIndex = index < key.length-1 ? index-spaces : (index- spaces) % key.length ;   // покрутить может надо <=
            let encrChar = value.charCodeAt(0) - 65 + key[keyIndex].charCodeAt(0)-65;
            if (encrChar > 25) encrChar -= 26;
            return String.fromCharCode(encrChar + 65);
            }
        );
        if (!this.direct) encrypted.reverse();
        return encrypted.join('');
    }

    decrypt(encryptedMessage, key) {
        let spaces = 0;
        if (encryptedMessage === undefined || key === undefined) throw Error;
        let message = encryptedMessage.toUpperCase().split('');
        key = key.toUpperCase().split('');
        const decrypted = message.map((value, index) => {
                if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) {
                    spaces++;
                    return value;
                }
                let keyIndex = index < key.length-1 ? index-spaces : (index- spaces) % key.length ;   // покрутить может надо <=
                let encrChar = (value.charCodeAt(0) - 65) - (key[keyIndex].charCodeAt(0) - 65);
                if (encrChar < 0) encrChar += 26;
                return String.fromCharCode(encrChar + 65);
            }
        );
        if (!this.direct) decrypted.reverse();
        return decrypted.join('');
    }

}

module.exports = VigenereCipheringMachine;


// let directMachine = new VigenereCipheringMachine();
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
// console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
// {
//     0-9: 48-57
//     A-Z: 65-90
//     a-z: 97-122
// }