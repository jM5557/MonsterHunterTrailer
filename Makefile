build:
	handlebars src/templates-handlebars/games.handlebars src/templates-handlebars/sidebar_menu.handlebars -f src/js/templates.js -k each -k if -k unless