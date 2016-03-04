require([
],  function(){
  var jasmineEnv = jasmine.getEnv();
  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  // Add links to the spec files here
  var specs = [];
  specs.push("browserified");

  // Execute specs
  require(specs, function(){
      jasmineEnv.execute();
  });
});