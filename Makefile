build:
	handlebars src/templates-handlebars/games.handlebars src/templates-handlebars/sidebar_menu.handlebars -f dist/assets/js/templates/templates.js -k each -k if -k unless