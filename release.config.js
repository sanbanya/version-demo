module.exports = {
    tagFormat: 'v${version}',
    "branches": [
      {name: 'main'},
      {name: 'beta', channel: 'beta', prerelease: 'beta'},
    ],
    "plugins": [
      '@semantic-release/commit-analyzer', 
      '@semantic-release/release-notes-generator', 
      ["@semantic-release/npm", {
        "npmPublish": false,
      }],
      '@semantic-release/github',
      ['@semantic-release/git', {
        "assets": [],
        "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }]
    ]
  }