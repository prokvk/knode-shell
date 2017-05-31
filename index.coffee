util = require('util')
runner = require('child_process')

module.exports = do () ->
	runCmd = (cmdFunc, done) ->
		stdout = []
		stderr = []

		cmdFunc.stdout.on 'data', (data) -> stdout.push data

		cmdFunc.stderr.on 'data', (data) -> stderr.push data

		cmdFunc.on 'exit', (code) ->
			return done stderr.join('') if code isnt 0
			done null, stdout.join('') 

	run: (cmd, args, done) ->
		exec = runner.spawn cmd, args
		runCmd exec, done

	exec: (cmd, opts, done) ->
		exec = runner.exec cmd, opts
		runCmd exec, done
