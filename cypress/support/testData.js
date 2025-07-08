export const testUser = {
  email: 'Shilinaghimire@yahoo.com',
  password: 'TestNotes@123',
  fullName: 'Sumana Test Cypress',
  newName: 'Sumana Profile Updated'
};

// For new test signup
export const getUniqueTestUser = () => ({
  ...testUser,
  email: `testuser_${Date.now()}@example.com`
});

// For signup mismatch test
export const getMismatchedUser = () => ({
  email: `mismatch_${Date.now()}@example.com`,
  password: testUser.password,
  fullName: 'Mismatch Tester',
  confirmPassword: 'WrongPass123!'
});

// Login input variants
export const loginTestData = {
  valid: {
    email: testUser.email,
    password: testUser.password
  },
  invalidPassword: {
    email: testUser.email,
    password: 'WrongPass123!'
  },
  invalidEmail: {
    email: 'nonexisting@example.com',
    password: testUser.password
  },
  blank: {
    email: ' ',
    password: ' '
  }
};

//For category test
export const categoryConfigs = [
  {
    name: 'Home',
    noteTitle: 'Test Home Category Note',
    noteDescription: 'This is a Home note for color test',
    expectedColor: ['rgb(255, 145, 0)', '#ffa500']
  },
  {
    name: 'Work',
    noteTitle: 'Test Work Category Note',
    noteDescription: 'This is a Work note for color test',
    expectedColor: ['rgb(92, 107, 192)', '#00aeff']
  },
  {
    name: 'Personal',
    noteTitle: 'Test Personal Category Note',
    noteDescription: 'This is a Personal note for color test',
    expectedColor: ['rgb(50, 140, 160)', '#6610f2']
  }
];

//For search test
export const searchTestData = {
  validQuery: 'home',
  invalidQuery: 'qwerty-no-match-999',
  expectedTitleFragment: 'Test Home Category Note'
};

