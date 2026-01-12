import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { useShallow } from 'zustand/react/shallow';
import { useExamConfigStore } from '@store/exam/examConfigStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { examExposeOptionApi } from '@/entities/examExposeOption';

function ExposeSelector() {
  const { name: exposeOptionName, code: exposeOptionCode } = useExamConfigStore(
    useShallow(state => state.exposeOption),
  );
  const setExposeOption = useExamConfigStore(state => state.setExposeOption);

  const { data: exposeOptionData } = useSuspenseQuery(
    examExposeOptionApi.list(),
  );

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
      buttonLabel='시험 노출 옵션 선택'
    />
  );
}

export default ExposeSelector;
