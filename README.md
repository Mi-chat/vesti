# BIENVENUE SUR :
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/Mi-chat/vesti/blob/dev/src/assets/img/logo/logoVestiWhiteLittle.png" width="480" height="150"/>

Vesti : est un dressing connecté qui vous permet d'organiser vos tenues et d'avoir des idées en fonction de vos propres goûts, préférences, en fonction de la saison, de la météo et plus encore ..."

## To Run This Project : 
## First : 
Clone the Front-end and Back-end Repositories : 

+ Front-end : 
https://github.com/Mi-chat/vesti

+ Back-end : 
https://github.com/Sainseya/vestiSpringBoot

## Then : 

+ On [Docker](https://www.docker.com/products/docker-desktop/) : 
  [Docker compose](https://hub.docker.com/_/mongo)
  # Use root/example as user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
      
  
+ On [IntelliJ](https://www.jetbrains.com/idea/download/#section=windows) :
  run the VestiBackApplication.java (the main class) use the link to the back-end repository.

+ On [VisualStudioCode](https://code.visualstudio.com/download) :
  + Step 1 : Open the Project and a new terminal and type these commands : 
  + Step 2 : `npm install` 
  + Step 3 : `ng add @angular/material`
  + Step 4 : `ng serve -o`
	
+ If nothing happens go to your browser and type : `http://localhost:4200/`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

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





## Langages utilisés ?
+ Angular : HTML, CSS, TypeScript.
+ Mongodb
+ SpringBoot

## Lien vers le Back-end :
+ https://github.com/Sainseya/vestiSpringBoot

## A venir :
Tout _**plein**_ de fonctionnalités qui arriveront d'ici peu ! Le linge sale, le partage de tenue, le chat, un dark mode etc.

## Screenshots :

### Génération de Tenue : 
![Génération de tenues](https://github.com/Mi-chat/vesti/blob/dev/src/assets/img/logo/Capture%20d'ecrans/Capture%20d'%C3%A9cran%202023-06-13%20100404.png)

### Dressing : 
![Génération de tenues](https://github.com/Mi-chat/vesti/blob/dev/src/assets/img/logo/Capture%20d'ecrans/Capture%20d'%C3%A9cran%202023-06-13%20100404.png)

### Pace d'acceuil : 
![Génération de tenues](https://github.com/Mi-chat/vesti/blob/dev/src/assets/img/logo/Capture%20d'ecrans/Capture%20d'%C3%A9cran%202023-06-13%20100404.png)


## Contributeurs :
+ https://github.com/Mi-chat
+ https://github.com/ClementVaugoyeau
+ https://github.com/Sainseya
+ https://github.com/MelanieVD
