# ed-craft-ui(x) 🧩

Esta libreria cubre la necesidad de crear componentes utilizando Angular 18, tailwind y Chart.js. El nombre original es "ed-craft-ui", pero por azares del destino no estaba disponible el nombre por eso la **x** adicional.

## Instalación

Instalar la libreria a través de **npm**

```bash
  npm i ed-craft-uix
```

Luego de continuar con la instalación de la libreria, es necesario agregar los estilos en el **angular.json**. Asegurate de importarlo en el array de **styles**.

```bash
  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "project-name": {
        "projectType": "application",
        "schematics": {
          ...
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            ...
            "options": {
              ...
              "assets": [
                {
                  "glob": "**/*",
                  "input": "public"
                }
              ],
              "styles": [
                "src/styles.scss",
                "node_modules/ed-craft-uix/src/theme/tailwind.scss" // -> AQUÍ
              ],
              "scripts": []
            }
            ...
```

## Notas Adicionales

No es necesario tener instaladas las peer-dependencies: **tailwind** y **chart.js**

## Stack Tecnológico

**Frontend:** Angular 18.0.0

## Referencias

- [Angular.dev](https://angular.dev)
- [EDteam](https://ed.team)
