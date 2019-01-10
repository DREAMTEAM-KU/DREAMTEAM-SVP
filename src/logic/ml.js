const { migration, list } = require("../db/function/Ml");
const moment = require("moment");

async function getSanam(hours = 0) {
  const now = new Date();

  const xDate = moment().subtract(hours + 1, 'hour')

  let data = await list();
  data = data.filter(d => {
    return (
      moment(d.time).isAfter(moment(xDate),'hours') && moment(d.time).isBefore(moment(),'hours')
    );
  });


  const output = data.map( d => d.value)
  return { number_of_tourist: output };
}

module.exports = {
  getSanam
};
