import axios from 'axios';
import { URL } from './constants';

const get = async () => {
  try {
    const { data } = await axios.get(URL);

    return data;
  } catch(error) {
    return [];
  }
};

const update = async (id, body) => {
  try {
    const { data } = await axios.patch(`${URL}/${id}`, body);

    return data;
  } catch(error) {
    return null;
  }
};

const create = async (body) => {
  try {
    const { data } = await axios.post(URL, body);

    return data;
  } catch(error) {
    return null;
  }
};

const del = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`)
    return true;
  } catch (error) {
    return false;
  }
};

export {
  get,
  update,
  create,
  del,
}
