import { useShallow } from 'zustand/react/shallow';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { useCardSortMethods } from '@features/examConfig/api/getCardSortMethods';
import { useExamConfigStore } from '@store/exam/examConfigStore';

function SortMethodSelect() {
  const { name: sortMethodName, code: sortMethodCode } = useExamConfigStore(
    useShallow(state => state.sortMethod),
  );
  const setSortMethod = useExamConfigStore(state => state.setSortMethod);

  const { data: sortMethodData } = useCardSortMethods();

  const items = sortMethodData.map(({ name, code }) => ({
    name,
    value: code,
    id: code,
  }));

  return (
    <CommonCombobox
      items={items}
      selectedItem={{
        name: sortMethodName,
        value: sortMethodCode,
        id: sortMethodCode,
      }}
      onChangeCombobox={({ name, value }) =>
        setSortMethod({ name, code: value })
      }
      buttonLabel='정렬 옵션 선택'
    />
  );
}

export default SortMethodSelect;
