var db = require('../db');
describe('Database functionality', function() {
  it('should have a datasource method', function() {
    expect(db.datasource).to.be.a('function');
  });
  it('should have a driver method', function() {
    expect(db.driver).to.be.a('function');
  });
  it('should have a connect method', function() {
    expect(db.connect).to.be.a('function');
  });
  it('should have a close method', function() {
    expect(db.close).to.be.a('function');
  });
  it('should have a select method', function() {
    expect(db.select).to.be.a('function');
  });
});

describe('Support for various DB drivers', function() {
  it('should support JSON');
  it('should support mongoDB');
  it('should support MySQL');
  it('should support XML');
});

describe('Datasource method', function() {
  it('should load a datasource file when passed a [string]', function() {
    expect(db.getDatasource()).to.be.undefined;

    var dsFile = require('./fixtures/datasources/sample');

    db.datasource('sample');
    expect(db.getDatasource()).to.equal(dsFile);
  });
  it('should load a datasource when passed a configuration [object]');
});

describe('Driver method', function() {
  it('should load the driver specified in the datasource');
  it('should load a specified driver');
  it('should ignore a specified driver if the drive exists in the datasource');
});
