const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const extensionName = Me.metadata.name;
const { main: Main } = imports.ui;
const Panel = Main.panel;
const Overview = Main.overview;

function hidePanel() {
  Panel.hide();
}

function showPanel() {
  Panel.show();
}

function init() {
  log(`Initializing ${extensionName}.`);
}

function enable() {
  Overview.connect("hiding", showPanel);
  Overview.connect("showing", hidePanel);
}

function disable() {
  showPanel();
  log(`Exiting ${extensionName}.`);
}
