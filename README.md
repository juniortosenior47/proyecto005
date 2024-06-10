<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# proyecto005

# Configuración de Next.js y Module Federation para el intercambio de componentes

Una configuración adecuada es esencial para establecer la comunicación entre microfrontends con Next.js y Module Federation. Esta configuración se realiza en el archivo next.config.js, el cual sobrescribe la configuración por defecto de webpack en Next.js e integra el plugin Next.Federation, encargado de gestionar la comunicación entre los remotos.

En el archivo next.config.js, se deben definir aspectos como el nombre, el archivo de entrada o File Name y el path del remoto desde el que se consumen los componentes. Además, se especifican los componentes que queremos exponer en el remoto actual mediante la propiedad exposes.

Esta configuración inicial hace posible que un remoto pueda consumir e importar componentes del otro remoto, manteniendo así el enfoque modular y la reusabilidad de los componentes.

# Importación de componentes entre remotos

Una vez configurados los remotos mediante next.config.js, se pueden importar componentes desde un remoto hacia el otro utilizando la función dynamic de Next.js. Esta función permite realizar importaciones dinámicas en el lado del cliente, lo que resulta en la carga de componentes de manera optimizada y bajo demanda.

De esta manera, el componente ButtonFromRemote2 se consume e importa directamente desde el remoto 2 al remoto 1, evitando duplicaciones de código y garantizando la optimización en el uso de recursos.

# Compartir páginas completas entre remotos

Además de compartir componentes, Next.js y Module Federation también permiten compartir páginas completas entre remotos. Esta opción se implementa mediante la propiedad exposePages del plugin Next.Federation, la cual, al ser un valor booleano, habilita automáticamente el acceso a todas las páginas presentes en el proyecto Next.js en cuestión.

Con esta configuración, cualquier microfrontend puede consumir e importar una página completa del remoto configurado, maximizando la reutilización de recursos y la arquitectura modular.

# Información viene del siguiete enlace

https://soloprogramadores.com/microfrontends-con-next-js-y-module-federation-hacia-el-futuro-del-frontend/
