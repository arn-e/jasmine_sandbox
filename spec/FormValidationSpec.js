describe('Form Validation', function() {
  var fakeNameField, errorField;

  beforeEach(function() {
    fakeNameField = { 
      value: 'foo'
    };
    
    errorField = { appendChild: function() { return true } };

    spyOn(document, 'getElementsByName').andReturn([fakeNameField]);
    spyOn(document, 'getElementById').andReturn(errorField);
    spyOn(errorField, 'appendChild');

  });

  it('returns true for valid name', function() {
    expect(testValidate()).toBe(false);
  });

  it('appends a child to the error field', function() {
    testValidate();
    expect(errorField.appendChild).toHaveBeenCalled();
  });

});