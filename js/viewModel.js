
function resumeViewModel(windowState){
  var self = this;
  self.resumeAlign = ko.observable("right");
  //self.potato = {};
  //self.potato.resumeAlign = self.resumeAlign;
  self.calculateVal = ko.computed( function () {
      self.resumeAlign(windowState()=="phone" ? "left" : "right");
      });
};

function siteViewModel(){
  var self = this;
  self.windowState = ko.observable($(window).width() < PHONE_MODE ? "phone" : "normal");
  self.resumeViewModel = new resumeViewModel(self.windowState);
};

function masterViewModel(){
  var self = this;
  self.thisViewModel = new siteViewModel();
  $( window ).resize(function () {
      self.thisViewModel.windowState($(window).width() < PHONE_MODE ? "phone" : "normal");
      });

};

ko.applyBindings(new masterViewModel());
