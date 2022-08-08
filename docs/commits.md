# [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```



## Structural elements

- fix: a commit of the type fix patches a bug in your codebase
- feat: a commit of the type feat introduces a new feature to the codebase
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope. A BREAKING CHANGE can be part of commits of any type.
- Other types: `build:, chore:, ci:, docs:, style:, refactor:, perf:, test:`
- footers other than BREAKING CHANGE: <description> may be provided

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`

<br>

### Examples
- Commit message with ! to draw attention to breaking change
  ```sh
  feat!: send an email to the customer when a product is shipped
  ```

- Commit message with scope and ! to draw attention to breaking change
  ```sh
  feat(api)!: send an email to the customer when a product is shipped
  ```

- Commit message with both ! and BREAKING CHANGE footer
  ```sh
  chore!: drop support for Node 6

  BREAKING CHANGE: use JavaScript features not available in Node 6.
  ```

<br>

## Specifications

- Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by the OPTIONAL scope, OPTIONAL !, and REQUIRED terminal colon and space.
- The type feat MUST be used when a commit adds a new feature to your application or library.
- The type fix MUST be used when a commit represents a bug fix for your application.
- A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., fix(parser):
- A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., fix: array parsing issue when multiple spaces were contained in string.
- A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
- Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.
- f included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g., BREAKING CHANGE: environment variables now take precedence over config files.
- If included in the type/scope prefix, breaking changes MUST be indicated by a ! immediately before the :. If ! is used, BREAKING CHANGE: MAY be omitted from the footer section, and the commit description SHALL be used to describe the breaking change.
- Types other than feat and fix MAY be used in your commit messages, e.g., docs: updated ref docs.
