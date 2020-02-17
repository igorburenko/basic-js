const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
        let sampleActivityParsed = parseFloat(sampleActivity);
        if (sampleActivityParsed > MODERN_ACTIVITY
            || sampleActivityParsed <= 0
            || (typeof sampleActivity != "string")
            || !isFinite(sampleActivityParsed)) return false;

      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityParsed) / (0.693 / HALF_LIFE_PERIOD));
    };