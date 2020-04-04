import { exec } from 'child_process';
import { DockerMachine } from 'dockermachine-cli-js';
import extractResult from './extract-result';

/**
 * Run a docker command and return deserialized results
 * @param {string} command the docker command to run
 * @param {object} options Command options
 * @param {string} options.machineName Use a configured docker-machine name
 * @param {string} options.cwd Use a different working directory
 * @param {bool} options.echo Echo the command output to stdio
 */
export default async (command, options = {}) => {
  let machineconfig = '';

  if (options.machineName) {
    machineconfig = await new DockerMachine()
      .command(`config ${options.machineName}`)
      .then((data) => data.machine.config);
  }

  const execCommand = `docker ${machineconfig} ${command}`;
  const execOptions = {
    cwd: options.cwd,
    env: {
      DEBUG: '',
      HOME: process.env.HOME,
      PATH: process.env.PATH,
    },
    maxBuffer: 200 * 1024 * 1024, // 200mb
  };

  const raw = await new Promise((resolve, reject) => {
    const childProcess = exec(execCommand, execOptions, (error, stdout, stderr) => {
      if (error) {
        return reject(
          Object.assign(new Error(`Error processing command`), {
            ...error,
            stdout,
            stderr,
            innerError: error,
          })
        );
      }

      resolve(stdout);
    });

    if (options.echo) {
      childProcess.stdout.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
      });

      childProcess.stderr.on('data', (chunk) => {
        process.stderr.write(chunk.toString());
      });
    }
  });

  return extractResult({
    input: { command, options },
    command: execCommand,
    raw,
  });
};
