var games_list = {
	games: [{
		name: "Monster Hunter",
		backgrounds: "monster_hunter.jpg",
		"videos": [
			{ video_id: "eMONaL_QgUk"},
			{ video_id: "6-JrgPgYcqk" },
			{ video_id: "M_EDM4mIlao" },
			{ video_id: "WyQAfNgX0Nw" }
		],
		logo: "mh_logo.png"
	},
	{
		name: "Monster Hunter G",
		backgrounds: "monster_hunter_g.jpg",
		"videos": [
			{ video_id: "uKRS94GWVCs" },
			{ video_id: "_5IgI7FbVyI"},
			{ video_id: "PWbjfqWietQ" }
		],
		logo: "mh_g_logo.png"
	},
	{
		name: "Monster Hunter Freedom",
		backgrounds: "monster_hunter_portable.jpg",
		"videos": [
			{ video_id: "FN73r5G_pbQ" },
			{ video_id: "5ubaHFS-fJU" },
			{ video_id: "UELgBikee7M" },
			{ video_id: "cACee9hGvvs" }
		],
		logo: "mh_p_logo.png"
	},
	{
		name: "Monster Hunter 2 (~dos)",
		backgrounds: "monster_hunter_2.jpg",
		"videos": [
			{ video_id: "EZnY6FP5Gmc" },
			{ video_id: "TOnUr8Ad6lc" },
			{ video_id: "gloXqXOIIIA" }
		],
		logo: "mh_2_logo.png"
	},
	{
		name: "Monster Hunter Freedom 2",
		backgrounds: "monster_hunter_portable_2nd.jpg",
		"videos": [
			{ video_id: "K395YgQKs0A" },
			{ video_id: "rq1LCjOuo5o" },
			{ video_id: "lLVEOC3119c" },
			{ video_id: "mBQ8PMNzFpc" }
		],
		logo: "mh_p_2nd_logo.png"
	},
	{
		name: "Monster Hunter Freedom Unite",
		backgrounds: "monster_hunter_portable_2nd_g.jpg",
		"videos": [
			{ video_id: "f_9DDfRiEhk" },
			{ video_id: "0JoCStLsRq8" },
			{ video_id: "ZNVdMR8AxgA" }
		],
		logo: "mh_p_2nd_g_logo.png"
	},
	{
		name: "Monster Hunter 3 (~tri)",
		backgrounds: "monster_hunter_3.jpg",
		"videos": [
			{ video_id: "GQOuBJQ6_bM" },
			{ video_id: "wcCsbgkfEd8"},
			{ video_id: "zw_Hqg0W_fE" },
			{ video_id: "-0Znqf9hQKs" }
		],
		logo: "mh_3_logo.png"
	},
	{
		name: "Monster Hunter Portable 3rd",
		backgrounds: "monster_hunter_portable_3rd.jpg",
		"videos": [
			{ video_id: "wsGVYFBxY88" },
			{ video_id: "98mSNK2UKqg" },
			{ video_id: "X0w1iPWyoRA"},
			{ video_id: "Be6LlleiV7c" },
			{ video_id: "47DKoSDeOUQ" },
		],
		logo: "mh_p_3rd_logo.png"
	},
	{
		name: "Monster Hunter 3 Ultimate",
		backgrounds: "monster_hunter_3_g.jpg",
		"videos": [
			{ video_id: "J9tQ5jbVJqo" },
			{ video_id: "8C8T1JWDJFg" },
			{ video_id: "9wkQGEpRgL0"},
			{ video_id: "7uzafxEHbG0" }
		],
		logo: "mh_3_g_logo.png"
	},
	{
		name: "Monster Hunter 4",
		backgrounds: "monster_hunter_4.jpg",
		"videos": [
			{ video_id: "9q0OosCOxrw" },
			{ video_id: "_5G6FcC4Nns" },
			{ video_id: "7h3CsdHzVjY" },
			{ video_id: "05GVsk_smO4" },
			{ video_id: "z-NaW2WGHdY" },
			{ video_id: "XInD7Hz47MI"},
			{ video_id: "r9de7mRhXWk"}
		],
		logo: "mh_4_logo.png"
	},
	{
		name: "Monster Hunter 4 Ultimate",
		backgrounds: "monster_hunter_4_g.jpg",
		"videos": [
			{ video_id: "QxFcG3Zsdm8" },
			{ video_id: "koI16NrnRcc" },
			{ video_id: "cNojl-pqZtk" },
			{ video_id: "63duoCYwTaA" },
			{ video_id: "prcQT5om1dA"},
			{ video_id: "-crDEcdbEKY" },
		],
		logo: "mh_4_g_logo.png"
	},
	{
		name: "Monster Hunter Generations",
		backgrounds: "monster_hunter_x.jpg",
		"videos": [
			{ video_id: "gZxzjDEo2WQ" },
			{ video_id: "s0BbplGgkCY" },
			{ video_id: "8ZABhVmzhX0" },
			{ video_id: "r_8-uOwDUpY" },
			{ video_id: "qmVDd6JmlUM" },
		],
		logo: "mh_x_logo.png"
	},
	{
		name: "Monster Hunter XX",
		backgrounds: "monster_hunter_xx.jpg",
		"videos": [
			{ video_id: "5VV5-opm1TE" },
			{ video_id: "XiOBszkWCp0" },
			{ video_id: "MnpNGzNoOY0" },
			{ video_id: "dtxYlOPAutE" },
			{ video_id: "30ikOWOgUvY" },

		],
		logo: "mh_xx_logo.png",
	},
	{
		name: "Monster Hunter: World",
		backgrounds: "monster_hunter_world.jpg",
		"videos": [
			{ video_id: "Ro6r15wzp2o" },
			{ video_id: "ULqY6yXn2S4" },
			{ video_id: "xtT5GIViSXo" },
			{ video_id: "64ql8jQBgsw" },
			{ video_id: "DW2SAnxOBCM" },
			{ video_id: "lmwxyM3sPwc" }
		],
		logo: "mh_world_logo.png"
	}],

	setVideoID: function(){
		for(var i = 0; i < games_list.games.length; i++)
		{	
			if(i%2 == 0)
				games_list.games[i].even_pos = true;
			games_list.games[i].id = i;

			for(var j = 0; j < games_list.games[i].videos.length; j++)
				games_list.games[i].videos[j].id = j + 1;
		}
	},
};

