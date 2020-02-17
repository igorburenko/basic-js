module.exports = function createDreamTeam(members) {
        return Array.isArray(members) ?
            members
                .filter(m => typeof m == 'string' ? m : '')
                .map(m => m.trim().slice(0, 1)
                    .toUpperCase()).sort().join('')
            : false;
    };