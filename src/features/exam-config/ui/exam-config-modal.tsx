import Modal from '@/shared/ui/modal';
import TimeLimitInput from './time-limit-input';
import ExposeSelector from './expose-exam-option-select';
import VerseCountInput from './verse-count-input';
import { useExamConfigModalStore } from '../model/exam-config-modal-store';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import { Field } from '@headlessui/react';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import Loader from '@/shared/ui/Loader';
import { useNavigate } from 'react-router-dom';
import { useExamConfigStore } from '../model/exam-config-store';
import { useShallow } from 'zustand/react/shallow';
import { routes } from '@/shared/constants/routes';

export function ExamConfigModal() {
  const navigate = useNavigate();
  const isOpen = useExamConfigModalStore(state => state.isOpen);
  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);

  const isConfigValid = useExamConfigStore(
    useShallow(state => state.isConfigValid),
  );

  const navigateToExam = () => {
    if (!isConfigValid()) {
      alert('시험설정 입력을 완료해주세요.');
      return;
    }
    void navigate(routes.exam.path);
  };

  return (
    <Modal
      title='시험설정'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickConfirmCallback={navigateToExam}
    >
      {isOpen && (
        <div className='mx-auto mb-12 mt-10 flex max-w-[200px] flex-col items-start space-y-5'>
          <TimeLimitInput />
          <Field className='flex w-full flex-col items-start text-left'>
            <CommonCombobox.Label>표시</CommonCombobox.Label>
            <ComposedBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorMessage
                  error={error}
                  resetErrorBoundary={resetErrorBoundary}
                  className='flex-col items-start'
                />
              )}
              suspenseFallback={<Loader />}
            >
              <ExposeSelector />
            </ComposedBoundary>
          </Field>
          <VerseCountInput />
        </div>
      )}
    </Modal>
  );
}
