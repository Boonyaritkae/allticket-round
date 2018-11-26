'use strict';
const {HttpRequestModule} = require('./modules/HttpRequestModule'),
      {MemchachedModule} = require('./modules/MemcachedModule'),   
      {RoundService} = require('./service/round.service');

exports.HttpRequestModule = HttpRequestModule;
exports.MemchachedModule = MemchachedModule;
exports.RoundService = RoundService;
