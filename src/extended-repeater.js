module.exports = function repeater(str, options) {
    let finalStr = '';

    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    if (options.addition !== undefined && !(typeof options.addition === 'string')) options.addition = String(options.addition);

    if (options.additionRepeatTimes !== undefined && options.addition !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            if (i !== 0) str += options.additionSeparator;
            str += options.addition
        }
    } else if (options.addition !== undefined) str += options.addition;

    if (options.repeatTimes === undefined) {
        finalStr += str;
    } else {
        for (let i = 0; i < options.repeatTimes; i++) {
            if (i !== 0) finalStr += options.separator;
            finalStr += str;
        }
    }
    return finalStr;
};
