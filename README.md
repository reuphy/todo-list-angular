* Angular :

* angular\todo-list- project
 test examples
 standalone

[Tutoriel Angular] De l'architecture aux tests : réalisation d'une application pas à pas [2023] :
https://www.youtube.com/watch?v=zSC5Qwso304&list=PLoJjTQR8kQTdNDtcza3PSQNB17rg-59ca

1) create a new project
https://www.thisdot.co/blog/how-to-create-standalone-components-in-angular/
ng new todo-list- --routing --style css
ng generate component check-list --inline-template=false --standalone

2) get rid of the modules and use stand alone component :
https://www.thisdot.co/blog/how-to-create-standalone-components-in-angular/#using-standalone-components

3) routing with standalone
https://ultimatecourses.com/blog/setup-router-with-angular-standalone-components
* angular\todo-list-\src\app\router\index.ts
* angular\todo-list-\src\main.ts
* angular\todo-list-\src\app\app.component.ts

4) unit test basics
to do : fixe : jest could not be installed for the moment it is jasmine

Auto completion :
todo-list-\src\app\check-list\check-list.component.spec.ts

4.1) Cannot find name 'describe'. Do you need to install type definitions for a test runner? :
https://stackoverflow.com/questions/39020022/angular-2-unit-tests-cannot-find-name-describe
import {} from 'jasmine'; 

5) injecting a service for unit test
* angular\todo-list-\src\app\service\todo-list.service.ts
* angular\todo-list-\src\app\service\todo-list-fake.service.ts
* since angular 16 use inject and not constructor 
todo-list-\src\app\check-list\check-list.component.ts

* on the unit test part check this file as a reference
todo-list-\src\app\check-list\check-list.component.spec.ts

6) video about signals and rxjs
https://www.youtube.com/watch?v=oqYQG7QMdzw&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB
* worth a try to check how to transform observable from the service and not from the component
and to switch from function to variable.
* toSignal method
 todo-list-\src\app\check-list\check-list.component.ts

7) example crud with services http client and observable :
https://angular.io/tutorial/tour-of-heroes/toh-pt6  

8) import httpclient in a standalone angular app
https://this-is-angular.github.io/angular-guides/docs/standalone-apis/using-the-httpclient-in-a-standalone-angular-application

9) rxjs basics
get request with loading, and error management from a service
https://blog.dai.codes/handling-http-loadng-states-in-angular-with-rxjs/

10) rxjs refresh data after post request
https://www.youtube.com/watch?v=mo323v1xpS4
* angular\todo-list\src\app\check-list\check-list.component.ts


--------------------------------------------------------------------------------------------------------

* pokemons angular app
video youtube pokemon 3h18

1) project created 
2) components folder
├── src/
│   ├── app/
│       ├── components/
│           ├── pokemons/
│               ├── pokemon-list/
│               ├── pokemon-list/
│       ├── pipes/
│           ├── pokemon-types-color.pipe/



ng generate component pokemon-list --inline-template=false --standalone
ng generate component app-empty-list-message --inline-template=false --standalone
ng generate component pokemon-card --inline-template=false --standalone
3) unit test
* pokemons\src\app\components\pokemons\pokemon-list\pokemon-list.component.spec.ts
* pokemons\src\app\pipes\pokemon-types-color.pipe.ts
