(function(e){var t=document.body.clientWidth,n=document.body.clientHeight;$(e).resize(function(){t=document.body.clientWidth;n=document.body.clientHeight;updateAds()});$(".nav-toggle-menu").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggleClass("active")});$(".nav-toggle-search").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".header .search-form").toggleClass("active")})})(this);