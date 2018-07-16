jest.mock("react-dom", () => {
    return {
        render: () => null,
        unmountComponentAtNode: () => null,
        findDOMNode: () => { return {} },
    };
 });

import initStoryshots from '@storybook/addon-storyshots';

initStoryshots();