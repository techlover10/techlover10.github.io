var DEFAULT_MEASURES = 16;
var DEFAULT_TEMPO = 120;
var DEFAULT_SECONDS = DEFAULT_MEASURES * DEFAULT_MEASURECOUNT/(DEFAULT_TEMPO*60);
var DEFAULT_MEASURECOUNT = 4;
function MTTModel(){
  var self = this;
  self.measures = ko.observable(DEFAULT_MEASURES);
  self.seconds = ko.observable(DEFAULT_SECONDS);
  self.tempo = ko.observable(DEFAULT_TEMPO);
  self.measureCount = ko.observable(DEFAULT_MEASURECOUNT);

  self.secondsCalc = ko.computed( function () {
      self.seconds(((self.measures() * self.measureCount())/self.tempo())/60);
      });

  self.measuresCalc = ko.computed( function () {
      self.measures((self.tempo()/(self.seconds()/60))/self.measureCount());
      });

  self.tempoCalc = ko.computed( function () {
      self.tempo((self.measures()*self.measureCount())/(self.tempo()/60));
      });


};

ko.applyBindings(new MTTModel());
