export default class UI5Initializer {
    constructor() {}

    initialize() {

        return new Promise(function (resolve, reject) {
            let head = document.getElementsByTagName("head")[0];
            let script = document.createElement("script");
            script.addEventListener("load", function () {
                resolve();
            });
            script.src =
                `https://sapui5.hana.ondemand.com/resources/sap-ui-core.js`;
            script.id = "sap-ui-bootstrap";
            script.async = false;
            script.defer = false;
            script.setAttribute("data-sap-ui-compatVersion", "edge");
            script.setAttribute("data-sap-ui-async", "true");
            script.setAttribute("data-sap-ui-resourceroots", '{my.ui5.sample.app: "./"}');
            script.setAttribute("data-sap-ui-theme", THEME_NAME);
            script.setAttribute("data-sap-ui-noConflict", "true");
            script.setAttribute("data-sap-ui-frameOptions", "trusted");
            head.appendChild(script);

        });
    }
}