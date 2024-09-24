# ResearchIndicators

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Color Variables and Utility Classes Documentation

This document explains the color variables defined in the `:root` selector and the utility classes generated using a mixin for background and text colors. These classes are part of the design system and should be used in the front-end when applying the project's color scheme.

## Root Variables

The following variables are defined in the `:root` for both light and dark themes, and can be used in cases where direct access to the color is needed. Each variable corresponds to a specific shade or color.

### Light Blue

- `--ac-light-blue-100`: `#79d9ff`
- `--ac-light-blue-200`: `#00b6ff`
- `--ac-light-blue-300`: `#1689ca`
- `--ac-light-blue-400`: `#035ba9`
- `--ac-light-blue-500`: `#074b86`

### Primary Blue

- `--ac-primary-blue-100`: `#b0c4dd`
- `--ac-primary-blue-200`: `#7c9cb9`
- `--ac-primary-blue-300`: `#345b8f`
- `--ac-primary-blue-400`: `#153c71`
- `--ac-primary-blue-500`: `#173f6f`
- `--ac-primary-blue-600`: `#112f5c`
- `--ac-primary-blue-700`: `#0b1e3c`

### Green

- `--ac-green-100`: `#d3e7d5`
- `--ac-green-200`: `#a8ceab`
- `--ac-green-300`: `#7cb580`
- `--ac-green-400`: `#509c55`
- `--ac-green-500`: `#358540`
- `--ac-green-600`: `#235b2d`
- `--ac-green-700`: `#1f4e24`

### Grey

- `--ac-grey-100`: `#f4f7f9`
- `--ac-grey-200`: `#e8ebed`
- `--ac-grey-300`: `#d1d6da`
- `--ac-grey-400`: `#b9c0c5`
- `--ac-grey-500`: `#a2a9af`
- `--ac-grey-600`: `#8d9299`
- `--ac-grey-700`: `#777c83`
- `--ac-grey-800`: `#4c5158`
- `--ac-grey-900`: `#191919`

### Orange

- `--ac-orange-1`: `#f58220`

### White

- `--ac-white-1`: `#fff`
- `--ac-white-2`: `#fcfcfc`

### Background

- `--ac-background`: `#f5f5f5`

### Red

- `--ac-red-1`: `#cf0808`

## Dark Mode Variables

When the dark mode is active, the following variables will be applied:

- `--ac-background`: `#191919`
- `--ac-light-blue-100`: `#4a708b`
- `--ac-light-blue-200`: `#369`
- `--ac-light-blue-300`: `#2b5986`
- `--ac-light-blue-400`: `#23466b`
- `--ac-light-blue-500`: `#1b3450`
  ... (Similar for all other variables)

## Utility Classes

The mixin `generate-color-classes` automatically creates classes for both background and text colors using the format:

- `.abc-[color-name]`: Applies the background color.
- `.atc-[color-name]`: Applies the text color.

### Example Classes:

- `.abc-light-blue-100`: `background-color: var(--ac-light-blue-100)`
- `.abc-light-blue-200`: `background-color: var(--ac-light-blue-200)`
- `.atc-light-blue-100`: `color: var(--ac-light-blue-100)`
- `.atc-light-blue-200`: `color: var(--ac-light-blue-200)`
  ... (And so on for each color defined in the color map)

### Usage Example:

```html
<div class="abc-light-blue-100 atc-primary-blue-500">This div has a light blue background and primary blue text.</div>
```

In cases where custom themes or direct application of colors is needed, you can use the root variables directly in your styles:

```css
.custom-element {
  background-color: var(--ac-light-blue-300);
  color: var(--ac-primary-blue-700);
}
```

## Notes:

- Ensure that classes are applied in the correct context.
- Use `.abc-` for background color and `.atc-` for text color.
- Switch between light and dark themes by toggling the `data-theme` attribute on the `body` tag.
