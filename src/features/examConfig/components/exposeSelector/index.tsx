import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { useShallow } from 'zustand/react/shallow';
import { useExamExposeOptions } from '@features/examConfig/api/getExamExposeOptions';
import { useExamConfigStore } from '@store/exam/examConfigStore';

function ExposeSelector() {
  const { name: exposeOptionName, code: exposeOptionCode } = useExamConfigStore(
    useShallow(state => state.exposeOption),
  );
  const setExposeOption = useExamConfigStore(state => state.setExposeOption);

  const { data: exposeOptionData } = useExamExposeOptions();

  const items = exposeOptionData.map(({ name, code }) => ({
    name,
    value: code,
    id: code,
  }));

  return (
    <CommonCombobox
      items={items}
      selectedItem={{
        name: exposeOptionName,
        value: exposeOptionCode,
        id: exposeOptionCode,
      }}
      onChangeCombobox={({ name, value }) =>
        setExposeOption({ name, code: value })
      }
      buttonLabel='시험구절 옵션 선택'
    />
  );
}

export default ExposeSelector;
