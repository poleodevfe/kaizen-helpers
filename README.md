## Requirements

1. Have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscodes) plugin installed.
2. Follow the plugin's instructions to enable automatic saving when saving your file.
3. After installing the project's dependencies, start your trip with `npm run husky`.

## General rules

1. Everything must be written in English, from comments to function names.
2. Enabled branches to work are `["feat", "fix", "perf", "docs", "ci"]` for example: ci/improvePipelines, feat/newHelper

## About the tests

1. We make tests for the [people](https://97cosas.com/programador/escribe-pruebas-para-personas.html).
2. We use `it` and not `test`.
3. All our tests must be wrapped by a `describe`.
4. We use SWA (Should when and) to describe our tests.
5. We use AAA (Arrange, Act and Assert) to structure our tests.
6. All functions must cover the error case.
7. All functions must have JSDocs.
