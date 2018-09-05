# create-sp2013-react-mobx-app

Opinionated SharePoint 2013 starter kit for modern client-side Javascript development. 
This project extends Facebooks create-react-app, but adds SharePoint 2013 specific modules.

## Getting Started

Install globally. 
````
npm install --global create-sp2013-react-mobx-app
````
or 
````
yarn add --global create-sp2013-react-mobx-app
````

Once installed, use the cli to create a new project. 
````
create-sp-2013-react-mobx-app my-new-project-name
````
* CD, into your project directory. 
* Configure [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy)
````
npm run proxy
```` 
then, answer the interactive questions to configure the proxy connection to your SharePoint site. Ctrl-c to end task.
* Execute 
````
npm run dev 
````
(uses concurrently), to start the proxy and dev server simultaneously
* Develop interactively, with real SharePoint data. Enjoy!

### Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint 2013, since this is a SharePoint development starter kit.
Although the generated project will work with SharePoint 2016, it is not optimized for SharePoint 2016 or Online. 
Please see my other starter kits for those platforms.

* State management - [Mobx](https://github.com/mobxjs/mobx)
* Rest Data - [PnPjs](https://pnp.github.io/pnpjs/getting-started.html)
* Development Support - [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy)

## Authors

* **Kayode Bristol** - *Initial work* - [create-sp-vanilla-js](https://github.com/kayodebristol/create-sp-vanilla-js)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Special thanks to [Andrew Koltyakov](https://github.com/koltyakov). 

