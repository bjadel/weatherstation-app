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
        { content: "Men" + unescape("%FC"), classes: "menu-header" },
        { content: "Aktuell", view: "latestMeasuredData", classes: "menu-item latest" },
        { content: "Heute", view: "todayMeasuredData", classes: "menu-item today" },
        { content: "Impressum", view: "impressum", classes: "menu-item impressum" }
      ],
      components: [
        { name: "latestMeasuredData", classes: "view", components: [
            { name: "latestToolbar", kind: "Toolbar", header: "Aktuell", classes: "latest", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "LatestView", name: "latestView", classes: "content"}
            ]}
        ]},
        { name: "todayMeasuredData", classes: "view", components: [
            { name: "todayToolbar", kind: "Toolbar", header: "Heute", classes: "today", onToggleMenu: "toolbarToggleMenuHandler", onHeader: "toolbarToggleMenuHandler" },
            { kind: "enyo.Scroller", strategyKind: "TouchScrollStrategy", components: [
              { kind: "TodayView", name: "todayView", classes: "content"}
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
    // init model for latestView
    var latestModel = new LatestModel();
    latestModel.addListener("change", function(record, event) {
      this.app.$.mainView.$.MainMenuPane.updateLatestView(record);
    }, false);
    latestModel.fetch();
    this.$.latestView.set("latestModel", latestModel);
    // init todayView
    var date = new Date();
    this.$.todayToolbar.setHeader("Heute - " + date.getDate() + '.' + (date.getMonth()+1) + "." + date.getFullYear());
    var todayModel = new TodayModel();
    todayModel.addListener("change", function(record, event) {
      this.app.$.mainView.$.MainMenuPane.updateTodayView(record);
    }, false);
    todayModel.fetch();
    // init model for impressumView
    this.$.impressumView.set("appModel", new AppModel());
  },
  updateLatestView: function(record) {
    this.$.latestToolbar.setHeader("Aktuell - " + record.attributes.date);
    this.$.latestView.loadTachometer(record);
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