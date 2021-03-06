const path     = require('path');
const sassTrue = require('sass-true');
const glob     = require('glob');

describe('SASS', () => {
  const sassFiles = glob.sync(
    path.resolve(__dirname, 'src/**/__tests__/*.scss')
  );

  for (let sassFile of sassFiles) {
    sassTrue.runSass({ file: sassFile }, { describe, it })
  }
});
