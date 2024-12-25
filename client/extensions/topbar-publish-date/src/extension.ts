import {ISuperdesk, IExtension, IExtensionActivationResult} from 'superdesk-api';
import {getPublishDate} from './publish-date';

const extension: IExtension = {
    activate: (superdesk: ISuperdesk) => {
        const result: IExtensionActivationResult = {
            contributions: {
                authoringTopbar2Widgets: [getPublishDate(superdesk)],
            },
        };

        return Promise.resolve(result);
    },
};

export default extension;
