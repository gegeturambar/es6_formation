var voiture = {
    name: 'Zoé',
    displayNames: function() {
        [0,1,2,3].forEach(
            function(elem) {
                console.log('Voiture : ' + this.name);
            }
        );
    }
};
voiture.displayNames();


var voiture = {
    name: 'Zoé',
    displayNames2: function() {
        [0,1,2,3].forEach(
            (elem) => console.log('Voiture : ' + this.name)
        );
    }
};
voiture.displayNames2();