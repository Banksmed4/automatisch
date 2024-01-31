import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import setBaseUrl from './common/set-base-url.js';
import auth from './auth/index.js';

export default defineApp({
  name: 'Mailchimp',
  key: 'mailchimp',
  baseUrl: 'https://mailchimp.com',
  apiBaseUrl: '',
  iconUrl: '{BASE_URL}/apps/mailchimp/assets/favicon.svg',
  authDocUrl: 'https://automatisch.io/docs/apps/mailchimp/connection',
  primaryColor: '000000',
  supportsConnections: true,
  beforeRequest: [setBaseUrl, addAuthHeader],
  auth,
});