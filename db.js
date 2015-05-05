module.exports = function() {
  var datasourceName;

  return {
    driver: function() {},
    datasource: function(requestedDS) {
      datasourceName = requestedDS;
    },
    connect: function() {},
    close: function() {},
    select: function() {},
    getDatasource: function() {
      if(datasourceName) {
        var dsn = datasourceName;
        var glob = require('glob');
        var dsFile = glob.sync('./**/datasources/'+dsn+'.js')[0];

        return require(dsFile);
      }
    }
  };
}();
