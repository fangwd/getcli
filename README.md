A command line parser for those who don't like any learning curves.

# Installation

`$ npm install cli`

# Usage

Example:

```js
const getcli = require('getcli');

const cli = getcli([
  ['-D', '--delete', 'filename'],
  ['-v', '--verbose', true],
  ['-b', '--brief', 'verbose', false]
]);

if (cli['--delete']) {
  // delete cli.filename
}
```

Using default values:
```js
const result = getcli([
  ['-u', '--user']
], { user: 'root' });
```
When running the above with no arguments, result will have the following values:
```
{ user: 'root', argv: [] }
```

