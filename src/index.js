import PrintModelComponent from './PrinterModelComponent.vue';
import helpers from './helpers';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(PrintModelComponent.name, PrintModelComponent);
        Vue.easyPrint = function (elementId,title=null,orientation='portrait') {
            return helpers.gPrint(elementId,title,orientation);
        };

        Vue.easyPrintComponent = function (component, propsData={},title=null, orientation = 'portrait') {
            return helpers.gPrintComponent(component, propsData,title, orientation);
        };
        Vue.prototype.$easyPrint = function (elementId,title=null,orientation='portrait') {
            return helpers.gPrint(elementId,title,orientation);
        };

        Vue.prototype.$easyPrintComponent = function (component, propsData={},title=null, orientation = 'portrait') {
            return helpers.gPrintComponent(component, propsData,title, orientation);
        };
}

// Create module definition for Vue.use()
const VueEasyPrinter = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VueEasyPrinter);
}


// Export component by default
export default VueEasyPrinter;

