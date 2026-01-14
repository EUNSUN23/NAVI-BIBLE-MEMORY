import { useCardHideOptionStore } from '../../model/store';
import { useShallow } from 'zustand/react/shallow';
import { CommonCombobox, CommonComboboxItem } from '@/shared/ui/commonCombobox';
import { useSuspenseQuery } from '@tanstack/react-query';
import { cardHideOptionQueries as cardHideOptionApi } from '@/entities/cardHideOption';

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

  const { data } = useSuspenseQuery(cardHideOptionApi.list());

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
