$(document).ready(function(){
//alert("Document Read"); 

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}

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

//******************************************************************************
//                   SAVE AND DONE 
//******************************************************************************

$(document).on("click touch","#save_and_done", function () {

       url = "http://www.weprintbarcodes.com/SIS/save_data.php?dmax_scan=" + $("#dmax_scan").val() + "&dmax_status=" + $('input[name=dmax_status]:checked').val() ;
			 //alert(url);
			 
			 $("#scratch_space").load(encodeURI(url), function() {
			       	  $(".page").css("display", "none"); 
		           $("#main_menu").css("display", "block"); 
			     }); 

}); 

//******************************************************************************
//                   TAKE PICTURE 
//******************************************************************************

$(document).on("click touch", "#take_picture", function () {
   console.log("lets take a picture"); 
	 alert("lets take a picture"); 
	 
	 function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
/**/
function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
} 
	 

}); 

//******************************************************************************
//.                    SHOW DATA 
//******************************************************************************

$(document).on("click touch", "#show_data", function () {

											//alert("Make div vissible - and load with ajax"); 
										     $(".page").css("display", "none"); 
		                     $("#page_3").css("display", "block"); 
							 					url = "http://www.weprintbarcodes.com/SIS/show_data.php"; 
												$("#page_3").load(url); 
												

}); 




}); 
