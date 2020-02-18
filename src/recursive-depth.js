module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let count = 1,
            depth = 0;
        for (let i of arr) {
            if (Array.isArray(i)) {
                count = this.calculateDepth(i);
                if (depth < count) depth = count;
            }
        }
        return ++depth;
    };
};