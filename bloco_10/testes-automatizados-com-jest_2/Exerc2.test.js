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

describe('Testing users BD', () => {
  test('gets existing users', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toStrictEqual('Mark');
    });
  });

  test('gets not existing users', () => {
    expect.assertions(1);
    return findUserById(0).catch(error =>
      expect(error).toEqual({ error: 'User with 0 not found.' })
    );
  });
});