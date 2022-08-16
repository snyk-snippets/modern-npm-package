import 'mocha';
import { assert } from 'chai';

import { helloWorld } from '../index';
import npmPackage from '../index';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a helloWorld property', () => {
    assert.property(npmPackage, 'helloWorld');
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(helloWorld);
  });

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});
