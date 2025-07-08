import ProfilePage from '../../support/page_objects/ProfilePage';
import LoginPage from '../../support/page_objects/LoginPage';
import { testUser } from '../../support/testData';

describe('Profile Module Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(testUser.email, testUser.password);
  });

  it('Update profile with valid name [Positive]', () => {
    ProfilePage.visit();
    ProfilePage.updateName(testUser.newName);
  });

  it('Delete account [Positive]', () => {
    ProfilePage.visit();
    ProfilePage.deleteAccount();
  });
});
