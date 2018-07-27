module.exports = `import {extendObservable, configure, ObservableMap, autorun, observable} from 'mobx'; 
import { sp, EmailProperties  } from "@pnp/sp";


class Store{
    constructor(){
        extendObservable(this, {
            url: window.location.href,
            protocol: window.location.href.split(':')[0] ,
            error: null,
            status: {},
            settings: /*eslint-disable*/ spReactApp.settings /*esling-enable*/
        });
        
        configure({ isolateGlobalState: true});
    }
}

const store = new Store; 
export default store;

`