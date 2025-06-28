import { waitForElementToBeRemoved } from '@testing-library/react';

const waitForElementToBeRemovedIfExist = async (
  ...args: Parameters<typeof waitForElementToBeRemoved>
) => {
  const isElementExist = Array.isArray(args[0])
    ? (args[0] as []).length > 0
    : args[0];

  if (isElementExist)
    await waitForElementToBeRemoved(args[0], { ...args[1], timeout: 3000 });
};

export default waitForElementToBeRemovedIfExist;
