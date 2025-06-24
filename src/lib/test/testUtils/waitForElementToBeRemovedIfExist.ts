import { waitForElementToBeRemoved } from '@testing-library/react';

const waitForElementToBeRemovedIfExist = async (
  ...args: Parameters<typeof waitForElementToBeRemoved>
) => {
  if (args[0])
    await waitForElementToBeRemoved(args[0], { ...args[1], timeout: 3000 });
};

export default waitForElementToBeRemovedIfExist;
