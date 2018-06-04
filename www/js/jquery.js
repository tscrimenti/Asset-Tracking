$(document).ready(function(){
//alert("Document Read"); 

$("#scan_button").on("click touch", function() {
       cordova.plugins.barcodeScanner.scan(
            function (result) {
                //alert("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
								$("#main_menu").css("display","none"); 
								$("#page_1").css("display", "block"); 
								url = "http://www.weprintbarcodes.com/SIS/input_status.php?dmax_scan=" + result.text; 
								$("#page_1").load(url); 
              },
             function (error) {
                alert("Scanning failed: " + error);
              }
            );
       }); 
			 
//******************************************************************************
//                   CHANGE PAGE 
//******************************************************************************

$(document).on("click touch", ".page_button", function () {
		
	  $(".page").css("display", "none"); 
		page_to_open = "#" + $(this).attr("page_to_open");
		//alert("chaneg to page " + page_to_open ); 
		$(page_to_open).css("display", "block"); 
										//url = "http://www.weprintbarcodes.com/sql/pg_connection.php"; 
										//alert("load");
								//$(this).load(url); 
		

});		 


//******************************************************************************
//                    SAVE AND SCAN AGAIN 
//******************************************************************************


				$(document).on("click touch", "#save_and_scan_again", function () {
         											//alert("save and scan again"); 
				 											//alert("Status = " + $('input[name=dmax_status]:checked').val() );
				 url = "http://www.weprintbarcodes.com/SIS/save_data.php?dmax_scan=" + $("#dmax_scan").val() + "&dmax_status=" + $('input[name=dmax_status]:checked').val() ;
				 //alert(encodeURI(url)); 
				 $("#page_1").load(encodeURI(url), function() {
				    cordova.plugins.barcodeScanner.scan(
            function (result) {
                //alert("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
								$("#main_menu").css("display","none"); 
								$("#page_1").css("display", "block"); 
								url = "http://www.weprintbarcodes.com/SIS/input_status.php?dmax_scan=" + result.text; 
								$("#page_1").load(url); 
              },
             function (error) {
                alert("Scanning failed: " + error);
              }
            );
				 
				 }); 
				 

}); 

}); 
