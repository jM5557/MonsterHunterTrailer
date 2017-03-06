var games_list = {
	"games": [{
		name: "Monster Hunter",
		backgrounds: "monster_hunter.jpg",
		trailer_url: "https://www.youtube.com/embed/hl0XBLBp3Hc",
		logo: "mh_logo.png"
	},
	{
		name: "Monster Hunter G",
		backgrounds: "monster_hunter_g.jpg",
		trailer_url: "https://www.youtube.com/embed/R_yA24waURM",
		logo: "mh_g_logo.png"
	},
	{
		name: "Monster Hunter Freedom",
		backgrounds: "monster_hunter_portable.jpg",
		trailer_url: "https://www.youtube.com/embed/5ubaHFS-fJU",
		logo: "mh_p_logo.png"
	},
	{
		name: "Monster Hunter 2 (~dos)",
		backgrounds: "monster_hunter_2.jpg",
		trailer_url: "https://www.youtube.com/embed/TOnUr8Ad6lc",
		logo: "mh_2_logo.png"
	},
	{
		name: "Monster Hunter Freedom 2",
		backgrounds: "monster_hunter_portable_2nd.jpg",
		trailer_url: "https://www.youtube.com/embed/lLVEOC3119c",
		logo: "mh_p_2nd_logo.png"
	},
	{
		name: "Monster Hunter Freedom Unite",
		backgrounds: "monster_hunter_portable_2nd_g.jpg",
		trailer_url: "https://www.youtube.com/embed/0JoCStLsRq8",
		logo: "mh_p_2nd_g_logo.png"
	},
	{
		name: "Monster Hunter 3 (~tri)",
		backgrounds: "monster_hunter_3.jpg",
		trailer_url: "https://www.youtube.com/embed/wcCsbgkfEd8",
		logo: "mh_3_logo.png"
	},
	{
		name: "Monster Hunter Portable 3rd",
		backgrounds: "monster_hunter_portable_3rd.jpg",
		trailer_url: "https://www.youtube.com/embed/X0w1iPWyoRA",
		logo: "mh_p_3rd_logo.png"
	},
	{
		name: "Monster Hunter 3 Ultimate",
		backgrounds: "monster_hunter_3_g.jpg",
		trailer_url: "https://www.youtube.com/embed/9wkQGEpRgL0",
		logo: "mh_3_g_logo.png"
	},
	{
		name: "Monster Hunter 4",
		backgrounds: "monster_hunter_4.jpg",
		trailer_url: "https://www.youtube.com/embed/XInD7Hz47MI",
		logo: "mh_4_logo.png"
	},
	{
		name: "Monster Hunter 4 Ultimate",
		backgrounds: "monster_hunter_4_g.jpg",
		trailer_url: "https://www.youtube.com/embed/prcQT5om1dA",
		logo: "mh_4_g_logo.png"
	},
	{
		name: "Monster Hunter Generations",
		backgrounds: "monster_hunter_x.jpg",
		trailer_url: "https://www.youtube.com/embed/r_8-uOwDUpY",
		logo: "mh_x_logo.png"
	},
	{
		name: "Monster Hunter XX",
		backgrounds: "monster_hunter_xx.jpg",
		trailer_url: "https://www.youtube.com/embed/MnpNGzNoOY0",
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
	$("#close_menu_btn, #open_menu_btn").click(function(){
		document.getElementById('sidebar').classList.toggle("slide");
	});
});