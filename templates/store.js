module.exports =`import {extendObservable, configure, ObservableMap, autorun, observable} from 'mobx'; 
import { sp, EmailProperties  } from "@pnp/sp";
import Logger from 'js-logger';


sp.setup({
    sp: {
      headers: {
        Accept: "application/json;odata=verbose",
      },
      
    },
  })
  configure({ isolateGlobalState: true});

class Store{
    constructor(){
        extendObservable(this, {
            url: window.location.href,
            protocol: window.location.href.split(':')[0] ,
            error: null,
            status: {},
            settings: /*eslint-disable*/ spReactApp.settings, /*esling-enable*/
            spSiteInfo: null,
        });
        
        this.getSPSiteInfo(); 
    }
    getSPSiteInfo = async()=>{
        this.spSiteInfo =  await sp.web
        .get()
        .then(w=>{
            Logger.useDefaults(); 
            Logger.debug(w); 
            return  "Host: " + w.Url + " Site Name: " + w.Title + " Description: " + w.Description ;
        })
    }
    
}

const store = new Store; 
export default store;


`