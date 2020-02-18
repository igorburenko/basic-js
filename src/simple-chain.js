const chainMaker = {
    arr: [],

    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.getLength() || typeof position !== 'number') {
            this.arr = [];
            throw Error;
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this
    },
    finishChain() {
        let finalArr = this.arr.map((val, index) => `( ${val} )`);
        this.arr = [];
        return finalArr.join('~~');
    }
};

module.exports = chainMaker;