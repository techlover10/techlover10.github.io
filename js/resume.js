
$( window ).resize(function () {
    currentViewModel.windowState($(window).width() < PHONE_MODE ? "phone" : "normal");
    });

function siteViewModel(){
  var self = this;
  self.windowState = ko.observable($(window).width() < PHONE_MODE ? "phone" : "normal");
  self.resumeAlign = ko.observable("right");
  self.calculateVal = ko.computed( function () {
      self.resumeAlign(self.windowState()=="phone" ? "left" : "right");
      });
}
var currentViewModel = new siteViewModel();

ko.applyBindings(currentViewModel);
