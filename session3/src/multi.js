class Callee {
subtract(a, b) {
    return a - b;
}
}

function add(a, b) {
    return a + b;
}

module.exports = { Callee, add }