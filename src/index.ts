import fetch from 'node-fetch';

const generateId = (length: number) => {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
};

export const createHaste = async (hostname: string, content: string, id?: string) => {
  if (id === null) id = generateId(8);

  const jsonObject = {
    id: id,
    content: content,
  };
  let res: any = '';

  await fetch(hostname + '/haste', { method: 'POST', body: JSON.stringify(jsonObject) })
    .then((response) => (res = response))
    .catch((err) => console.error(err));
  return res;
};

export const getHaste = async () => {};

export const deleteHaste = async () => {};
