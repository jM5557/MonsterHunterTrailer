var games_list = {
	"games": [{
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
	}],

	"get_even_games": function(){
		for(var i = 0; i < games_list.games.length; i++)
		{	
			if(i%2 == 0)
				games_list.games[i].even_pos = true;
			games_list.games[i].id = i;
		}
	},
}

games_list.get_even_games();

$(document).ready(function(){
	$(".video_container img:nth-of-type(1)").click(function(){
		var vid_url = this.src.slice(23);
		vid_url = vid_url.slice(0, vid_url.length - 14);

		$(this).siblings("img:nth-of-type(2)").remove();
		$(this).replaceWith("<iframe src=\"https://www.youtube.com/embed/" + vid_url + "\" frameborder=\"0\" allowfullscreen></iframe>");
	});

	$("#close_menu_btn, #open_menu_btn").click(function(){
		document.getElementById('sidebar').classList.toggle("slide");
	});
});