import { Registry, Request } from 'miragejs';
import { AnyFactories, AnyModels } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

export const getEventList = (schema: Schema<Registry<AnyModels, AnyFactories>>, request: Request) => {
  return {
    ok: true,
    code: 200,
    data: [
      {
        name: 'Sự kiện 1',
        description:
          'Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1. Đây là sự kiện số 1.',
        waitingTime: 1800000,
        startTime: 1636603632000,
        reward: 1000000,
        host: {
          id: 5,
          fullname: 'Host Nguyễn Đức',
          username: 'user1',
          phone: '0989871824',
          email: 'user@gmail.com',
          type: 'USER',
          avatar: null,
          status: 'ACTIVE',
          birthday: 1589871824,
          created_at: 1589871824,
          updated_at: null,
        },
        question: [
          {
            id: 1,
            question: 'Câu hỏi 1 ABCDEF',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 2,
            question: 'Câu hỏi 2 GHIJKL',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 1,
            question: 'Câu hỏi 3 LMNOP',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
        ],
        id: 1,
        status: 'ACTIVE',
      },
      {
        name: 'Sự kiện 2',
        description: 'Đây là sự kiện số 2. Đây là sự kiện số 2.',
        waitingTime: 1800000,
        startTime: 1636474032000,
        reward: 2000000,
        host: {
          id: 5,
          fullname: 'Host Nguyễn Đức',
          username: 'user1',
          phone: '0989871824',
          email: 'user@gmail.com',
          type: 'USER',
          avatar: null,
          status: 'ACTIVE',
          birthday: 1589871824,
          created_at: 1589871824,
          updated_at: null,
        },
        question: [
          {
            id: 1,
            question: 'Câu hỏi 1 ABCDEF',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 2,
            question: 'Câu hỏi 2 GHIJKL',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 1,
            question: 'Câu hỏi 3 LMNOP',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
        ],
        id: 1,
        status: 'ACTIVE',
      },
      {
        name: 'Sự kiện 3',
        description: 'Đây là sự kiện số 3. Đây là sự kiện số 3.',
        waitingTime: 1800000,
        startTime: 1636344432000,
        reward: 3000000,
        host: {
          id: 5,
          fullname: 'Host Nguyễn Đức',
          username: 'user1',
          phone: '0989871824',
          email: 'user@gmail.com',
          type: 'USER',
          avatar: null,
          status: 'ACTIVE',
          birthday: 1589871824,
          created_at: 1589871824,
          updated_at: null,
        },
        question: [
          {
            id: 1,
            question: 'Câu hỏi 1 ABCDEF',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 2,
            question: 'Câu hỏi 2 GHIJKL',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 1,
            question: 'Câu hỏi 3 LMNOP',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
        ],
        id: 1,
        status: 'ACTIVE',
      },
      {
        name: 'Sự kiện 2',
        description: 'Đây là sự kiện số 2. Đây là sự kiện số 2.',
        waitingTime: 1800000,
        startTime: 1636474032000,
        reward: 2000000,
        host: {
          id: 5,
          fullname: 'Host Nguyễn Đức',
          username: 'user1',
          phone: '0989871824',
          email: 'user@gmail.com',
          type: 'USER',
          avatar: null,
          status: 'ACTIVE',
          birthday: 1589871824,
          created_at: 1589871824,
          updated_at: null,
        },
        question: [
          {
            id: 1,
            question: 'Câu hỏi 1 ABCDEF',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 2,
            question: 'Câu hỏi 2 GHIJKL',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 1,
            question: 'Câu hỏi 3 LMNOP',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
        ],
        id: 1,
        status: 'ACTIVE',
      },
      {
        name: 'Sự kiện 3',
        description: 'Đây là sự kiện số 3. Đây là sự kiện số 3.',
        waitingTime: 1800000,
        startTime: 1636344432000,
        reward: 3000000,
        host: {
          id: 5,
          fullname: 'Host Nguyễn Đức',
          username: 'user1',
          phone: '0989871824',
          email: 'user@gmail.com',
          type: 'USER',
          avatar: null,
          status: 'ACTIVE',
          birthday: 1589871824,
          created_at: 1589871824,
          updated_at: null,
        },
        question: [
          {
            id: 1,
            question: 'Câu hỏi 1 ABCDEF',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 2,
            question: 'Câu hỏi 2 GHIJKL',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
          {
            id: 1,
            question: 'Câu hỏi 3 LMNOP',
            answer: [
              {
                type: 'text',
                correct: false,
                value: 'Đáp án A',
                label: 'A',
              },
              {
                type: 'text',
                correct: true,
                value: 'Đáp án B',
                label: 'B',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án C',
                label: 'C',
              },
              {
                type: 'text',
                correct: false,
                value: 'Đáp án D',
                label: 'D',
              },
            ],
            status: 'ACTIVE',
          },
        ],
        id: 1,
        status: 'ACTIVE',
      },
    ],
    pagination: {
      page: 1,
      limit: 10,
      sort: '',
      total: 10,
      total_items: 50,
      current: 10,
    },
  };
};
