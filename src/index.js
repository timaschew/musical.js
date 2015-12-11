var Instrument = require('./instrument');
var parser = require('./parser-abc');
var utils = require('./utils');

// backward compability
window.Instrument = Instrument;
window.parseABCFile = parser.parseABCFile;

// The package implementation. Right now, just one class.
module.exports = {
	Instrument: Instrument,
	parseABCFile: parser.parseABCFile,
	parseABCfiles: parser.parseABCfilesFromString,
	midiToIPN: utils.midiToIPN
}
