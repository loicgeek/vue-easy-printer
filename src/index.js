import PrintModelComponent from './PrinterModelComponent.vue';
import helpers from './helpers';

const VueEasyPrinter = {
    install(Vue, option) {
        Vue.component(PrinterModel.name, PrinterModel);
        Vue.prototype.$easyPrint = function (elementId,title=null,orientation='portrait') {
            return helpers.gPrint(elementId,title,orientation);
        };

        Vue.prototype.$easyPrintComponent = function (component, propsData={},title=null, orientation = 'portrait') {
            return helpers.gPrintComponent(component, propsData,title, orientation);
        };

    }
};
export default VueEasyPrinter;

