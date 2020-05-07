$(document).ready(function() {

  $('#button1').click(function() {
    
    $('#zestimate').empty();
    $('#display').empty();
    var addr = $('#addr').val().split(' ').join('+');
    var city = $('#city').val();
    var state = $('#state').val();
    var zpidUrl = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz17jf5l8g45n_9k5bc&address=' + addr + '&citystatezip=' + city + '%2C+' + state;

    $.ajax({
      url: 'http://localhost:3000/integrations/zillow',
      type: 'POST',
      contentType: 'application/json;charset=utf-8',
      dataType: 'json',
      processData: false,
      data: JSON.stringify({zpidUrl}),
      error: function(err){
        console.log(err);
      },
    }).done(function(result) {
        result = jQuery.parseXML(result);
        var zestimate = result.getElementsByTagName('amount')[0].childNodes[0].nodeValue;
        var appendZestimate = $('<li class=\'li\'></li>').text('Zestimate: $ + ' + zestimate +  ' + USD');

        var yearBuilt = result.getElementsByTagName('yearBuilt')[0].childNodes[0].nodeValue;
        var appendyearBuilt = $('<li class=\'li\'></li>').text('Year Built: ' + yearBuilt);

        var useCd = result.getElementsByTagName('useCode')[0].childNodes[0].nodeValue;
        var appenduseCd = $('<li class=\'li\'></li>').text('Use Code: ' + useCd);

        var sqft = result.getElementsByTagName('finishedSqFt')[0].childNodes[0].nodeValue;
        var appendSqft = $('<li class=\'li\'></li>').text('Total Square Footage: ' + sqft);

        var totalRooms = result.getElementsByTagName('totalRooms')[0].childNodes[0].nodeValue;
        var appendtotalRooms = $('<li class=\'li\'></li>').text('Total Rooms: ' + totalRooms);

        var bedrooms = result.getElementsByTagName('bedrooms')[0].childNodes[0].nodeValue;
        var appendbedrooms = $('<li class=\'li\'></li>').text('Total Bedrooms: ' + bedrooms);

        var bathrooms = result.getElementsByTagName('bathrooms')[0].childNodes[0].nodeValue;
        var appendbathrooms = $('<li class=\'li\'></li>').text('Total Bathrooms: ' + bathrooms);

        $('#zestimate').append(appendZestimate, appendyearBuilt, appenduseCd, appendSqft, appendtotalRooms, appendbedrooms, appendbathrooms);

      });

  });

});
