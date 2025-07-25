import { useCardHideOptionStore } from '@store/drilling/cardHideOptionStore';
import { useShallow } from 'zustand/react/shallow';
import { useCardHideOptions } from '@features/cardHideOptionSelect/api/getCardHideOptions';
import { CommonCombobox, CommonComboboxItem } from '@/shared/ui/commonCombobox';

function CardHideOptionCombobox() {
  const selectedItem = useCardHideOptionStore(
    useShallow(({ cardHideOption: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );

  const setCardHideOption = useCardHideOptionStore(
    state => state.setCardHideOption,
  );

  const { data } = useCardHideOptions();

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <CommonCombobox
      items={items}
      selectedItem={selectedItem}
      onChangeCombobox={(item: CommonComboboxItem) => {
        setCardHideOption({ name: item.name, code: item.value });
      }}
      buttonLabel='숨김 옵션 선택'
    />
  );
}

export default CardHideOptionCombobox;
