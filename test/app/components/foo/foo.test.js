import Foo from 'src/app/components/foo/foo';

console.debug('FOO:', Foo);

describe('ES6 Foo', () => {
  let foo;

  beforeEach(() => {
    foo = new Foo();
  });

  afterEach(() => {

  });

  it('should return "Do Something" when calling doSomething', () => {
    expect(foo.doSomething()).toEqual('Do Something');
  });
});
