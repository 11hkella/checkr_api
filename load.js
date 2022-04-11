const csvtojson = require("csvtojson");
const Api = require("./models/countryInternetObject")

csvtojson()
  .fromFile("UN_SYB63_314_202009_Internet_Usage - Sheet1.csv")
  .then(csvData => {
    //console.log(csvData);
    const data = csvData.map(record => {
      return ({
        region: record['Region/Country/Area'],
        year: record['Year'],
        percentage: record['Percentage of individuals using the internet'],
        source: record['Source'],
      })
    })
    Api.insertMany(data)
      .then(() => console.log('data loaded'))
      .catch(err => console.error(err))
  }).catch(err => console.error(err));