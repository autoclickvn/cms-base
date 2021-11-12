import { Button, Portlet, PortletBody, PortletHeader } from '@ekidpro/ui';
import axios from 'axios';
import clsx from 'clsx';
import { Formik } from 'formik';
import { get } from 'lodash';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { MOCK_DOMAIN } from '__mocks__/server';
import { onCreateEvent, onUpdateEvent } from './event-create.action';
import { InputField } from './event-create.input-field';
import { SelectTimeField } from './event-create.select-time';
import { StatusField } from './event-create.status';
import { createEventSchema, initialValues } from './event-create.types';
import { SelectWaitingTimeField } from './event-create.waiting-time';

export const EventCreate: React.FC = () => {
  const eventId = get(useParams(), 'id');
  const history = useHistory();
  // const [eventDetail, setEventDetail] = useState<EventType | undefined>(undefined);

  const defaultValues = initialValues;

  const getEventDetail = (eventId: string | number) => {
    axios
      .get(`${MOCK_DOMAIN}/event/1`)
      .then((response) => {
        const { ok, message } = response.data;
        if (!ok || response.status > 400) {
          throw new Error(message || 'Không thể lấy thông tin sự kiện');
        }
        // setEventDetail(data);
      })
      .catch((e) => toast.error(e.message, { autoClose: false }));
  };

  useEffect(() => {
    if (eventId) {
      getEventDetail(eventId);
    }
  }, [eventId]);

  return (
    <Portlet className="shadow-none">
      <PortletHeader title={eventId ? 'Cập nhật sự kiện' : 'Tạo sự kiện'} />
      <PortletBody className="p-5 md:px-0 md:w-4/5 lg:w-2/3 md:mx-auto shadow-none">
        <div>
          <Formik
            enableReinitialize
            initialValues={defaultValues}
            validationSchema={createEventSchema}
            onSubmit={(values, actions) => {
              if (!eventId) {
                onCreateEvent(values, actions)
                  .then((response) => {
                    if (get(response, 'success')) {
                      console.log('create success');
                    }
                  })
                  .catch((err) => console.log(err));
              } else {
                onUpdateEvent(values, actions, eventId)
                  .then((response) => {
                    if (get(response, 'success')) {
                      console.log('update success');
                    }
                  })
                  .catch((err) => console.log(err));
              }
            }}
          >
            {({ handleSubmit, isSubmitting }) => {
              return (
                <div className="md:mt-10">
                  <div className="md:px-5">
                    <InputField field="name" title="Tên sự kiện" required />

                    <InputField field="description" title="Mô tả" inputType="textarea" rows={3} />

                    <SelectTimeField field="startTime" title="Thời gian bắt đầu" required />

                    <SelectWaitingTimeField />

                    <StatusField />
                  </div>

                  <div className="w-full grid grid-cols-3 gap-y-2 md:gap-y-2 pb-10">
                    <div className="col-span-4 md:col-span-1" />
                    <div className="flex flex-col pt-4 col-span-4 md:col-span-4 relative">
                      <hr />
                      <div className="flex flex-row space-x-4 ml-auto mt-5">
                        <Button variant="secondary" className="ml-auto" onClick={() => history.goBack()}>
                          Quay lại
                        </Button>
                        <Button
                          disabled={isSubmitting}
                          variant="primary"
                          type="submit"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            handleSubmit();
                          }}
                        >
                          <div className="flex flex-row space-x-2 items-center">
                            <svg
                              className={clsx('animate-spin -ml-1 mr-3 h-5 w-5 text-white', { hidden: !isSubmitting })}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={4}
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            {eventId ? 'Cập nhật' : 'Tạo mới'}
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>
      </PortletBody>
    </Portlet>
  );
};
