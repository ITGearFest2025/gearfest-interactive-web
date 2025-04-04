# GearFest Interactive Web

## Prerequisites

This project uses `pnpm` as the Node package manager.

## Project Structure

```
/
├── public/
└── src/
    ├── components/
    ├── layouts/
    ├── pages/
    └── stores/
```

## Getting Started

1. Clone this repository

```
git clone https://github.com/ITGearFest2025/gearfest-interactive-web.git
```

2. Change directory

```
cd gearfest-interactive-web
```

3. Install dependencies

```
pnpm install
```

4. Run development server

```
pnpm dev
```

5. The development server will be running on [localhost:4321](http://localhost:4321)

## Contributing

Before pushing to the remote repository, make sure one has formatted their code correctly. By running this command below, the code will be formatted.

```
pnpm format
```

### Conventional Commit Format

In short, the commit message should look like this:

```
git commit -m "feat: <what-you-did>"
# or
git commit -m "fix: <what-you-fixed>"
# or
git commit -m "refactor: <what-you-refactored>"
```

The commit message should start with one of the following types:

- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  For more information, please read the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) documentation.
