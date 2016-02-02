enyo.kind({
  name: "MainMenuPane",
  classes: "enyo-unselectable",
  components: [
    // height necessary.
    { name: "menupane", kind: "rwatkins.MenuPane",
      style: "height: 100%; width: 100%;",
      onViewChange: "viewChangeHandler",
      onMenuOpen: "menuOpenHandler",
      onMenuClose: "menuCloseHandler",
      menu: [
        { content: "Men" + unescape("%FC"), classes: "menu-header" },
        { content: "Aktuell", view: "latest", classes: "menu-item latest" },
        { content: "Heute", view: "today", classes: "menu-item today" },
        { content: "Einstellungen", view: "settings", classes: "menu-item settings" },
        { content: "Impressum", view: "impressum", classes: "menu-item impressum" }
      ],
      components: [
        { name: "latest", classes: "view", components: [
            { name: "latestToolbar", kind: "Toolbar", header: "Aktuell", classes: "latest", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "LatestView", name: "latestView", classes: "content"}
            ]}
        ]},
        { name: "today", classes: "view", components: [
            { name: "todayToolbar", kind: "Toolbar", header: "Heute", classes: "today", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "TodayView", name: "todayView", classes: "content"}
            ]}
        ]},
        { name: "settings", classes: "view", components: [
            { name: "settingsToolbar", kind: "Toolbar", header: "Einstellungen", classes: "settings", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "SettingsView", name: "settingsView", classes: "content"}
            ]}
        ]},
        { name: "impressum", classes: "view", components: [
            { kind: "Toolbar", header: "Impressum", classes: "impressum", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "ImpressumView", name: "impressumView", classes: "content"}
            ]}
        ]}
      ]
    }
  ],
  //* @protected
  create: function() {
    this.inherited(arguments);
    // init model for selected location
    var locationModel = new LocationModel();
    // init model for latestView
    var latestModel = new LatestModel(locationModel);
    latestModel.fetch();
    this.$.latestView.set("latestModel", latestModel);
    this.$.latestView.set("locationModel", locationModel);
    // init todayView
    var date = new Date();
    this.$.todayToolbar.setHeader("Heute - " + date.getDate() + '.' + (date.getMonth()+1) + "." + date.getFullYear());
    var todayModel = new TodayModel();
    todayModel.addListener("change", function(record, event) {
      app.$.mainView.$.MainMenuPane.updateTodayView(record);
    }, false);
    todayModel.fetch();
    // init settingsview
    var settingsModel = new SettingsModel();
    settingsModel.fetch();
    this.$.settingsView.set("settingsModel", settingsModel);
    this.$.settingsView.set("locationModel", locationModel);
    // init model for impressumView
    this.$.impressumView.set("appModel", new AppModel());
  },
  updateTodayView: function(record) {
    this.$.todayView.loadChart(record);
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
    classes: "toolbar",
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
