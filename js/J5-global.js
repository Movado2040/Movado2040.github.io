// GLOBAL SCRIPT

// J5G SOCIAL


  function decodeEntity(html){
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  var obj = {url:"http://feeds.feedburner.com/entrepreneur/latest"};

  //http://feeds.gawker.com/lifehacker/full.xml

  var objParamed = $.param(obj);
  var xml;
  var $title;
  var $item;
  var $desc;
  var $link;
  var $media;
  var $creator;

  // $.ajaxPrefilter(function(options, originalOptions, jqXHR){
  //   if(options.url.match(/^https?:/)){
  //     options.headers['X-Proxy-URL'] = options.url;
  //     options.url = '/proxy.php';
  //   }
  // });


  //To parse [!CDATA] in xml document for rendering, select the element containing said [!CDATA], store its text value and place it within the element desired, example:
  // var CDATA = $(xmlDOC).find( element containing CDATA );
  // $( desired element ).html OR .text( CDATA.text() );

  // To find a namespaced element in the xml simply prefix the colon in your search string with double backslashes, for example, namespaced element: <dc:creator>, search string: "dc\\:creator"




  $.ajax({
    url:"xml/latest.xml", // For the purposes of demonstration, this version uses a local XML document, in production a dynamic JSON file of the latest news is acquired from Entrepreneur.com's feedburner through a proxy PHP script built for crossorigin access.
    // In the AJAX method, the object parameter's 'url' attribute would read as follows:
    // url: "php/simple-proxy.php?"+objParamed
    // Also the 'datatype' attribute value of this object would be 'json', for the document type of the received file would be JSON and the XML data would be stored in its 'contents' attribute as a String
    type:'GET',
    success:function(data,status,jqXHR){
      // console.log("Success");
      // console.log(data);
      //For JSON that contains an XML string
      i = 0;
      $data = data;
      xml = (data.contents)?data.contents:data,
      xmlDoc = (xml == String)?$.parseXML(xml):xml,
      $xml = $(xmlDoc),
      $item = $xml.find("item"),
      $title = $item.find("title"), //use simple textContent property
      $link = $item.find("link"), //use simple textContent property
      $webkitMedia = $item.find("content"), //use jQuery's attr method
      $webkitKeywords = $item.find("keywords"),//use simple textContent property
      $mozKeywords = $($item).find("media\\:keywords"),//use simple textContent property
      $mozMedia = $item.find("media\\:content"),
      $webkitCreator = $item.find("creator"), //use simple textContent property
      $mozCreator = $item.find("dc\\:creator"),
      keyword = null;
      $imgs = null,
      itemAlterClass = null;

      if($webkitMedia.length > 1){
        for(var v = 0;v < $webkitMedia.length;v++){
          if(v == 5){
            break;
          }else{
            keyword = $webkitKeywords[v].textContent.substring(0,$webkitKeywords[v].textContent.indexOf(","));
            switch(v){
              case 0:
                $("div[style*='background-color: teal;']").css({backgroundImage:"url("+ $($webkitMedia[v]).attr("url") +")"});
                $("div[style*='background-color: teal;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: teal;']").find(".author").text($webkitCreator[v].textContent);
                $("div[style*='background-color: teal;']").find("a").attr({href:$link[v].textContent});
              break;
              case 1:
                $("div[style*='background-color: pink;']").css({backgroundImage:"url("+ $($webkitMedia[v]).attr("url") +")"});
                $("div[style*='background-color: pink;']").find(".title").text($title[v+1].textContent);
                $("div[style*='background-color: pink;']").find(".author").text($webkitCreator[v+1].textContent);
                $("div[style*='background-color: pink;']").find("a").attr({href:$link[v].textContent});
              break;
              case 2:
                $("div[style*='background-color: black;']").css({backgroundImage:"url("+ $($webkitMedia[v]).attr("url") +")"});
                $("div[style*='background-color: black;']").find(".title").text($title[v+2].textContent);
                $("div[style*='background-color: black;']").find(".author").text($webkitCreator[v+2].textContent);
                $("div[style*='background-color: black;']").find("a").attr({href:$link[v].textContent});
              break;
              case 3:
                $("div[style*='background-color: crimson;']").css({backgroundImage:"url("+ $($webkitMedia[v]).attr("url") +")"});
                $("div[style*='background-color: crimson;']").find(".title").text($title[v+3].textContent);
                $("div[style*='background-color: crimson;']").find(".author").text($webkitCreator[v+3].textContent);
                $("div[style*='background-color: crimson;']").find("a").attr({href:$link[v].textContent});
              break;
              case 4:
                $("div[style*='background-color: yellow;']").css({backgroundImage:"url("+ $($webkitMedia[v]).attr("url") +")"});
                $("div[style*='background-color: yellow;']").find(".title").text($title[v+4].textContent);
                $("div[style*='background-color: yellow;']").find(".author").text($webkitCreator[v+4].textContent);
                $("div[style*='background-color: yellow;']").find("a").attr({href:$link[v].textContent});
              break;
            }
          }
        }
      }else{
        for(var v = 0;v < $mozMedia.length;v++){
          if(v == 5){
            break;
          }else{
            keyword = $mozKeywords[v].textContent.substring(0,$mozKeywords[v].textContent.indexOf(","));
            switch(v){
              case 0:
                $("div[style*='background-color: teal;']").css({backgroundImage:"url("+ $($mozMedia[v]).attr("url") +")"});
                $("div[style*='background-color: teal;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: teal;']").find(".author").text($mozCreator[v].textContent);
                $("div[style*='background-color: teal;']").find("a").attr({href:$link[v].textContent});
              break;
              case 1:
                $("div[style*='background-color: pink;']").css({backgroundImage:"url("+ $($mozMedia[v]).attr("url") +")"});
                $("div[style*='background-color: pink;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: pink;']").find(".author").text($mozCreator[v].textContent);
                $("div[style*='background-color: pink;']").find("a").attr({href:$link[v].textContent});
              break;
              case 2:
                $("div[style*='background-color: black;']").css({backgroundImage:"url("+ $($mozMedia[v]).attr("url") +")"});
                $("div[style*='background-color: black;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: black;']").find(".author").text($mozCreator[v].textContent);
                $("div[style*='background-color: black;']").find("a").attr({href:$link[v].textContent});
              break;
              case 3:
                $("div[style*='background-color: crimson;']").css({backgroundImage:"url("+ $($mozMedia[v]).attr("url") +")"});
                $("div[style*='background-color: crimson;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: crimson;']").find(".author").text($mozCreator[v].textContent);
                $("div[style*='background-color: crimson;']").find("a").attr({href:$link[v].textContent});
              break;
              case 4:
                $("div[style*='background-color: yellow;']").css({backgroundImage:"url("+ $($mozMedia[v]).attr("url") +")"});
                $("div[style*='background-color: yellow;']").find(".title").text($title[v].textContent);
                $("div[style*='background-color: yellow;']").find(".author").text($mozCreator[v].textContent);
                $("div[style*='background-color: yellow;']").find("a").attr({href:$link[v].textContent});
              break;
            }
          }
        }
      }



      // Fill all the containers with items (media, titles, links, creators)
        // for(;i < $media.length;i++){
        // 	// $("#feedContainer .row div").append('<img alt="'+ $title[i].textContent +'" class="j5-feedIMG" src="'+ $($media[i]).attr("url") +'"/>');
        // 	console.log(i);
        //
        // 	if(i < 5){
        // 		$("#feedContainer div#first").append('<img class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/>'); //Fill the first container with items (imagery)
        // 		console.log("less than 5");
        // 	}else if(i < 10 && i > 4){
        // 		$("#feedContainer div#second").append('<img class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/>'); //Fill the second container with items (imagery)
        // 		console.log("more than 4 and less than 10");
        // 	}else if(i < 15 && i > 9){
        // 		$("#feedContainer div#third").append('<img class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/>'); //Fill the third container with items (imagery)
        // 		console.log("more than 9 and less than 15");
        // 	}
        // }

        for(;i < $mozMedia.length;i++){
          // $("#feedContainer .row div").append('<img alt="'+ $title[i].textContent +'" class="j5-feedIMG" src="'+ $($media[i]).attr("url") +'"/>');
          // console.log(i);

          itemAlterClass = (i % 2)?"":"grid-item--width-60";

          // if(i == 0){
          // 	// $("#feedContainer div#primary").append('<img style="width:100vw;display:block;left:0;top:0;transform: translate(-50vw,0);bottom:0;transform-origin:0% 50%;" class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/>'); //Fill the first container with items (imagery)
          //
          // 	$("#feedContainer div#primary").css({backgroundImage:'url('+ $($media[i]).attr("url") +')'}); //Fill the first container with items (imagery)
          // }else{
          // 	$("#feedContainer div.grid").append('<div class="grid-item ' + itemAlterClass + '"><img class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/></div>'); //Fill the second container with items (imagery)
          // }

          // $("#feedContainer div.grid").append('<div class="grid-item ' + itemAlterClass + '"><img class="j5-feedIMG" alt="' + $title[i].textContent + '" src="' + $($media[i]).attr("url") + '"/></div>'); //Fill the second container with items (imagery)
        }

        $imgs = $("div.grid-item");

        // $($imgs[0]).addClass("grid-item--width-40");
        // $($imgs[2]).addClass("grid-item--width-40");
        // $($imgs[8]).addClass("grid-item--width-40");
        // $($imgs[10]).addClass("grid-item--width-40");

        // var $grid = $(".grid").masonry({
        // 	columnWidth:".grid-sizer",
        // 	itemSelector:".grid-item"
        // 	// percentPosition:true
        // });
        //
        // $grid.imagesLoaded().progress(function(){
        // 	$grid.masonry('layout');
        // });
    },
    error:function(jqXHR,status,errorThrown){
      // console.log("Error");
      // console.log(errorThrown);
    }
  });

  // console.log(objParamed);

  // $.get("simple-proxy.php?"+objParamed,function(data){
  //   $("body").html(data);
  // });

  // $("#rssBody").load(
  //   'proxy.php',{
  //     csurl:'http://feeds.ign.com/ign/all'
  //   }
  // )



// END OF J5G SOCIAL
