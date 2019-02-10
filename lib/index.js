const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const MYCNF_REGEXP = /^\W*(?<key>.*?)\s*=\s*(?<val>.*)$/mg;
const {
  env: {
    MYCNF_CMND = 'my_print_defaults',
    MYCNF_FILE,
    MYCNF_GROUP = 'client'
  }
} = process;

function parse (stdout) {
  const options = { };
  let match;

  while ((match = MYCNF_REGEXP.exec(stdout)) !== null) {
    if (match.index === MYCNF_REGEXP.lastIndex) {
      MYCNF_REGEXP.lastIndex++;
    }

    const { groups: { key, val } } = match;

    options[key] = val;
  }

  return options;
}

module.exports = function mycnf ({ cmnd = MYCNF_CMND, file = MYCNF_FILE, group = MYCNF_GROUP } = { }) {
  if (file && !existsSync(file)) {
    throw Error(`${file}: file not found`);
  }

  const { status, stderr, stdout = '' } = spawnSync(
    cmnd, (file ? [`--defaults-file="${file}"`] : []).concat(['-s', group])
  );

  if (status === null) {
    throw Error(`${cmnd}: command not found`);
  }

  if (stderr.toString()) {
    throw Error(stderr);
  }

  return parse(stdout.toString());
};
