document.getElementById("create").addEventListener('click', function(){

    var val = document.getElementById("txt-input").value;

    JsBarcode("#barcode", val );


})