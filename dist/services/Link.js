"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createResolver = require("options-resolver");
/**
 * Link
 */
class Link {
    constructor(api) {
        this.resource = '/v1/url';
        this.api = api;
    }
    /**
     * Create link
     * @param params
     */
    create(params) {
        return new Promise((resolve, reject) => {
            if (!params) {
                params = {};
            }
            params.branch_key = this.api.getConfig().branch_key;
            // resolve params
            Link.resolveParams(params, ['branch_key'])
                .then((resolvedParams) => {
                return this.api.request('post', this.resource, resolvedParams)
                    .then((res) => {
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    /**
     * Read link
     */
    read(url) {
        return new Promise((resolve, reject) => {
            return this.api.request('get', this.resource, {}, {
                url: url,
                branch_key: this.api.getConfig().branch_key,
            })
                .then((res) => {
                resolve(res);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    /**
     * Update link
     * @param url
     * @param params
     */
    update(url, params) {
        return new Promise((resolve, reject) => {
            if (!params) {
                params = {};
            }
            params.branch_key = this.api.getConfig().branch_key;
            params.branch_secret = this.api.getConfig().branch_secret;
            // resolve params
            Link.resolveParams(params, ['branch_key', 'branch_secret'])
                .then((resolvedParams) => {
                return this.api.request('post', this.resource, resolvedParams, {
                    url: url,
                })
                    .then((res) => {
                    resolve(res);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    /**
     *
     * @param params
     * @param requiredProps
     */
    static resolveParams(params, requiredProps) {
        const resolver = createResolver();
        resolver
            .setDefined('branch_key')
            .setAllowedTypes('branch_key', 'string')
            .setDefined('branch_secret')
            .setAllowedTypes('branch_secret', 'string')
            .setDefined('data')
            .setAllowedTypes('data', 'object')
            .setDefined('alias')
            .setAllowedTypes('alias', 'string')
            .setNormalizer('alias', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('type')
            .setAllowedTypes('type', 'number')
            .setNormalizer('type', (value) => {
            if (value > 2) {
                return 0;
            }
            return value;
        })
            .setDefined('duration')
            .setAllowedTypes('duration', 'number')
            .setDefined('identity')
            .setAllowedTypes('identity', 'string')
            .setNormalizer('identity', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('channel')
            .setAllowedTypes('channel', 'string')
            .setNormalizer('channel', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('campaign')
            .setAllowedTypes('campaign', 'string')
            .setNormalizer('campaign', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('feature')
            .setAllowedTypes('feature', 'string')
            .setNormalizer('feature', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('stage')
            .setAllowedTypes('stage', 'string')
            .setNormalizer('stage', (value) => {
            if (value.length > 128) {
                return value.substr(0, 128);
            }
            return value;
        })
            .setDefined('tags')
            .setAllowedTypes('tags', 'array')
            .setNormalizer('tags', (value) => {
            const tags = [];
            for (let tag of value) {
                tag = String(tag);
                if (tag.length > 64) {
                    return tag.substr(0, 64);
                }
                tags.push(tag);
            }
            return tags;
        });
        /**
         * Required properties
         */
        for (const requiredProp of requiredProps) {
            resolver.setRequired(requiredProp);
        }
        return resolver.resolve(params);
    }
}
exports.Link = Link;
