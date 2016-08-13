var DEFAULT_MEASURES = 30;
var DEFAULT_TEMPO = 120;
var DEFAULT_SECONDS = 60;
var DEFAULT_MEASURECOUNT = 4;
function MTTModel(){
  var self = this;
  self.measures = ko.observable(DEFAULT_MEASURES);
  self.seconds = ko.observable(DEFAULT_SECONDS);
  self.tempo = ko.observable(DEFAULT_TEMPO);
  self.measureCount = ko.observable(DEFAULT_MEASURECOUNT);

  self.recalculateSeconds = function () {
    self.seconds(Math.ceil(((self.measures() * self.measureCount())/self.tempo())*60));
  };

  self.recalculateMeasures = function () {
      self.measures(Math.ceil(((self.tempo()/60)*self.seconds())/self.measureCount()));
  };

  self.recalculateTempo = function () {
      self.tempo(Math.ceil(((self.measures()*self.measureCount())/(self.seconds()))*60));
  };


  self.secondsCalc = ko.computed( function () {
      self.measures();
      self.tempo();
      self.measureCount();
      self.recalculateMeasures();
      self.recalculateTempo();
      });

  self.measuresCalc = ko.computed( function () {
      self.seconds();
      self.tempo();
      self.measureCount();
      self.recalculateSeconds();
      self.recalculateTempo();
      });

  self.tempoCalc = ko.computed( function () {
      self.seconds();
      self.measures();
      self.measureCount();
      self.recalculateMeasures();
      self.recalculateTempo();
      });


};

ko.applyBindings(new MTTModel());
