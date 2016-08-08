
function stringify(object) {
    return JSON.stringify({
        _: object
    });
}

function parse(str) {
    return JSON.parse(str)._;
}

export { stringify, parse };
export default { stringify, parse };
