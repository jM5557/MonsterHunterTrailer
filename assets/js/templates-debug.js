(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['games'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.even_pos : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "			<h1>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\r\n			\r\n			<div class = \"video_container\">\r\n";
  stack1 = ((helper = (helper = helpers.videos || (depth0 != null ? depth0.videos : depth0)) != null ? helper : alias2),(options={"name":"videos","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.videos) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div id = "
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + " class = \"game\">\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div id = "
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + " class = \"game odd\">\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class = \"el_container\">\r\n					<input type = \"hidden\" value =\""
    + alias4(((helper = (helper = helpers.video_id || (depth0 != null ? depth0.video_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_id","hash":{},"data":data}) : helper)))
    + "\">\r\n					<p>Trailer "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</p>\r\n				</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div id = \"hero-top\">\r\n	<h1>Monster Hunter Trailer Viewer</h1>\r\n	<p> A simple UI to display all the Monster Hunter game trailers</p>\r\n</div>\r\n";
  stack1 = ((helper = (helper = helpers.games || (depth0 != null ? depth0.games : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"games","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.games) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<footer>\r\n	<div id = \"lists_container\">\r\n		<div class = \"list-wrapper\">\r\n			<h2>Resources</h2>\r\n			<ul>\r\n				<li>\r\n					<a href=\"https://monsterhunter.wikia.com\">\r\n					Monster Hunter Wikia\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"https://reddit.com/r/MonsterHunter\">\r\n					Monster Hunter Subreddit\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"http://kiranico.com\">\r\n					Kiranico\r\n					</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n		<div class=\"list-wrapper\">\r\n			<h2>Check Out My Other Monster Hunter Web Apps!</h2>\r\n			<ul>\r\n				<li>\r\n					<a href=\"https://jm5557.github.io/MHQuestJournal\">\r\n					Monster Hunter Quest Journal\r\n					</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"https://jm5557.github.io/MHGCGen\">\r\n					Monster Hunter Guild Card Generator\r\n					</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n	<small>\r\n		<strong>DISCLAIMER:</strong>This is an unofficial fan site. Monster Hunter is property of CAPCOM Co., Ltd. and its respective owners.\r\n	</small>\r\n</footer>";
},"useData":true});
templates['sidebar_menu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class = \"menu_game\">\r\n		<input type = \"hidden\" value = \"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n		<img alt = \""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" src = \"assets/images/logos/"
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\">\r\n	</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.games || (depth0 != null ? depth0.games : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"games","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.games) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
})();