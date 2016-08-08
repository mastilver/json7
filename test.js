import test from 'ava';
import { stringify, parse } from './src';

test(t => {
    const json = stringify({
        text: 'test'
    });

    const result = parse(json);

    t.is('string', typeof json);
    t.is('test', result.text);
});
