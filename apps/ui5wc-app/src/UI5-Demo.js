import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Component from "./Component";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js.js";

import { PLEASE_WAIT } from "./generated/i18n/i18n-defaults.js.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class UI5Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static async onDefine() {
		Demo.i18nBundle = await getI18nBundle("my-ui5-web-components");
	}

	static get dependencies() {
		return []; // array of components used internally
	}

	get pleaseWaitText() {
		return Demo.i18nBundle.getText(PLEASE_WAIT);
	}

	loadComponent() {
		Component.load();
	}
}

UI5Demo.define();

export default UI5Demo;