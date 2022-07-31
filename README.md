# Angular4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Cli

ng generate directive|pipe|service|class|guard|interface|enum|component|module|interceptor

ng g directive directives/name-directive/name --skip-tests --skip-import --prefix=directive --export

ng g directive directives/name-directive/name --skip-tests --prefix=directive --export
ng g module directives/name-directive

ng g pipe pipes/name --skip-tests --skip-import
ng g service services/name --skip-tests
ng g class classes/name --skip-tests --type=class
ng g guard guards/name --skip-tests
ng g interceptor interceptors/name --skip-tests
ng g interface interfaces/name --type=interface rename NameInterface
ng g enum enums/name --type=enum rename NameEnum

ng g component components/name-component/name --skip-tests --export --flat --prefix=component
ng g module components/name-component 

ng g component components/layout-component/layout --skip-tests --export --flat --prefix=component
ng g module components/layout-component 

ng g component elements/name-element/name --skip-tests --export --type=kit --flat --prefix=element
ng g module elements/name-element

ng g component pages/name-page/name --skip-tests --export --type=page --flat --prefix=page
ng g module pages/name-page --routing --module=app
