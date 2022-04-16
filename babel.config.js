module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './App', // if app files is inside "app/" folder, replace with "./app"
        },
      },
    ],
  ],
};
