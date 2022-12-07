import axios from 'axios';

import * as todos from './todos';

jest.mock('axios');

const mock = [
  { id: 1, title: "test", done: false },
  { id: 2, title: "test", done: true },
];

describe('todos', () => {
  describe('get', () => {
    it('successful', async () => {
      axios.get.mockResolvedValue({ data: mock });
      const response = await todos.get();

      expect(response).toBe(mock);
    });

    it('unsuccessful', async () => {
      axios.get.mockRejectedValue();
      const response = await todos.get();

      expect(response).toStrictEqual([]);
    });
  });

  describe('patch', () => {
    it('successful', async () => {
      axios.patch.mockResolvedValue({ data: { id: 2, title: "test", done: false }});
      const response = await todos.update(2, { ...mock[1], done: false });

      expect(response).toMatchObject({ ...mock[1], done: false });
    });

    it('unsuccessful', async () => {
      axios.patch.mockRejectedValue();
      const response = await todos.update(2, { ...mock[1], done: false });

      expect(response).toBeNull();
    });
  });

  describe('post', () => {
    it('successful', async () => {
      const todo = { id: 3, title: "test", done: false };
      axios.post.mockResolvedValue({ data: todo });
      const response = await todos.create(todo);

      expect(response).toMatchObject({ ...todo });
    });

    it('unsuccessful', async () => {
      const todo = { id: 3, title: "test", done: false };
      axios.post.mockRejectedValue();
      const response = await todos.create(todo);

      expect(response).toBeNull();
    });
  });

  describe('delete', () => {
    it('successful', async () => {
      axios.delete.mockResolvedValue();
      const response = await todos.del(1);

      expect(response).toBeTruthy();
    });

    it('unsuccessful', async () => {
      axios.delete.mockRejectedValue();
      const response = await todos.del(1);

      expect(response).toBeFalsy();
    });
  });
});
