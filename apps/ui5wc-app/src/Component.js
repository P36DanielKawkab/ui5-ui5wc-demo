export default class Component {

  constructor() {
  }

  initializeComponent() {
    sap.ui.require( [],
      async () => {

        //Create the component
        const component = await sap.ui.component({
          name: "com.lenze.ui5.lib.productinfo",
          url: "https://lenze-ui5-lib-productinfo.cfapps.eu10.hana.ondemand.com",
          async: true,
          manifest: true,
          componentData: {
            contextType: ContextType.HUB,
            componentType: ComponentType.HUB,
            config: this.config,
          };

        new sap.ui.core.ComponentContainer({
          component: component,
        }).placeAt(this.config.containerID);
      }
    );
  }
}


