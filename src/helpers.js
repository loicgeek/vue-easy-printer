import PrintModelComponent from './PrinterModelComponent.vue';

export default {
    gPrint(elementId, title = null, orientation = 'portrait') {
        console.log('plugin en cours');
        // Get HTML to print from element
        let prtHtml = document.getElementById(elementId).outerHTML;

        if (!prtHtml) {
            alert('element not Found')
        }
        var printModel = new Vue({
            ...PrintModelComponent,
            propsData: {
                content: prtHtml,
                orientation: orientation,
            }
        }).$mount();

        // Get all stylesheets HTML
        let stylesHtml = '';
        for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
            stylesHtml += node.outerHTML;
        }
        // Open the print window
        const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

        WinPrint.document.write(`<!DOCTYPE html>
                                    <html>
                                      <head>
                                      <title>${title}</title>
                                        ${stylesHtml}
                                      </head>
                                      <body>
                                        ${printModel.$el.outerHTML}
                                      </body>
                                    </html>`);

        setTimeout(() => {

            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.open();
            WinPrint.print();
            WinPrint.close();
        }, 1000);
    },
    gPrintComponent(component, propsData={},title=null, orientation = 'portrait') {
        console.log('dedans');
        // Get HTML to print from element
        var printComponent = new Vue({
            ...component,
            propsData: {
                ...propsData
            }
        }).$mount();

        if(!printComponent){
            alert('Check Your Component');
        }

        var printModel = new Vue({
            ...PrintModelComponent,
            propsData: {
                content: printComponent.$el.outerHTML,
                orientation: orientation,
            }
        }).$mount();

        // Get all stylesheets HTML
        let stylesHtml = '';
        for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
            stylesHtml += node.outerHTML;
        }
        // Open the print window
        const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

        WinPrint.document.write(`<!DOCTYPE html>
                                    <html>
                                      <head>
                                      <title>${title}</title>
                                        ${stylesHtml}
                                      </head>
                                      <body>
                                        ${printModel.$el.outerHTML}
                                      </body>
                                    </html>`);

        setTimeout(() => {
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.open();
            WinPrint.print();
            WinPrint.close();
        }, 1000);
    },

};
