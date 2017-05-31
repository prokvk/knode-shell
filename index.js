(function() {
  var runner, util;

  util = require('util');

  runner = require('child_process');

  module.exports = (function() {
    var runCmd;
    runCmd = function(cmdFunc, done) {
      var stderr, stdout;
      stdout = [];
      stderr = [];
      cmdFunc.stdout.on('data', function(data) {
        return stdout.push(data);
      });
      cmdFunc.stderr.on('data', function(data) {
        return stderr.push(data);
      });
      return cmdFunc.on('exit', function(code) {
        if (code !== 0) {
          return done(stderr.join(''));
        }
        return done(null, stdout.join(''));
      });
    };
    return {
      run: function(cmd, args, done) {
        var exec;
        exec = runner.spawn(cmd, args);
        return runCmd(exec, done);
      },
      exec: function(cmd, opts, done) {
        var exec;
        exec = runner.exec(cmd, opts);
        return runCmd(exec, done);
      }
    };
  })();

}).call(this);
