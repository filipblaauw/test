Template.searchBox.helpers({
  kat: function() {
    if (this.kategori === 'instrument') {
      return 'unmute';
    }
    else if (this.kategori === 'elektronikk') {
      return 'plug';
    }
    else if (this.kategori === 'programvare') {
      return 'laptop';
    }
    else if (this.kategori === 'verdigjenstand') {
      return 'dollar';
    }
    else if (this.kategori === 'kunst') {
      return 'trophy';
    }
    else if (this.kategori === 'dokument') {
      return 'file';
    }
    else {
      return 'heart';
    }
  },
  inputAttributes: function () {
    placeholder = function() {
      return "Søk etter gjenstand";
    }
    return { 'class': 'form-control input-lg', 'placeholder': placeholder };
  },
  ThingsIndex: () => ThingsIndex

});

Template.searchBox.events({
  'click #sortGjenstand': (e) => {
    ThingsIndex.getComponentMethods().addProps('sortBy', 'tittel');
  },
  'click #sortKategori': (e) => {
    ThingsIndex.getComponentMethods().addProps('sortBy', 'kategori');
  }
});
