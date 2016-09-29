Things = new Mongo.Collection("things");
ThingsIndex = new EasySearch.Index({
  collection: Things,
  fields: ['tittel', 'kategori'],
  defaultSearchOptions: {
    sortBy: 'title',
    limit: 25
  },
  engine: new EasySearch.MongoDB({
    sort: function (searchObject, options) {
      const sortBy = options.search.props.sortBy;

      // return a mongo sort specifier
      if ('tittel' === sortBy) {
        return {
          tittel: 1
        };
      } else if ('kategori' === sortBy) {
        return {
          kategori: 1
        };
      } else {
        return {
          tittel: 1
        }
      }
    }
  }),
});

Things.friendlySlugs([
  {
    slugFrom: 'kategori',
    slugField: 'slug',
    distinct: false,
    transliteration: [
      {from: 'æ', to: 'ae'},
      {from: 'ø', to: 'o'},
      {from: 'å', to: 'a'}
    ]
  },
  {
    slugFrom: 'tittel',
    slugField: 'slug2',
    transliteration: [
      {from: 'æ', to: 'ae'},
      {from: 'ø', to: 'o'},
      {from: 'å', to: 'a'}
    ]
  }
]);

Things.attachSchema(new SimpleSchema({
  tittel: {
    type: String,
    label: "Gjenstand",
    max: 200
  },
  kategori: {
    type: String,
    label: "Kategori *",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Instrument", value: 'instrument'},
          {label: "Elektronikk", value: 'elektronikk'},
          {label: "Programvare", value: 'programvare'},
          {label: "Verdigjenstand", value: 'verdigjenstand'},
          {label: "Kunst", value: 'kunst'},
          {label: "Dokumenter", value: 'dokumenter'},
          {label: "Annet", value: 'annet'},
        ];
      }
    }
  },
  serienummer: {
    type: String,
    label: "Serienummer",
    optional: true
  },
  kjopt: {
    type: Date,
    label: "Dato kjøpt",
    optional: true
  },
  kjoptfra: {
    type: String,
    label: "Hvor ble gjenstanden kjøpt",
    optional: true
  },
  beskrivelse: {
    type: String,
    label: "Beskrivelse",
    optional: true,
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
      }
    }
  }
}));
