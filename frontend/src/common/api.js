import {domain} from './constants';

export const get = (url) => {
  return fetch(`${domain}/api${url}`)
            .then(res => res.json());

};

export const post = (url, data, header = 'application/json') => {
    return fetch(`${domain}/api${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': header
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json());
};
