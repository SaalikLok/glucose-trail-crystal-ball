declare module "\*.svg" {
  import React = require("react");
  export const SVGReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
