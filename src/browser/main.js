import {Connection} from './module/connection/Connection';
import {File} from './module/file/File';
import {App} from './module/app/App';
import {Record} from './module/record/Record';
import {BulkRequest} from './module/bulkRequest/BulkRequest';
import {Auth, KintoneAPIException} from '../base/main';

window.kintoneJSSDK = {
  Auth,
  Connection,
  App,
  Record,
  BulkRequest,
  File,
  KintoneAPIException,
};

export {Auth};
export {Connection};
export {App};
export {Record};
export {BulkRequest};
export {File};
export {KintoneAPIException};
