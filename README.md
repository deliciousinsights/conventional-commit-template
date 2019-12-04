# A “conventional changelog” template project

The purpose of this project template is to assist you in writing your commit messages according to the “[conventional commit](https://conventionalcommits.org/)” standard and also to auto-generate your tags/versions as well as the `CHANGELOG.md` file describing the new features of the project following a merge (following the [semantic version](https://semver.org/) convention).

## How can I use it?

You can chose between cloning the project or copy/paste its configuration to setup your project.

For cloning you only have to do a `git clone git@github.com:deliciousinsights/conventional-commit-template.git new-project-name` then `npm install`.

Don’t forget to update the name and description of your project in the `package.json` file after cloning.  The version number is gone be automatically updated while running “standard version”, so you don't have to change it.

If you only want to grab the configuration you can copy/paste the following files:

- `package.json` (or the `config`, `husky`, `standard-version` and `devDependencies` parts)
- `commitlint.config.js`
- `release.config.js`
- the full subdirectory `.github/workflows/release.yml`

Then run `npm install` in your project directory.

Create you GitHub (empty) repository and update your local one with the remote URL: 

```
git remote set-url origin YOUR-PROJECT-URL
```

Initiate your remote `master` branch: 

```
git push -u origin master
```

And you’re good to go! 🙌

## What it does…

It installs tools that helps you follow the [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) rules:

- [**Husky**](https://www.npmjs.com/package/husky) automates Git hooks sharing and execution in you project
- [**CommitLint**](https://commitlint.js.org/) validates your commit messages format (and stops the commit if it doesn’t match the conventional changelog rules)
- [**Commitizen**](https://github.com/commitizen) is a wizard that’s going to help you fill your commit message accordingly to the conventional changelog rules (you’ll have to run `git cz` instead of `git commit`)
- [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release) automatically generates and updates your `CHANGELOG.md`, creates the associated Git tag and GitHub release, and updates the `package.json` version number. You can also configure any other file you expect to be bumped with the new version number.
- A [**GitHub action**](https://github.com/features/actions) runs semantic-release when a pull request is validated and the associated merge is done into `master` (see the `.github/workflows/release.yml` file for details).
