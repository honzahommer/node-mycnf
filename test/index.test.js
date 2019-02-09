const should = require('should');
const lib = require('../lib');

describe('mycnf', () => {
  it('returns module', () => {
    should(lib).be.ok();
  });

  it('returns object', () => {
    should(lib()).be.an.instanceOf(Object);
  });
});
