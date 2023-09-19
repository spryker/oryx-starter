import { bootstrap } from '@spryker-oryx/application/service-worker';
import { appBuilder } from '@spryker-oryx/application';

appBuilder()
  .withEnvironment({ ...process.env })
  .create()
  .then(() => console.debug('Service worker app started!'))
  .catch(console.error);

bootstrap();
