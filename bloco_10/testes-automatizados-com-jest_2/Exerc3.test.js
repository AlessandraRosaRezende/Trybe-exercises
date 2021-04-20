const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testing users BD with async/await', () => {
  test('gets existing users', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toStrictEqual('Mark');
  });
    
  test('gets not existing users', async () => {
    expect.assertions(1);
    try {
      await getUserName(0); 
    } catch (error) {
      expect(error).toEqual({ error: 'User with 0 not found.' })
    } 
  });
});