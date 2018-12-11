import optionsResolver from 'options-resolver';
import { BranchIo } from '../index';
import { IBranchIoService } from '../interfaces';

/**
 * App
 */
export class App implements IBranchIoService {

  public api: BranchIo;
  protected resource = '/v1/app';

  constructor(api: BranchIo) {
    this.api = api;
  }

  /**
   * Create app
   * @param params
   */
  public create(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // resolve params
      App.resolveParams(params, ['user_id', 'app_name', 'dev_name', 'dev_email'])
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
   * Read app
   * @param params
   */
  public read(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.api.request(
        'get',
        this.resource + '/' + this.api.getConfig().branch_key,
        {},
        {
          branch_secret: this.api.getConfig().branch_secret,
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
   * Update app
   * @param params
   */
  public update(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!params) {
        params = {};
      }
      params.branch_key = this.api.getConfig().branch_key;
      params.branch_secret = this.api.getConfig().branch_secret;
      // resolve params
      App.resolveParams(params, ['branch_key', 'branch_secret', 'dev_email'])
        .then((resolvedParams) => {
          return this.api.request('put', this.resource, resolvedParams)
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
    const resolver = optionsResolver();

    resolver
      .setDefined('user_id')
      .setAllowedTypes('user_id', 'int')
      .setDefined('app_name')
      .setAllowedTypes('app_name', 'string')
      .setNormalizer('app_name', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('dev_name')
      .setAllowedTypes('dev_name', 'string')
      .setNormalizer('dev_name', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('dev_email')
      .setAllowedTypes('dev_email', 'string')
      .setNormalizer('dev_email', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('always_open_app')
      .setAllowedTypes('always_open_app', 'string')
      .setAllowedValues('always_open_app', ['0', '1'])
      /**
       * Android
       */
      .setDefined('android_app')
      .setAllowedTypes('android_app', 'int')
      .setAllowedValues('android_app', [0, 1, 2])
      .setNormalizer('android_app', (value) => {
        if (value > 2) {
          return 2;
        }
        return value;
      })
      .setDefined('android_url')
      .setAllowedTypes('android_url', 'string')
      .setNormalizer('android_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('android_uri_scheme')
      .setAllowedTypes('android_uri_scheme', 'string')
      .setNormalizer('android_uri_scheme', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('android_package_name')
      .setAllowedTypes('android_package_name', 'string')
      .setNormalizer('android_package_name', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('sha256_cert_fingerprints')
      .setDefined('android_app_links_enabled')
      .setAllowedTypes('android_app_links_enabled', 'int')
      .setAllowedValues('android_app_links_enabled', [0, 1])
      .setNormalizer('android_app_links_enabled', (value) => {
        if (value > 1) {
          return 1;
        }
        return value;
      })
      /**
       * iOS
       */
      .setDefined('ios_app')
      .setAllowedTypes('ios_app', 'int')
      .setAllowedValues('ios_app', [0, 1])
      .setNormalizer('ios_app', (value) => {
        if (value > 1) {
          return 1;
        }
        return value;
      })
      .setDefined('ios_url')
      .setAllowedTypes('ios_url', 'string')
      .setNormalizer('ios_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('ios_uri_scheme')
      .setAllowedTypes('ios_uri_scheme', 'string')
      .setNormalizer('ios_uri_scheme', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('ios_store_country')
      .setAllowedTypes('ios_store_country', 'string')
      .setNormalizer('ios_store_country', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('ios_bundle_id')
      .setAllowedTypes('ios_bundle_id', 'int')
      .setDefined('ios_team_id')
      .setAllowedTypes('ios_team_id', 'int')
      .setDefined('universal_linking_enabled')
      .setAllowedTypes('universal_linking_enabled', 'int')
      .setAllowedValues('universal_linking_enabled', [0, 1])
      .setNormalizer('universal_linking_enabled', (value) => {
        if (value > 1) {
          return 1;
        }
        return value;
      })
      /**
       * AWS Fire
       */
      .setDefined('fire_url')
      .setAllowedTypes('fire_url', 'string')
      .setNormalizer('fire_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      /**
       * Windows Phone
       */
      .setDefined('windows_phone_url')
      .setAllowedTypes('windows_phone_url', 'string')
      .setNormalizer('windows_phone_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      /**
       * Blackberry
       */
      .setDefined('blackberry_url')
      .setAllowedTypes('blackberry_url', 'string')
      .setNormalizer('blackberry_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      /**
       * Web
       */
      .setDefined('web_url')
      .setAllowedTypes('web_url', 'string')
      .setNormalizer('web_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      /**
       * Other
       */
      .setDefined('default_desktop_url')
      .setAllowedTypes('default_desktop_url', 'string')
      .setNormalizer('default_desktop_url', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('text_message')
      .setAllowedTypes('text_message', 'string')
      .setNormalizer('text_message', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('og_app_id')
      .setAllowedTypes('og_app_id', 'string')
      .setNormalizer('og_app_id', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('og_title')
      .setAllowedTypes('og_title', 'string')
      .setNormalizer('og_title', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('og_description')
      .setAllowedTypes('og_description', 'string')
      .setNormalizer('og_description', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('og_image_url')
      .setAllowedTypes('og_image_url', 'string')
      .setNormalizer('og_image_url', (value) => {
        if (value.length > 255) {
          return value.substr(0,255);
        }
        return value;
      })
      .setDefined('deepview_desktop')
      .setAllowedTypes('deepview_desktop', 'string')
      .setNormalizer('deepview_desktop', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('deepview_ios')
      .setAllowedTypes('deepview_ios', 'string')
      .setNormalizer('deepview_ios', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
      })
      .setDefined('deepview_android')
      .setAllowedTypes('deepview_android', 'string')
      .setNormalizer('deepview_android', (value) => {
        if (value.length > 1024) {
          return value.substr(0,1024);
        }
        return value;
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
