# @tracker1/docker-cli

Quick command interface for running docker commands with parsed results.

```js
import dockerCommand from '@tracker1/docker-cli`;

const result = await dockerCommand('ps', options)
```

## dockerCommand

The command `dockerCommand(command, options)` has to input parameters.

* `command` (string) - the command to run
* `options` (object, optional) - Additional parameters to run
  * `machineName` (string) - the docker-machine configuration name to use.
  * `cwd` (string) - the working path to use
  * `echo` (bool) - when true, will echo the console output as the command runs

## Related Projects

* (docker-cli-js)[https://github.com/Quobject/docker-cli-js] - Original inspiration, started with some logic from this project.

## License

MIT License
