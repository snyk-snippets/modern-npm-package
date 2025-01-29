import { describe, it } from 'node:test';
import assert from 'node:assert';

import { helloWorld, goodBye } from '../src/index.ts';
import npmPackage from '../src/index.ts';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof npmPackage, 'object');
  });

  it('should have a helloWorld property', () => {
    assert.deepStrictEqual(Object.keys(npmPackage), ['helloWorld', 'goodBye']);
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof helloWorld, 'function');
  });

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});

describe('Goodbye Function', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof goodBye, 'function');
  });

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!';
    const actual = goodBye();
    assert.equal(actual, expected);
  });
});
