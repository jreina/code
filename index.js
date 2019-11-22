const Hashids = require("hashids/cjs");
const hashids = new Hashids();
const moment = require("moment");

function attendanceCode() {
  return hashids
    .encode(Number(moment().format("YYYYMMDD")))
    .slice(0, 4)
    .toUpperCase();
}

console.log(attendanceCode());
