'use strict';
const {HttpRequestModule} = require('../modules/HttpRequestModule');

module.exports = class RoundService extends HttpRequestModule {

    constructor(performId = '') {
        super();
        this.performId = performId;
        this.memcachedKey = `ROUND[${this.performId}]`;
    }

    async getRoundList() {
        let resp = null;
        try {
            resp = await this.getDataMemcached(this.memcachedKey);
            if (resp == null) {
                resp = await this.createHttp(process.env.URL_GET_ROUND, {
                    performId: this.performId
                }).post();
                return resp.data.code == 100 ? resp.data.data : null;
            }
            return JSON.parse(resp);
        } catch (e) {
            throw e;
        }
    }
}
