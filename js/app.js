var MIC = {
	initialize: function() {
		this._initMap();
		this._initLayers();
	},

	_initMap: function() {
		this.map = L.map('map', {
			center: [46.7684, 23.5919],
			zoom: 15,
			minZoom: 13,
			maxZoom: 20,
			maxBounds: new L.LatLngBounds([46.3,23], [47, 24])
		});
	},

	_initLayers: function() {
		StamenTiles = 'http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png';
		L.tileLayer(StamenTiles).addTo(this.map);

		var historicalLayer = MIC.HistoricalMapsLayer.initialize(this.map).enable();

		var overlayMaps = {
			"Hărți istorice": historicalLayer.layer,
			// add more layers here as they are integrated
		};

		L.control.layers(null, overlayMaps).addTo(this.map);
	}
}
