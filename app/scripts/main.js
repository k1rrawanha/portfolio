var s, App = {
	settings: {
		chart: $('#skills-chart').get(0).getContext('2d'),
		data: [
		    {
		        value: 40,
		        color:'#D086F4',
		        highlight: '#DACDE1',
		        label: 'HTML5'
		    },
		    {
		        value: 30,
		        color: '#A349CF',
		        highlight: '#B59BC2',
		        label: 'CSS3/SASS/LESS'
		    },
		    {
		        value: 20,
		        color: '#8B35B5',
		        highlight: '#734787',
		        label: 'WORDPRESS'
		    },
		    {
		        value: 10,
		        color: '#622481',
		        highlight: '#56296D',
		        label: 'JQUERY'
		    }
		],
		options: {
			segmentShowStroke : false,
			percentageInnerCutout : 70,
			responsive: true,
			legendTemplate : '<ul class="skills-legend__list <%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li class="skills-legend__item" style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
		}
	},

	init: function() {

		// Establish settings object to the 's' variable
		s = this.settings;

		$('.smooth-scroll').smoothScroll();

		var chart = new Chart(s.chart).Doughnut(s.data, s.options);

		$('.skills__legend').append(chart.generateLegend());
	}
};

// Fire the application
App.init();

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 2000,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});