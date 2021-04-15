import fetch from 'node-fetch';

const generateId = (length: number) => {
  const result = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
};

/**
 * Send a Request to the API and Create a new haste
 * @param hostname web address from the api server
 * @param content content that should be displayed in the haste
 * @param id if null it will be set automatically
 * @returns response from server
 */
export const createHaste = async (hostname: string, content: string, id?: string) => {
  if (id === null) id = generateId(8);

  const jsonObject = {
    id,
    content,
  };
  let res: any = '';

  await fetch(hostname + '/haste', { method: 'POST', body: JSON.stringify(jsonObject) })
    .then((response) => (res = response))
    .catch((err) => (res = err));
  return res;
};

/**
 * Get the Content from the Haste and other data
 * @param hostname web address from the api server
 * @param id id from the haste
 * @returns json object from api
 */
export const getHaste = async (hostname: string, id: string) => {
  let res: any = '';

  await fetch(hostname + '/haste/' + id)
    .then((response) => (res = response))
    .catch((err) => (res = err));
  return res;
};

/**
 * Delete Haste
 * @param hostname  web address from the api server
 * @param id id from the haste
 * @returns json object
 */
export const deleteHaste = async (hostname: string, id: string) => {
  let res: any = '';

  await fetch(hostname + '/haste/' + id, { method: 'DELETE' })
    .then((response) => (res = response))
    .catch((err) => (res = err));
  return res;
};
