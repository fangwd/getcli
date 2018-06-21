const getcli = require('..');

test('getcli', () => {
  const specs = [
    ['-u', '--user'],
    ['-p', '--password', 'secret'],
    ['-S', '--socket'],
    ['-v', '--verbose', true],
    ['-b', '--brief', 'verbose', false],
    ['', '--include']
  ];

  let options;

  options = getcli(specs, ['-uroot', '--password=secret', '-v']);

  expect(options['-u']).toBe(true);
  expect(options['--user']).toBe(true);
  expect(options.user).toBe('root');
  expect(options.password).toBe(undefined);
  expect(options.secret).toBe('secret');
  expect(options.verbose).toBe(true);
  expect(getcli(specs, ['-b']).verbose).toBe(false);

  options = getcli(specs, ['two', '--include', 'one', 'three']);

  expect(options.include).toBe('one');
  expect(options.argv.length).toBe(2);
  expect(options.argv[1]).toBe('three');

  expect(() => getcli(specs, ['-S'])).toThrow();
  expect(() => getcli(specs, ['--socket'])).toThrow();
  expect(() => getcli(specs, ['-X'])).toThrow();
  expect(() => getcli(specs, ['--unknown'])).toThrow();
});
