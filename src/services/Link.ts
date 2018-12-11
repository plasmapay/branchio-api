import optionsResolver from 'options-resolver';
import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * Link
 */
export class Link implements IBranchIoService {

  public api: BranchIo;
  protected resource = '/v1/url';

  constructor(api: BranchIo) {
    this.api = api;
  }

  /**
   * Create link
   * @param params
   */
  public create(params: any): Promise<any> {
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
  public read(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.api.request(
        'get',
        this.resource,
        {},
        {
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
  public update(url: string, params: any): Promise<any> {
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
  public static resolveParams(params: any, requiredProps?: Array<any>) {
    // @ts-ignore
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
          return value.substr(0,128);
        }
        return value;
      })
      .setDefined('type')
      .setAllowedTypes('type', 'int')
      .setNormalizer('type', (value) => {
        if (value > 2) {
          return 0;
        }
        return value;
      })
      .setDefined('duration')
      .setAllowedTypes('duration', 'int')
      .setDefined('identity')
      .setAllowedTypes('identity', 'string')
      .setNormalizer('identity', (value) => {
        if (value.length > 128) {
          return value.substr(0,128);
        }
        return value;
      })
      .setDefined('channel')
      .setAllowedTypes('channel', 'string')
      .setNormalizer('channel', (value) => {
        if (value.length > 128) {
          return value.substr(0,128);
        }
        return value;
      })
      .setDefined('campaign')
      .setAllowedTypes('campaign', 'string')
      .setNormalizer('campaign', (value) => {
        if (value.length > 128) {
          return value.substr(0,128);
        }
        return value;
      })
      .setDefined('feature')
      .setAllowedTypes('feature', 'string')
      .setNormalizer('feature', (value) => {
        if (value.length > 128) {
          return value.substr(0,128);
        }
        return value;
      })
      .setDefined('stage')
      .setAllowedTypes('stage', 'string')
      .setNormalizer('stage', (value) => {
        if (value.length > 128) {
          return value.substr(0,128);
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
            return tag.substr(0,64);
          }
          tags.push(tag);
        }

        return tags;
      })
    ;

    /**
     * Required properties
     */
    for (const requiredProp of requiredProps) {
      resolver.setRequired(requiredProp);
    }

    return resolver.resolve(params);
  }
}