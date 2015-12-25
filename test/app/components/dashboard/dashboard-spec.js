describe('the dashboard view', function() {
  it('should update the greeting when the input changes', function() {
    browser.get('/');

    var greeting;

    greeting = element(by.id('greeting-output'));
    expect(greeting.getText()).toEqual('Ahoy!!!');

    element(by.model('greeting')).clear().sendKeys('new greeting');
    greeting = element(by.id('greeting-output'));
    expect(greeting.getText()).toEqual('new greeting!!!');
  });
});
