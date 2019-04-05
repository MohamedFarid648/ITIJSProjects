import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GitHubUsersPage } from './git-hub-users';

@NgModule({
  declarations: [
    GitHubUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(GitHubUsersPage),
  ],
})
export class GitHubUsersPageModule {}
