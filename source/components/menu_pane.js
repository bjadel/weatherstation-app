/* MenuPane.js
 *
 * Copyright © 2012-2013 Ryan Watkins <ryan@ryanwatkins.net>
 *
 * Permission to use, copy, modify, distribute, and sell this software
 * and its documentation for any purpose is hereby granted without
 * fee, provided that the above copyright notice appear in all copies
 * and that both that copyright notice and this permission notice
 * appear in supporting documentation. No representations are made
 * about the suitability of this software for any purpose. It is
 * provided "as is" without express or implied warranty.
 */

/**
 A Pane/View control that also provides Path/Facebook/etc-like menus
 that slide in from the left

 */
enyo.kind({
  name: "rwatkins.MenuPane",
  published: {
    /** a list menu item controls for the left side menu.
        set 'view' property to the 'name' of the view to display
    */
    menu: "",
    //  peek: 52,  - TODO: make a configurable peek
    //* the currently selected view.  Use setView() and getView() to change w/o menu actions
    view: "",
    appModel: null
  },
  events: {
    //* Sent when view changes
    onViewChange: "",
    //* Sent when left menu opens
    onMenuOpen: "",
    //* Sent when left menu closes
    onMenuClose: ""
  },

  //* @protected
  classes: "menu-pane",
  style: "overflow: hidden;",
  position: {  // default to 85% open
    menu: {
      min: 0, max: 80
    }
  },
  controlParentName: "pane",

  components: [
    { name: "menu",
      classes: "enyo-fit menupane-menu",
      ontap: "menuTapHandler"
    },
    { name: "pane", kind: "enyo.Slideable", classes: "menupane-pane",
      value: 0, min: 0, max: 80, unit: "%", draggable: false,
      style: "width: 100%; height: 100%;",
      onAnimateFinish: "paneAnimateFinishHandler"
    }
  ],

  // TODO: public methods
  //   openMenu();
  //   closeMenu();

  //* @public
  //* Select a view by name - does not animate
  selectView: function(name) {
    var views = this.getClientControls();

    // names must be unique, and must exist
    enyo.forEach(views, function(view) {
      if (view.name == name) {
        view.show();
      } else {
        view.hide();
      }
    }, this);

    this.doViewChange();
  },

  //* toggles the main menu
  toggleMenu: function(inSender, ionOriginator) {
    this.$.menu.setShowing(true);
    if (appModel.computeExistsSmallScreen()) {
    	this.$.pane.setMax(this.position.menu.max);
    	this.$.pane.setMin(this.position.menu.min);
    	this.$.pane.setUnit("%");
    } else {
    	this.$.pane.setMax(290);
    	this.$.pane.setMin(0);
    	this.$.pane.setUnit("px");
    }
    this.$.pane.toggleMinMax();
  },

  //* @protected
  create: function() {
    this.inherited(arguments);

    // TODO: make available via own Kind
    this.$.pane.$.animator.setDuration(250);

    var views = this.getClientControls();
    var firstView = true;
    enyo.forEach(views, function(view) {
   		view.hide();
    }, this);
    if (views && views[0]) {
      this.setView(views[0].name);
    }
    appModel = new AppModel();
    if (appModel.computeExistsBigScreen()) {
    	this.toggleMenu(null, null);
    }
  },

  initComponents: function() {
    this.inherited(arguments);

    this.$.menu.createComponents(this.menu, { owner: this });
  },

  menuTapHandler: function(inSender, inEvent) {
    this.$.pane.setMax(this.position.menu.max);
    this.$.pane.setMin(this.position.menu.min);

    // walk the chain to find a view
    var getView = enyo.bind(this, function(control) {
      if (control.view) {
        return control.view;
      }
      if (control == this.$.menu) {
        return null;
      }
      return getView(control.parent);
    });

    var view = getView(inEvent.originator);

    if (view) {
      if (this.getView() == view) {
    	  if (!appModel.computeExistsBigScreen()) {
    		  this.$.pane["animateToMin"]();
    	  }
    	  // dont need to set view
      } else {
    	  if (!appModel.computeExistsBigScreen()) {
    	    	this.$.pane.$.animator.setDuration(200);
    	    	this.$.pane.animateTo(0);
    	    	this.toview = view;
    	  } else {
   		        this.setView(view);
    	  }
      }
    }
  },

  viewChanged: function(oldView) {
    this.selectView(this.getView());
  },

  paneAnimateFinishHandler: function(inSender) {
    var value = inSender.getValue();
    
    if (Math.abs(value) == 0) {

      // swap views only when they're off the side
      if (this.toview) {
        this.setView(this.toview);
        this.toview = null;
      }
      setTimeout(enyo.bind(this, function() {
        this.$.pane.$.animator.setDuration(250);
        (value < 0) ? inSender.animateToMax() : inSender.animateToMin();
      }), 1);

    } else {

      // fire events
      if (this.$.menu.getShowing()) {
        if (inSender.getValue() == this.position.menu.max) {
          this.doMenuOpen();
        } else {
          this.doMenuClose();
        }
      }

    }
  }

});