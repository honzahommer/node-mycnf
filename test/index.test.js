const should = require('should');
const lib = require('../lib');
const { join } = require('path');

describe('mycnf', () => {
  it('returns module', () => {
    should(lib).be.ok();
  });

  it('returns object', () => {
    should(lib()).be.an.instanceOf(Object);
  });

  it('returns database property', () => {
    should(lib({ file: join(__dirname, '.my.cnf') })).have.property('database', 'test');
  });
});
