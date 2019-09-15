const fs = require('fs').promises;
const path = require('path');
const dict_file = '/usr/share/dict/words';

async function main() {
  const raw = await fs.readFile(dict_file)

  const char_only_re = /^[A-Za-z]{4,}$/;

  const words = raw
    .toString('utf8')
    .split('\n')
    .filter((str) => {
      // filter out unusable words
      return str.match(char_only_re);
    })
    .map((str) => {
      return str.toUpperCase();
    })
    .sort((a,b) => {
      // sort shortest to longest
      const difference = a.length - b.length;
      if (difference != 0) {
        return difference;
      }

      // for same length words, randomize via a random number of -1, 0, and +1
      const tribool = Math.floor(Math.random() * 3) - 1;

      return tribool;
    });

  const base_dir = path.dirname(__filename);
  const destination = path.join(base_dir, '/../src/words.js');

  const to_write = [
    `/* subset of words from ${dict_file} */`,
    'const words = ' + JSON.stringify(words, null, 2) + ';',
    'export default words;'
  ].join('\n');

  await fs.writeFile(destination, to_write);
}

if (__filename === process.argv[1]) {
  main();
}