$(document).ready(function(){

	games_list.setVideoID();

	var compiledTemplate = Handlebars.templates['games'];
	var template_html = compiledTemplate(games_list);

	var sidebar_template = Handlebars.templates['sidebar_menu'];
	var sidebar_template_html = sidebar_template(games_list);

	$("#games_wrapper").html(template_html);

	document.querySelector("#sidebar ul").innerHTML = sidebar_template_html;

	var isScrolledToTop = function (t) {
		if ($(t).scrollTop()) {
	        $('#scroll_top').fadeIn();
	    } else {
	        $('#scroll_top').fadeOut();
	    }
	};

	$("#games_wrapper").scroll(function() {
	    isScrolledToTop(this);
	});

	isScrolledToTop("#games_wrapper");

	$('#sidebar').scroll(function() {
	    if ($(this).scrollTop()) {
	        $('#close_menu_btn_scroll').fadeIn();
	    } else {
	        $('#close_menu_btn_scroll').fadeOut();
	    }
	});

	//----------------------------------

	$(".video_container .el_container").click(function(){
		var vid_url = $(this).find("input").val();

		$("body").append('<div id = "video_overlay"><span id = "prev">&larr;</span><span id = "close_video_modal">&#10006;</span><span id = "next">&rarr;</span></div>');

		$("#video_overlay").append("<iframe id = 'video_frame' src=\"https://www.youtube.com/embed/" + vid_url + "?autoplay=1\" frameborder=\"0\" allowfullscreen ></iframe>");

		var index = $(this);

		if(index.is(":last-child")){
			$("#next").attr('class', 'disabled');
		}

		if(index.is(":first-child")){
			$("#prev").attr('class', 'disabled'); }

		var goToNext = function () {
			if(index.is(":last-child")){
				$("#next").attr('class', 'disabled');
				return;
			}

			$("#next").attr('class', 'enabled');
			$("#prev").attr('class', 'enabled');

			$("#video_frame").attr("src", "https://www.youtube.com/embed/" + index.next().find("input").val() + "?autoplay=1");
			index = index.next();

			if(index.is(":last-child")){
				$("#next").attr('class', 'disabled');
			}
		};

		var goToPrev = function () {
			if(index.is(":first-child")){
				$("#prev").attr('class', 'disabled');
				return;
			}

			$("#prev").attr('class', 'enabled');
			$("#next").attr('class', 'enabled');

			$("#video_frame").attr("src", "https://www.youtube.com/embed/" + index.prev().find("input").val() + "?autoplay=1");
			index = index.prev();

			if(index.is(":first-child")){
				$("#prev").attr('class', 'disabled');
			}
		};

		$("#video_overlay, #close_video_modal").click(function (e) {
			if($("#next").is(e.target))
			{
				goToNext();
			}
			else
			if($("#prev").is(e.target))
			{
				goToPrev();
			}
			else
				$("#video_overlay").remove();
		});
	});

	$(".menu_game").click(function(){
		var scrollTarget = $(this).find("input").val();

		var container = $("#games_wrapper");

		$("#games_wrapper").animate({scrollTop: $(scrollTarget).offset().top - container.offset().top + container.scrollTop() });
		return false;
	});

	$("#scroll_top").click(function(){
		$("#games_wrapper").animate({ scrollTop: "0px" });
	});
});