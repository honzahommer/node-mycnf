const { spawnSync } = require('child_process');
const MYCNF_REGEXP = /^\W*(?<key>.*?)\s*=\s*(?<val>.*)$/mg;

module.exports = function mycnf ({ cmnd = 'my_print_defaults', file, group = 'client' } = { }) {
  const args = (file ? [`--defaults-file="${file}"`] : []).concat(['-s', group]);
  const { status, stderr = '', stdout = '' } = spawnSync(cmnd, args);

  if (status === null) {
    throw Error(`${cmnd}: command not found`);
  } else if (status !== 0) {
    throw Error(stderr);
  }

  const options = {};
  let match;

  while ((match = MYCNF_REGEXP.exec(stdout.toString())) !== null) {
    if (match.index === MYCNF_REGEXP.lastIndex) {
      MYCNF_REGEXP.lastIndex++;
    }

    const { groups: { key, val } } = match;

    options[key] = val;
  }

  return options;
};
