/**
 * @see {@link https://developer.chrome.com/extensions/manifest}
 */
module.exports = {
  name: "cis-wip",
  description: "A Chrome extension for an overview of working hours in CIS of FHTW",
  author: "Alija Sabic <sabic.alija@gmail.com>",
  version: "1.0.0",
  icons: {
    "16": "icons/16.png",
    "128": "icons/128.png",
  },
  /**
   * @see {@link https://developer.chrome.com/extensions/declare_permissions}
   */
  permissions: ["<all_urls>", "*://*/*", "activeTab", "tabs", "background", "unlimitedStorage", "storage"],
  browser_action: {
    default_title: "title",
    default_popup: "pages/popup.html",
  },
  background: {
    persistent: false,
    page: "pages/background.html",
  },
  devtools_page: "pages/devtools.html",
  options_page: "pages/options.html",
  content_scripts: [
    {
      js: ["js/manifest.js", "js/vendor.js", "js/content.js"],
      run_at: "document_end",
      matches: ["<all_urls>"],
      all_frames: true,
    },
  ],
  manifest_version: 2,
  content_security_policy: "script-src 'self'; object-src 'self'",
  web_accessible_resources: ["panel.html", "js/content.js"],
};
