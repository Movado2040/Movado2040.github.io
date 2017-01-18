(function($){

// window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mosIndexedDB || window.OIndexedDB || window.msIndexedDB;
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction;
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange || window.OIDBKeyRange;
//
// if(!window.indexedDB){
// 	window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
// }
//
// dbVersion = 1;
//
// var db;
// var request = window.indexedDB.open("MyTestDatabase",3);
//
// var peepsData = [{name:"Scott Stevens",birthday:"01/23/1978",email:"attackOfTheSteves@gmail.com",id:"1"},{name:"Jenna Haze",birthday:"07/12/1984",email:"PartyHardWKBabi@yahoo.com",id:"2"}];
//
// request.onerror = function(event){
// 	alert();
// }
//
// request.onsuccess = function(event){
// 	var db = event.target.result;
// }
//
// request.onupgradeneeded = function(event){
// 	var db = event.target.result;
//
// 	var objectStore = db.createObjectStore("peeps",{keyPath:"id"});
//
// 	objectStore.createIndex("name","name",{unique:false});
//
// 	objectStore.createIndex("birthday","birthday",{unique:false});
//
// 	objectStore.createIndex("email","email",{unique:true});
//
// 	objectStore.transaction.oncomplete = function(){
// 		var customerObjectStore = db.transaction("peeps","readwrite").objectStore("peeps");
//
// 		var request = customerObjectStore.get("2");
//
// 		request.onsuccess = function(event){
// 			var data = event.target.result;
//
// 			data.name = "Sandra Bullock";
//
// 			customerObjectStore.put(data);
// 		}
//
// 		request.onerror = function(){
// 			alert("There was an error in acquiring record/records");
// 		}
//
// 		var singleKeyRange = IDBKeyRange.only("Sandra Bullock");
// 		var lowerKeyRange = IDBKeyRange.lowerBound("Sandra Bullock");
// 		var upperKeyRange = IDBKeyRange.upperBound("Sandra Bullock");
// 		var boundKeyRange = IDBKeyRange.bound("Sandra Bullock","Scott Stevens");
//
// 		customerObjectStore.openCursor().onsuccess = function(event){
// 			var cursor = event.target.result;
// 			if(cursor){
// 				console.log("The customers name is:"+ cursor.name +", birthday is:"+ cursor.birthday +", and email is:"+ cursor.email);
// 			}
// 		}
//
//
// 	}
// }

/* Load in Projects_Data.json for information on each project */
$.when( $.ajax("Projects_Data.json",{success:function(data,status,jqXHR){

	console.log("We have successfully gotten Projects_Data from server. " + data.projects[0].title );

	for(i = 0; i<data.projects.length; i++){
		console.log(data.projects[i].title);
	};

} }) ).then(function(){console.log("We made it, Projects_Data is here") });



// $.ajax("js/slappy.json",{
// 	dataType:"json",
// 	method:"GET",
// 	success:function(data,status,jqXHR){
//
// 	}
// });


// for(var o = 0; 0 < 18; o++){
// 	ncrmnt += o;
// 	port_dataDeffered[o] = $.ajax("images/Projects/project_" + ncrmnt + "/slappy.json",
//  {success:function(data,status,jqXHR){console.log("The first name is " + data.names[0]);},
//  error:function(){console.log("we have an error, a total failure may have taken place, expect no results");},
//  dataType:"json",
//  method:"GET"});
//
// 	if(ncrmnt !== 18){
// 		theWhen += " port_dataDeffered["+ o +"],";
// 	}else{
// 		theWhen += " port_dataDeffered["+ o +"]).then(function(){console.log('Deferred requests were successful.')});";
// 	}
// }



// document.head.appendElement( document.createElement("script") );
// document.getElementsByTagName("script")[(document.getElementsByTagName("script").length)].innerHTML = theWhen;




	console.log("I'm ready");
	var img_count = 0;


/* Making sure the images have loading in the content rows */
	$('.img-item').load(function(){
		console.log("Hotspot front img loaded in correctly. YAY!");
		img_count++;
		console.log("The image count is " + img_count);
	});


/* A test for DOM changes, capturing the entire html element and watching its children */
// 	var target = $('html');
// 	var count = 0;
//
// 	var observer = new MutationObserver(function(mutations){
// 		mutations.forEach(function(mutation){
// 			count++;
// 			console.log(mutation.type + ", " + count++);
// 		});
// 	});
//
// 	var config = {childList:true,attributes:false,characterData:true,subtree:true};
//
// observer.observe(target[0],config);


			var port_items = $(".port-item a, .float-item");
			var port_items_floats = $(".float-item");
			var port_jumbotron = $(".port-jumbotron");
			var jumbotron_time;
			$(port_items).on("click",function(){

				if($(port_jumbotron).css("display") != "block"){
					$(port_jumbotron).css({display:"block"});
					$('.carousel').carousel('cycle');
					$(".port-container").removeClass('close-port-jumbotron');

					//$("#port-items-cont").addClass("close-items-box");

					jumbotron_time = setTimeout(function(){
						$("#port-items-cont").addClass("close-items-box");
						clearTimeout(jumbotron_time);
					},0);

				}

				$('.hotspot.front').removeClass('close-front');
				$('.portfolio-desc').css({display:'none'});


				console.log("Clicked");
				return true;
			} );

			/*$(port_items_floats).hover(function(e){
				e.stopImmediatePropagation();
				console.log("I'm hovered");
				$(this).toggleClass("beans");
			});*/

			$(".end .port-close").on("click",function(event){
				event.preventDefault();
				$(port_jumbotron).css({display:"none"});
				$('.hotspot.front').removeClass('close-front');
				$("#port-items-cont").removeClass("close-items-box");
				$('.carousel').carousel('pause');
				$('.port-container').addClass('close-port-jumbotron');
				$("#j5carousel2").css({"z-index":"2"});
				$('.portfolio-desc').css({display:'block'});
				return true;
			});

			$(".front .port-close").on("click",function(event){
				event.preventDefault();
				$("#j5carousel2").css({"z-index":""});
				$(this).parents('.hotspot').addClass('close-front');
				return true;
			});
})(jQuery)
