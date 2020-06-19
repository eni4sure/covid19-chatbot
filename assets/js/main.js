var messages_content = $('.messages-content');
var greeting_intro = 0;
var response;
var main_data;

$(document).ready(function() {

	$.getJSON("https://api.countapi.xyz/hit/eni4sure.github.io/hngi-chatbot", function(view) {
		$("#page_view_no").html( view.value );
	});

	$.getJSON("https://disease.sh/v2/countries/NG", function(response) {
		main_data = response;
	});

});

$(window).load(function() {
	messages_content.mCustomScrollbar();
	setTimeout(function() {
		output_message();
	}, 100);
});

function updateScrollbar() {
	messages_content.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	});
}

function insert_my_message() {
	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-me">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	updateScrollbar();
	setTimeout(function() {
		output_message();
	}, 1000 + (Math.random() * 20) * 100);
}

// On submit message
$('.message-submit').click(function() {
	insert_my_message();
});
$(window).on('keydown', function(e) {
	if (e.which == 13) {
		insert_my_message();
		return false;
	}
});

function output_message() {
	$('<div class="message loading new"><div class="avatar"><img src="assets/img/me.png" /></div><span></span></div>').appendTo($('.mCSB_container'));
	updateScrollbar();

	response = null;
	message_react_value = null;
	message_react_value = $('.message-input').val();
	$('.message-input').val(null);

	if ( greeting_intro == 0 ) {

		response = '<b>Hi</b> there, I\'m <b>Eni4sure</b> and you are?';
	}

	if ( greeting_intro == 1 ) {

		response = 'Nice to meet you <br> So here\'s the thing I work with codes <br><br> Here they are: <br> <b>0</b>: for covid-19 helplines <br> <b>1</b>: for covid-19 updates <br> <b>2</b>: for covid-19 symptoms <br> <b>3</b>: for covid-19 prevention <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
	}

	if ( greeting_intro > 1) {

		if ( message_react_value == "0" || message_react_value == "1" || message_react_value == "2" || message_react_value == "3" ) {

			if ( message_react_value == "0") {

				response = ` Covid-19 official toll free helpline <br> ================== <br> <a href="tel:+23480097000010">+23480097000010</a> <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a> `;
			}

			if ( message_react_value == "1") {

				response = ` Here is the summary of Covid-19 in Nigeria <br><br> New Confirmed: <b>`+main_data.todayCases+`</b> <br> Total Confirmed: <b>`+main_data.cases+`</b> <br> New Death: <b>`+main_data.todayDeaths+`</b> <br> Total Death: <b>`+main_data.deaths+`</b> <br> New Recoveries: <b>`+main_data.todayRecovered+`</b> <br> Total Recovered: <b>`+main_data.recovered+`</b> <br><br> <b>Stay Home, Stay Safe.</b> <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a> `;
			}

			if ( message_react_value == "2") {

				response = ` Some of the symptoms of the covid-19 disease are: <br><br> - Fever <br> - Fatigue <br> - Dry and consistent cough <br> - Difficulty in breathing <br> - Runny or Stuffy nose <br> - Muscle aches, body aches or headaches. <br><br> If you are experiencing any of these, please call the covid-19 toll free now ! <br> <a href="tel:+23480097000010">+23480097000010</a> <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a> `;
			}

			if ( message_react_value == "3") {

				response = ` Some prevention tips for covid 19: <br><br> - <b>STAY</b> home as much as you can <br> - <b>KEEP</b> a safe distance <br> - <b>WASH</b> hands often <br> - <b>COVER</b> your cough <br> - <b>SICK?</b> Call ahead <a href="tel:+23480097000010">+23480097000010</a> <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a> `;
			}

		} else {

			response = 'I don\'t understand that! <br> Like I said before, I work with codes <br><br> Here they are again: <br> <b>0</b>: for covid-19 helplines <br> <b>1</b>: for covid-19 updates <br> <b>2</b>: for covid-19 symptoms <br> <b>3</b>: for covid-19 prevention <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
		}
	}

	if ( response == null ) {

		response = 'Nice to meet you <br> So here\'s the thing I work with codes <br><br> Here they are: <br> <b>0</b>: for covid-19 helplines <br> <b>1</b>: for covid-19 updates <br> <b>2</b>: for covid-19 symptoms <br> <b>3</b>: for covid-19 prevention <br><br> I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
	}

	greeting_intro++;

	setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><div class="avatar"><img src="assets/img/me.png" /></div>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
		updateScrollbar();
	}, 1000 + (Math.random() * 20) * 100);

}