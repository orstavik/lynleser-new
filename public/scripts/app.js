var Root = document.getElementById("app");

// URL redirect
if (!Root.$.appRoute.route.path) {
	Root.$.appRoute.set('route.path', '/home');
	Root.pageData.page = "home";
};
Root.appState = Root.pageData.page;