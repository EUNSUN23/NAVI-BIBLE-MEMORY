import { useBibleVersionStore } from '../model/store';
import { useShallow } from 'zustand/react/shallow';
import { bibleVersionApi } from '@entities/bible-version';
import { CommonCombobox, CommonComboboxItem } from '@shared/ui/commonCombobox';
import { useSuspenseQuery } from '@tanstack/react-query';

function BibleVersionCombobox() {
  const selectedItem = useBibleVersionStore(
    useShallow(({ bibleVersion: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );

  const setBibleVersion = useBibleVersionStore(state => state.setBibleVersion);

  const { data } = useSuspenseQuery(bibleVersionApi.list());

  const selectItems = data.map(({ code, name }) => ({
    name,
    value: code,
    id: code,
  }));

  return (
    <CommonCombobox
      items={selectItems}
      selectedItem={selectedItem}
      onChangeCombobox={(item: CommonComboboxItem) =>
        setBibleVersion({ name: item.name, code: item.value })
      }
      buttonLabel='성경버전 선택'
    />
  );
}

export default BibleVersionCombobox;
