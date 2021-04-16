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
 * @param text content that should be displayed in the haste
 * @returns response from server
 */
export const createHaste = async (hostname: string, text: string) => {
  const generatedId: string = generateId(8);

  let res: any = '';

  const response = await fetch(hostname + '/haste', {
    method: 'post',
    body: JSON.stringify({ id: generatedId, content: text }),
    headers: { 'Content-Type': 'application/json' },
  }).catch((err) => (res = err));
  return response.json();
};

/**
 * Get the Content from the Haste and other data
 * @param hostname web address from the api server
 * @param id id from the haste
 * @returns json object from api
 */
export const getHaste = async (hostname: string, id: string) => {
  let res: any = '';

  const response = await fetch(hostname + '/haste/' + id, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).catch((err) => (res = err));
  return response.json();
};
