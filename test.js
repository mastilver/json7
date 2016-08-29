import test from 'ava';
import { stringify, parse } from './src';

test('parsing supported JSON values', t => {
    const json = stringify({
        text: 'test'
    });

    const result = parse(json);

    t.is('string', typeof json);
    t.is('test', result.text);
});

test('parsing Dates', t => {
    const json = stringify({
        text: 'test',
        date: new Date(2015, 4, 1, 13, 37)
    });

    const result = parse(json);

    t.is('test', result.text);
    t.truthy(result.date instanceof Date);
    t.is(2015, result.date.getFullYear());
    t.is(4, result.date.getMonth());
    t.is(1, result.date.getDate());
    t.is(13, result.date.getHours());
    t.is(37, result.date.getMinutes());
});

test('parsing nested Dates', t => {
    const json = stringify({
        obj: {
            array: [
                'test',
                new Date(2015, 4, 1, 13, 37)
            ]
        }
    });

    const result = parse(json);

    console.log(result);

    t.is('test', result.obj.array[0]);
    t.truthy(result.obj.array[1] instanceof Date);
    t.is(2015, result.obj.array[1].getFullYear());
    t.is(4, result.obj.array[1].getMonth());
    t.is(1, result.obj.array[1].getDate());
    t.is(13, result.obj.array[1].getHours());
    t.is(37, result.obj.array[1].getMinutes());
});
