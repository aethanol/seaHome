

$(document).ready(function(){

    $('#calendar').fullCalendar({

        header: {

			left: 'prev,next today',

			center: 'title',

			right: 'month,agendaWeek,agendaDay'

		},

		defaultDate: '2016-05-12',

		editable: true,

		eventLimit: true, // allow "more" link when too many events

		events: [

			{

				title: 'Resources and Services',

				start: '2016-05-07',

				end: '2016-05-10'

			},

			{

				id: 999,

				title: 'Book Swap',

				start: '2016-05-09T16:00:00'

			},

			{

				id: 999,

				title: 'Weekly Paperworkshop',

				start: '2016-05-16T16:00:00'

			},

			{

				title: 'General Information',

				start: '2016-05-11',

				end: '2016-05-13'

			},

			{

				title: 'Free Lunch',

				start: '2016-05-12T12:00:00'

			},

			

			{

				title: 'Resources and Services',

				start: '2016-05-12T17:30:00'

			},

			{

				title: 'Click for Google',

				url: 'http://google.com/',

				start: '2016-05-28'

			}

		]

    });

});	

