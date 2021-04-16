# Hastebin-API

Lightweight Typescript API for https://github.com/urento/Hastebin

# createHaste

- Send a Request to the API and Create a new haste
- @param hostname: web address from the api server
- @param content: content that should be displayed in the haste
- @returns response from server as json object

# getHaste

- Get the Content (and other data) from the Haste
- @param hostname: web address from the api server
- @param id: id from the haste
- @returns: response from server as json object

# Todo

- Add Constructor or something to make functions get rid of setting the hostname every time
