"use strict";var s;({settings:{chart:$("#skills-chart").get(0).getContext("2d"),data:[{value:40,color:"#D086F4",highlight:"#DACDE1",label:"HTML5"},{value:30,color:"#A349CF",highlight:"#B59BC2",label:"CSS3/SASS/LESS"},{value:20,color:"#8B35B5",highlight:"#734787",label:"WORDPRESS"},{value:10,color:"#622481",highlight:"#56296D",label:"JQUERY"}],options:{segmentShowStroke:!1,percentageInnerCutout:70,responsive:!0,legendTemplate:'<ul class="skills-legend__list <%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li class="skills-legend__item" style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'}},init:function(){s=this.settings,$(".smooth-scroll").smoothScroll();var e=new Chart(s.chart).Doughnut(s.data,s.options);$(".skills__legend").append(e.generateLegend())}}).init(),jQuery(document).ready(function(e){var l=e(".cd-top");e(window).scroll(function(){e(this).scrollTop()>300?l.addClass("cd-is-visible"):l.removeClass("cd-is-visible cd-fade-out"),e(this).scrollTop()>2e3&&l.addClass("cd-fade-out")}),l.on("click",function(l){l.preventDefault(),e("body,html").animate({scrollTop:0},700)})});