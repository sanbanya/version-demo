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
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "docs/CHANGELOG.md"
        }
      ],
      ['@semantic-release/git', {
        "assets": ["docs/CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }]
    ]
  }