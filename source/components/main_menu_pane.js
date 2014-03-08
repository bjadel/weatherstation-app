enyo.kind({
  name: "MainMenuPane",
  classes: "enyo-unselectable",
  controller: ".app.controllers.filmCollection",
  components: [
    // height necessary.
    { name: "menupane", kind: "rwatkins.MenuPane",
      style: "height: 100%; width: 100%;",
      onViewChange: "viewChangeHandler",
      onMenuOpen: "menuOpenHandler",
      onMenuClose: "menuCloseHandler",
      menu: [
        { content: "Menu", classes: "menu-header" },
        { content: "Aktuell", view: "latestMeasuredData", classes: "menu-item" },
        { content: "Impressum", view: "impressum", classes: "menu-item" }
      ],
      components: [
        { name: "latestMeasuredData", classes: "view",
          components: [
            { kind: "Toolbar",
              header: "Aktuell",
              onToggleMenu: "toolbarToggleMenuHandler" },
              { kind: "LatestView", name: "latestView", classes: "content"} ]
        },
        { name: "impressum", classes: "view",
              components: [
                { kind: "Toolbar",
                  header: "Impressum",
                  onToggleMenu: "toolbarToggleMenuHandler" },
                  { kind: "ImpressumView", name: "impressumView", classes: "content"} ]
        }
      ]
    }
  ],
  //* @protected
  create: function() {
    this.inherited(arguments);
    // init model for latestView
    var latestModel = new LatestModel();
    latestModel.fetch();
    this.$.latestView.set("latestModel", latestModel);
    // init model for impressumView
    this.$.impressumView.set("appModel", new AppModel());
  },
  viewChangeHandler: function(inSender, inEvent) {
    this.log();
  },
  menuOpenHandler: function(inSender, inEvent) {
    this.log();
  },
  menuCloseHandler: function(inSender, inEvent) {
    this.log();
  },
  secondaryMenuOpenHandler: function(inSender, inEvent) {
    this.log();
  },
  secondaryMenuCloseHandler: function(inSender, inEvent) {
    this.log();
  },

  toolbarToggleMenuHandler: function(inSender, inEvent) {
    this.log();
    this.$.menupane.toggleMenu();
  },
  toolbarToggleSecondaryMenuHandler: function(inSender, inEvent) {
    this.log();
    this.$.menupane.toggleSecondaryMenu();
  }

});

enyo.kind({
	  name: "Toolbar",
	  kind: "onyx.Toolbar",
	  published: {
	    header: ""
	  },
	  events: {
	    onHeader: "",
	    onToggleMenu: ""
	  },

	  components: [
	    { kind: "onyx.Grabber", ontap: "doToggleMenu", style: "float: left;" },
	    { name: "header", content: "", ontap: "doHeader", style: "padding-top: 4px" }
	  ],

	  create: function() {
	    this.inherited(arguments);
	    this.headerChanged();
	  },

	  headerChanged: function() {
	    this.$.header.setContent(this.getHeader());
	  }

});