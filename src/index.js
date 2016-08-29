import { get, set } from 'lodash';
import RecursiveIterator from 'recursive-iterator';

function stringify(object) {
    const datePaths = [];
    populatePaths(object, datePaths);

    return JSON.stringify({
        _: object,
        dates: datePaths
    });
}

function populatePaths(object, datePaths) {
    // TODO: optimize
    for (const { path, node} of new RecursiveIterator(object)) {
        if (node instanceof Date) {
            datePaths.push(path.join('.'));
        }
    }
}

function parse(str) {
    const parsedJson = JSON.parse(str);

    const result = parsedJson._;
    const datePaths = parsedJson.dates;

    if (Array.isArray(parsedJson.dates)) {
        // eslint-disable-next-line guard-for-in
        for (const i in datePaths) {
            const path = datePaths[i];
            set(result, path, new Date(get(result, path)));
        }
    }

    return result;
}

export { stringify, parse };
export default { stringify, parse };
