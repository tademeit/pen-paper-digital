module.exports = {
  name: 'pen-paper-digital',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pen-paper-digital',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
