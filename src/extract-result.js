import commandParsers from './command-parsers';

const getCommandParser = (command) =>
  commandParsers.filter((p) => p.re.exec(command)).map((p) => p.run)[0] || ((r) => r);

export default (result) => getCommandParser(result.input.command.trim())(result);
