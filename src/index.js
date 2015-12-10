var Instrument = require('./instrument');
var parser = require('./parser-abc');

// backward compability
window.Instrument = Instrument;
window.parseABCFile = parser.parseABCFile;

// The package implementation. Right now, just one class.
module.exports = {
	Instrument: Instrument,
	parseABCFile: parser.parseABCFile,
	parseABCfiles: parser.parseABCfilesFromString
}
