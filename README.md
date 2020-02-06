# @tracker1/docker-cli

[![npm version](https://img.shields.io/github/package-json/v/tracker1/node-docker-cli)](https://www.npmjs.com/package/@tracker1/docker-cli) 
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@tracker1/docker-cli)](https://libraries.io/npm/@tracker1/docker-cli)
![Github Issues](https://img.shields.io/github/issues/tracker1/node-docker-cli?style=plastic) 
[![MIT License](https://img.shields.io/github/license/tracker1/node-docker-cli)](./LICENSE)

<!-- [![Actions Status](https://github.com/tracker1/node-docker-cli/workflows/Tests/badge.svg)](https://github.com/tracker1/node-docker-cli/actions) -->
<!--[![Code Coverage](https://img.shields.io/coveralls/github/tracker1/node-docker-cli)](https://github.com/tracker1/node-docker-cli) -->


Quick command interface for running docker commands with parsed results.

```js
import dockerCommand from '@tracker1/docker-cli';

const result = await dockerCommand('ps', options);
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
