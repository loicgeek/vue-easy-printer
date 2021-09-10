<template>
    <div :class="orientation">
        <div  class="content"  v-html="content">
        </div>
    </div>
</template>

<script>
    export default {
        name:'PrinterModel',
        props:{
            orientation:{type:String, enum:['portrait','landscape'],default:'landscape'},
            content:{type:String},
            title:{type:String}
        }
    }
</script>

<style scoped>

    body {
        margin: 0;
        background: #CCCCCC;
    }
    div.portrait, div.landscape {
        margin: 10px auto;
        padding: 5mm;
        border: solid 1px black;
        overflow: hidden;
        page-break-after: always;
        background: white;
    }
    div.portrait {
        width: 320mm;
        height: 370mm;
    }
    div.landscape {
        width: 370mm;
        height: 320mm;
    }
    @media print {
        .content{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        body {
            background: none;
            -ms-zoom: 1.665;
        }
        div.portrait, div.landscape {
            margin: 0;
            padding: 0;
            border: none;
            background: none;
        }
        div.landscape {
            transform: rotate(270deg) translate(-370mm, 0);
            transform-origin: 0 0;
        }
    }
</style>
