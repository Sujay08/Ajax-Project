var $overlay = $('<div id="overlay"> </div>');
var $image = $('<img id="picture">');

$(document).ready(function() {
  
 $('form').submit(function (event) {
    event.preventDefault();
    // not AJAX, just cool looking

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var search = $('#search').val();
    var flickrOptions = {
      tags: search,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '';
      $.each(data.items,function(i,photo) {
        photoHTML += '<div style="display:inline" class="col-md-3">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></div>';
      }); // end each
      photoHTML += '';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click

    $('<a></a>').click(function (event){
        event.preventDefault();
        

    });

}); // end ready