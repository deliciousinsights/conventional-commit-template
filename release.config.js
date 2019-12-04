// Setup Semantic Release plugins.
// See https://semantic-release.gitbook.io/semantic-release/extending/plugins-list for more plugins.
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    // Disable npm publishing
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      }
    ],
    "@semantic-release/github",
    // Uncomment this line if you're using GitLab
    // "@semantic-release/gitlab",
    "@semantic-release/git"
  ]
}