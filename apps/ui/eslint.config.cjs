module.exports = {
  extends: ['@workspace/eslint-config'],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ['node_modules', 'dist']
};