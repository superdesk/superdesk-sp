import {startApp} from 'superdesk-core/scripts/index';

setTimeout(() => {
    startApp(
        [
            {
                id: 'broadcasting',
                load: () => import('superdesk-core/scripts/extensions/broadcasting'),
            },
        ],
        {},
    );
});

export default angular.module('main.superdesk', []);
