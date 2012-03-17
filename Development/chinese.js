$(document).ready(function() {
	$('#container').css('width', ($(window).width()-10) );
	
	var fontsize = parseInt($('p', '#content').css('font-size'));
	var contHeight = $('#container').height() - 100;	
	var nrofChar = Math.floor((contHeight - fontsize * 2) / fontsize);

	$('p', '#content').each( function(){
		var string = $(this).html();
		var loops = (string.length - string.split(' ').length-1)/(nrofChar);
		var textarr = new Array();

		var charToAdd = 0;
		for( var i = 0; i < loops; i++ ){
			var start = i * nrofChar;
			
			var nrofsings = (string.substr(start, nrofChar).split(' ').length)-1
			nrofsings = i == 0 ? nrofsings - 2 : nrofsings;
			
			var text = string.substr( start + charToAdd, nrofChar+nrofsings ); 
			textarr.push( text );
			
			charToAdd += nrofsings;
		}
		var existingClasses = $(this).attr('class');
		var existingIds = $(this).attr('id');
	

		if( parseInt(textarr.length) > 0 )
		{
			var id = existingIds ? 'id="'+existingIds+'"' : '';
			var text = '<p '+id+' class="'+existingClasses+' first">'+ textarr.join('</p><p>')  +'</p>';
			$(this).replaceWith(text)
		}else{
		 console.log(textarr.length)
		}
	});
	
	var otherlength = parseInt($('h2').css('width')) + parseInt($('h2').css('padding-left')) + parseInt($('h2').css('padding-right'));
	var ref = $('p', '#content').first();  
	var padding = parseInt(ref.css('padding-left'))
	
	var colwidth = $('p', '#content').first().width() + padding * 4

	var elements = 	$('p', '#content');
	var numberofColstotal = $('p', '#content').size();
	var nrOfcolInPage = Math.floor(($(window).width()/2) / colwidth)
//	var nrOfcolInPage = 15

	for( var m = 0; m < numberofColstotal; m++ ){
		if( m%nrOfcolInPage == false && m > 0 ){
			$(elements[m]).addClass('page');
		}
	}
	
	var newlength = numberofColstotal * colwidth + 3000;
	$('#content').css('width', newlength + otherlength);
	$('#content').css('left', -(newlength-parseInt($(window).width())+80 ))

	});