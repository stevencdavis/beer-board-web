export class SetFocus {
  public link:(scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;
  public scope = {
    trigger: '=setFocus'
  };

  constructor() {
    // It's important to add `link` to the prototype or you will end up with state issues.
    // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
    SetFocus.prototype.link = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
      scope.$watch('trigger', (value) => {
        if (value === true) {
          element[0].focus();
          (<HTMLInputElement>element[0]).setSelectionRange(0, (<HTMLInputElement>element[0]).value.length);
        }
      })
    };
  }

  public static Factory() {
    var directive = () => {
      return new SetFocus();
    };

    directive['$inject'] = [];

    return directive;
  }
}
