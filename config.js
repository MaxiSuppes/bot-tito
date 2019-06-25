var moment = require('moment');

let muteUntilDate = moment(new Date());

export const setMuteUntilDate = function (seconds) {
    muteUntilDate = muteUntilDate.add(seconds, "seconds")
};

export const getMuteUntilDate = function () {
    return muteUntilDate;
};