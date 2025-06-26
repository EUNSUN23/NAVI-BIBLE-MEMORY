import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useShallow } from 'zustand/react/shallow';
import { useBibleVersions } from '@features/bibleVersionSelect/api/getBibleVersions';
import { CommonCombobox, CommonComboboxItem } from '@/shared/ui/commonCombobox';

function BibleVersionCombobox() {
  const selectedItem = useBibleVersionStore(
    useShallow(({ bibleVersion: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );

  const setBibleVersion = useBibleVersionStore(state => state.setBibleVersion);

  const { data } = useBibleVersions();

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
