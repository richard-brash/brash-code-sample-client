# Brash Code Challenge CLIENT
> This is my CLIENT response to the Code Challenge issued by Ventera - Next Steps.

The choices made while building this project were made in an effort to highlight some techniques that would make this project easier to expand and maintain if it were part of a larger, more complex product. Admittedly, the solution is decidedly more involved than necessry but since this is part of the interview process, I decided to err on the side of more is indeed more.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

The file at ./environment/environment.ts must contain an entry pointing to a running instance of brash-code-challenge-api.

### Example contents for ./environment/environment.ts

```sh
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1/unit-convert' 
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
