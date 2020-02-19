$(document).ready(() =>{

  $('#button1').click(() => {
    
    $('#zestimate').empty();
    $('#display').empty();
    let addr = $('#addr').val().split(' ').join('+');
    let city = $('#city').val();
    let state = $('#state').val();
    let zpidUrl = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz17jf5l8g45n_9k5bc&address=${addr}&citystatezip=${city}%2C+${state}`;

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
    }).done((result) => {
        result = jQuery.parseXML(result);
        let zestimate = result.getElementsByTagName('amount')[0].childNodes[0].nodeValue;
        let appendZestimate = $('<li class=\'li\'></li>').text(`Zestimate: $${zestimate} USD`);

        let yearBuilt = result.getElementsByTagName('yearBuilt')[0].childNodes[0].nodeValue;
        let appendyearBuilt = $('<li class=\'li\'></li>').text(`Year Built: ${yearBuilt}`);

        let useCd = result.getElementsByTagName('useCode')[0].childNodes[0].nodeValue;
        let appenduseCd = $('<li class=\'li\'></li>').text(`Use Code: ${useCd}`);

        let sqft = result.getElementsByTagName('finishedSqFt')[0].childNodes[0].nodeValue;
        let appendSqft = $('<li class=\'li\'></li>').text(`Total Square Footage: ${sqft}`);

        let totalRooms = result.getElementsByTagName('totalRooms')[0].childNodes[0].nodeValue;
        let appendtotalRooms = $('<li class=\'li\'></li>').text(`Total Rooms: ${totalRooms}`);

        let bedrooms = result.getElementsByTagName('bedrooms')[0].childNodes[0].nodeValue;
        let appendbedrooms = $('<li class=\'li\'></li>').text(`Total Bedrooms: ${bedrooms}`);

        let bathrooms = result.getElementsByTagName('bathrooms')[0].childNodes[0].nodeValue;
        let appendbathrooms = $('<li class=\'li\'></li>').text(`Total Bathrooms: ${bathrooms}`);

        $('#zestimate').append(appendZestimate, appendyearBuilt, appenduseCd, appendSqft, appendtotalRooms, appendbedrooms, appendbathrooms);

      });

  });

});
