import axios from 'axios';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { CreateUserValues } from './user-create.types';

export const onCreateUser = (values: CreateUserValues, actions: FormikHelpers<CreateUserValues>) => {
  const formData = new FormData();
  formData.set('fullname', values.fullname);
  formData.set('username', values.username);
  formData.set('phone', values.phone);
  formData.set('email', values.email);
  formData.set('birthday', `${values.birthday}`);
  formData.set('type', values.type);
  formData.set('status', values.status ? 'ACTIVE' : 'INACTIVE');
  if (values.avatar) {
    formData.set('avatar', values.avatar || '');
  }

  return axios
    .post('/users/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      const { ok, message, data } = res.data;

      if (!ok || res.status > 400) {
        throw new Error(message ?? `Không thể tạo người dùng`);
      }

      toast.success('Tạo người dùng thành công');
      actions.setSubmitting(false);
      return Promise.resolve({ success: true, id: data.id });
    })
    .catch((err) => {
      actions.setSubmitting(false);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
      return Promise.resolve({ success: false });
    });
};

export const onUpdateUser = (
  values: CreateUserValues,
  actions: FormikHelpers<CreateUserValues>,
  userId: string | number,
) => {
  const formData = new FormData();
  formData.set('fullname', values.fullname);
  formData.set('username', values.username);
  formData.set('phone', values.phone);
  formData.set('email', values.email);
  formData.set('birthday', `${values.birthday}`);
  formData.set('type', values.type);
  formData.set('status', values.status ? 'ACTIVE' : 'INACTIVE');
  if (values.avatar === null || (values.avatar && typeof values.avatar !== 'string')) {
    formData.append('avatar', values.avatar);
  }

  return axios
    .put(`/users/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      const { ok, message } = res.data;
      if (!ok || res.status > 400) {
        throw new Error(message ?? `Không thể cập nhật người dùng`);
      }
      actions.setSubmitting(false);
      toast.success('Cập nhật người dùng thành công');
      return Promise.resolve({ success: true });
    })
    .catch((err) => {
      actions.setSubmitting(false);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
      return Promise.resolve({ success: false });
    });
};
