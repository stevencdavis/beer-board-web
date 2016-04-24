declare module 'foundation-sites/dist/foundation' {
  var Foundation: any;
  export default Foundation;
}

declare namespace iconic {
  interface Iconic {
    default: any;
  }
}

declare module 'foundation-apps/js/vendor/iconic.min' {
  var IconicJS: iconic.Iconic;
  export = IconicJS;
}
