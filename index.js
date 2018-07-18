#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs') //fs already comes included with node.
let rootTemplates = require('./templates/rootTemplates.js')
let srcTemplates = require('./templates/styleTemplates.js')
let modelTemplates = require('./templates/modelTemplates.js')
let componentTemplates = require('./templates/componentTemplates.js')
let containerTemplates = require('./templates/containerTemplates.js')
let styleTemplates = require('./templates/styleTemplates.js')


let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
    let success = await createReactApp()
    if(!success){
      console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
      return false;
    }
    await cdIntoNewApp()
    await makeDirectories()
    await installPackages()
    await updateTemplates(rootTemplates, '')
    await updateTemplates(srcTemplates, 'src')
    await updateTemplates(componentTemplates, 'src/components')
    await updateTemplates(containerTemplates, 'src/containers')
    await updateTemplates(modelTemplates, 'src/models')
    await updateTemplates(styleTemplates, 'src/styles')
    await updatePackageJSON(package.json, (data)=>{
      data.push({ 
        proxy: "http://localhost:8080",

      })
      data.scripts.push({
        serve: "npm run proxy",
        proxy: "node ./api-server.js",
        dev: `concurrently --kill-others \"npm run proxy\" \"npm run start\"`
      })
    })
    console.log("All done")
  }
  run() 

  const createReactApp = () => {
    return new Promise(resolve=>{
      if(appName){
        shell.exec(`create-react-app ${appName}`, () => {
          console.log("Created react app")
          resolve(true)
        })
      }else{
        console.log("\nNo app name was provided.".red)
        console.log("\nProvide an app name in the following format: ")
        console.log("\ncreate-sp2013-react-mobx-app ", "app-name\n".cyan)
          resolve(false)
      }
    })
  }

  const cdIntoNewApp = () => {
    return new Promise(resolve=>{
      shell.exec(`cd ${appName}`, ()=>{resolve()})
    })
  }

  const makeDirectories = () => {
    return new Promise(resolve=>{
      shell.exec(`mkdir config`, 
        console.log("\nCreated sp-rest-proxy config folder\n".green)
      )
      shell.exec(`cd src`, 
        console.log("\nConfiguring src folder\n".green)
      )
      shell.exec(`mkdir components`,
        console.log("\nCreated components folder\n".green) 
      )
      shell.exec(`mkdir containers`,
        console.log("\nCreated containers folder\n".green) 
      )
      shell.exec(`mkdir components`,
        console.log("\nCreated models folder\n".green) 
      )
      shell.exec(`mkdir styles`,
        console.log("\nCreated styles folder\n".green) 
      )
    })
  }

  const updateTemplates = (template, path) => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(template).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/${path}/${fileName}`, template[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  const installPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling mobx, mobx-react, @pnp/common @pnp/graph, @pnp/logging, @pnp/odata, @pnp/sp, datejs, mobx, mobx-react, office-ui-fabric-react, react-table, styled-components\n".cyan)
      shell.exec(`npm install --save mobx@">4.0.0 <5.0.0" mobx-react @pnp/common @pnp/graph @pnp/logging @pnp/odata @pnp/sp datejs mobx mobx-react office-ui-fabric-react react-table styled-components`, () => {
        console.log("\nFinished installing default packages\n".green)
      })      
      
      console.log("\nInstalling dev dependencies \n".cyan)
      shell.exec(`npm i --save-dev babel-polyfill babel-preset-env babel-preset-mobx mobx-react-devtools sp-rest-proxy concurrently`, () => {
        console.log("\nFinished installing dev dependencies\n".green)
        resolve()
      })
    })
  } 
  
  const updatePackageJSON = (filename, updateCb, cb) => {
    fs.readFile(filename, function (er, data) {
      // ignore errors here, just don't save it.
      try {
        data = JSON.parse(data.toString("utf8"))
      } catch (ex) {
        er = ex
      }
  
      if (er) {
        return cb()
      }
  
      updateCb(data);
      data = JSON.stringify(data, null, 2) + "\n"
      fs.writeFile(filename, data, cb)
    })
  }
