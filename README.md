knode-shell
===========

is a simple shell module wrapper for running shell commands

# Install:

```
npm install --save knode-shell
```

# Usage samples:

```javascript
//example without args
shell.run('ls', [], function(err, out) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(out);
});

//example with args
shell.run('ls', ['-la'], function(err, out) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(out);
});

//example exec command
shell.exec('ls -la', null, function(err, out) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(out);
});

//example exec command with pipe
shell.exec('ls -la | grep index', null, function(err, out) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(out);
});
```