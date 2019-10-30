# Description
**vue-easy-printer** plugin help you to convert your html page to pdf. Features includes converting using the DOM **elementId , print on portrait or landscape orientation** , you could also **print you component directly** !!

# How to install

    npm i vue-easy-printer

## Install on your Vuejs Entry Page (main.js or app.js)

    import Vue from 'vue';
    import VueEasyPrinter from 'vue-easy-printer';
    
    Vue.use(VueEasyPrinter);
    

# Usage
Once you have installed the package and registered to you Vue app , two methods are now avalable on every Component. They are $easyPrint and $easyPrintComponent .`

 1. **$easyPrint**
 

    ```$easyPrint(elementId,title=null,orientation='portrait',preview=false)```
    
    **elementId**: the string corresponding to the id of the DOM element you would like to print.
    **title**: the string corresponding to the title of the page you are going to create.
    **orientation**: the string corresponding to the printing orientation of your page. it can be 'portrait' or 'lanscape'. The default orientation is landscape
    

 2. **$easyPrintComponent**
 

    ```$easyPrintComponent (component, propsData={},title=null, orientation = 'portrait',preview=false)```
     **component**: The component you want you print into pdf.
     **propsData**: props data to pass to this component.
    
    
    In your component file you can just call : 
    ```
    this.$easyPrint('myElementId','Awesome Page title','landscape')
    ```
    or 
    ``` 
    import MyAwesomeComponent from './MyComponent';
    this.$easyPrintComponent(MyAwesomeComponent,{name:'loic',country:'Cameroon'});
     ```
    

