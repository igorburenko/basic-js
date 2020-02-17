module.exports = function transform(arr) {
        if (!Array.isArray(arr)) throw Error;
        if (arr.length === 0) return arr;

        let newArr = [],
            discardNextFlag = false;

        for (let index = 0; index < arr.length; index++) {
            if (discardNextFlag) {
                discardNextFlag = false;
                continue;
            }

            switch (arr[index]) {
                case '--discard-next':
                    discardNextFlag = true;
                    break;
                case '--discard-prev':
                    index === 0 || newArr.pop();
                    break;
                case '--double-next':
                    index >= arr.length - 1 || newArr.push(arr[index + 1]);
                    break;
                case '--double-prev':
                    if (index === 0) break;
                    newArr.push(arr[index-1]);
                    break;
                default:
                    newArr.push(arr[index]);
            }
        }
        return newArr
    };