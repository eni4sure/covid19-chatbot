// Define variables
var messagesContent = $('.messages-content');
var greetingIntro = 0;
var response;
var mainData;

// Document ready event
$(document).ready(function () {
    // Fetch page views
    $.getJSON("https://api.countapi.xyz/hit/eni4sure.github.io/hngi-chatbot", function (view) {
        $("#page_view_no").html(view.value);
    });

    // Fetch COVID-19 data
    $.getJSON("https://disease.sh/v2/countries/NG", function (data) {
        mainData = data;
    });
});

// Window load event
$(window).load(function () {
    // Initialize custom scrollbar
    messagesContent.mCustomScrollbar();
    setTimeout(function () {
        outputMessage();
    }, 100);
});

// Function to update scrollbar
function updateScrollbar() {
    messagesContent.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

// Function to insert user's message
function insertMyMessage() {
    var msg = $('.message-input').val();
    if ($.trim(msg) === '') {
        return false;
    }
    $('<div class="message message-me">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    updateScrollbar();
    setTimeout(function () {
        outputMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

// Event handler for submit button
$('.message-submit').click(function () {
    insertMyMessage();
});

// Event handler for Enter key
$(window).on('keydown', function (e) {
    if (e.which === 13) {
        insertMyMessage();
        return false;
    }
});

// Function to generate bot's response
function outputMessage() {
    $('<div class="message loading new"><div class="avatar"><img src="assets/img/me.png" /></div><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
    response = null;
    var messageReactValue = $('.message-input').val();
    $('.message-input').val(null);

    if (greetingIntro === 0) {
        response = '<b>Hi</b> there, I\'m <b>Eni4sure</b> and you are?';
    }

    if (greetingIntro === 1) {
        response =
            'Nice to meet you <br> So here\'s the thing, I work with codes <br><br>' +
            'Here are your options: <br>' +
            '<b>0</b>: for COVID-19 helplines <br>' +
            '<b>1</b>: for COVID-19 updates <br>' +
            '<b>2</b>: for COVID-19 symptoms <br>' +
            '<b>3</b>: for COVID-19 prevention <br><br>' +
            'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
    }

    if (greetingIntro > 1) {
        if (messageReactValue === "0" || messageReactValue === "1" || messageReactValue === "2" || messageReactValue === "3") {
            if (messageReactValue === "0") {
                response =
                    'COVID-19 official toll-free helpline <br> ================== <br>' +
                    '<a href="tel:+23480097000010">+23480097000010</a> <br><br>' +
                    'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
            }

            if (messageReactValue === "1") {
                response =
                    'Summary of COVID-19 in Nigeria <br><br>' +
                    'New Confirmed: <b>' + mainData.todayCases + '</b> <br>' +
                    'Total Confirmed: <b>' + mainData.cases + '</b> <br>' +
                    'New Deaths: <b>' + mainData.todayDeaths + '</b> <br>' +
                    'Total Deaths: <b>' + mainData.deaths + '</b> <br>' +
                    'New Recoveries: <b>' + mainData.todayRecovered + '</b> <br>' +
                    'Total Recovered: <b>' + mainData.recovered + '</b> <br><br>' +
                    '<b>Stay Home, Stay Safe.</b> <br><br>' +
                    'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
            }

            if (messageReactValue === "2") {
                response =
                    'Common symptoms of COVID-19 include: <br><br>' +
                    '- Fever <br>' +
                    '- Fatigue <br>' +
                    '- Dry and consistent cough <br>' +
                    '- Difficulty in breathing <br>' +
                    '- Runny or stuffy nose <br>' +
                    '- Muscle aches, body aches, or headaches <br><br>' +
                    'If you are experiencing any of these, please call the COVID-19 toll-free number now! <br>' +
                    '<a href="tel:+23480097000010">+23480097000010</a> <br><br>' +
                    'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
            }

            if (messageReactValue === "3") {
                response =
                    'Prevention tips for COVID-19: <br><br>' +
                    '- <b>STAY</b> home as much as you can <br>' +
                    '- <b>KEEP</b> a safe distance <br>' +
                    '- <b>WASH</b> your hands often <br>' +
                    '- <b>COVER</b> your cough <br>' +
                    '- <b>FEEL SICK?</b> Call ahead <a href="tel:+23480097000010">+23480097000010</a> <br><br>' +
                    'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
            }
        } else {
            response =
                'I don\'t understand that! <br>' +
                'As I mentioned before, I work with codes <br><br>' +
                'Here are your options again: <br>' +
                '<b>0</b>: for COVID-19 helplines <br>' +
                '<b>1</b>: for COVID-19 updates <br>' +
                '<b>2</b>: for COVID-19 symptoms <br>' +
                '<b>3</b>: for COVID-19 prevention <br><br>' +
                'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
        }
    }

    if (response === null) {
        response =
            'Nice to meet you <br> So here\'s the thing, I work with codes <br><br>' +
            'Here are your options: <br>' +
            '<b>0</b>: for COVID-19 helplines <br>' +
            '<b>1</b>: for COVID-19 updates <br>' +
            '<b>2</b>: for COVID-19 symptoms <br>' +
            '<b>3</b>: for COVID-19 prevention <br><br>' +
            'I was made by: <a href="https://linkedin.com/in/eniola-osabiya" target="_blank">Eniola Osabiya</a>';
    }

    greetingIntro++;

    setTimeout(function () {
        $('.message.loading').remove();
        $('<div class="message new"><div class="avatar"><img src="assets/img/me.png" /></div>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
        updateScrollbar();
    }, 1000 + (Math.random() * 20) * 100);
}
