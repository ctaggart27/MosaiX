### HOW TO PULL UPDATES TO PARENT VERSION OF REPO-YOU-FORKED-FROM
#### 1. Clone your fork: `git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git`
   #### 2. Add remote from original repository in your forked repository:
  - `$ cd into/cloned/fork-repo`
  - `$ git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git`
    <!-- (tom-cons spritr Repo: https://github.com/tom-con/spritr.git) -->
  - `$ git fetch upstream`

#### 3. Updating your fork from original repo to keep up with their changes:

   - `$ git pull upstream master`

![Alt text](Screen Shot 2017-04-14 at 8.51.45 AM.png?raw=true "Title")

_________________________________________

### GIT TEAM WORK FLOW (Same repo with collaborator branches)
[By: tom-con](https://github.com/tom-con)

#####  •  MUST ONLY BE DONE BY ONE TEAM/PERSON/PAIR AT ONCE

1. Have one person setup the git repo on github
  -  Add collaborators
2. Team clones that repo
3. Make stories
4. Make issues(?)
5. Do git workflow for issues/stories
  1. ` $ git pull`
 2.  `$ git checkout -b {{BRANCH NAME}}`
  3.  Fix issues/complete stories
 4.  `$ git add -A ((or specific files))`
 5.  `$ git commit -m “Fixes the issue/completes the story"`  
    - `$ git checkout master`
    - `$ git pull`
    - `$ git checkout {{BRANCH NAME}}`
    - `$ git rebase master`
    - `$ git checkout master`
    - `$ git merge {{BRANCH NAME}}`
    -` $ git push origin master`
    - `$ git branch -d {{BRANCH NAME}}`

This completes the entire cycle for a single feature fix.

_________________________________________
## **Force pull**
(Others commits)
[StackOverflow
By: RNA](http://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files)

#### _Important_: If you have any local changes, they will be lost. With or without `--hard` option, any local commits that haven't been pushed will be **_ lost_**.

If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

I think this is the right way:
`git fetch --all`

Then, you have two options: `git reset --hard origin/master`

OR If you are on some other branch: `git reset --hard origin/<branch_name>`

Explanation:
`git fetch` downloads the latest from remote without trying to merge or rebase anything.

Then the `git reset` resets the master branch to what you just fetched. The `--hard` option changes all the files in your working tree to match the files in origin/master

- It's worth noting that it is possible to maintain current local commits by creating a branch from master before resetting:
- `git checkout master`
- `git branch new-branch-to-save-current-commits`
- `git fetch --all`
- `git reset --hard origin/master`

After this, all of the old commits will be kept in new-branch-to-save-current-commits. Uncommitted changes however (even staged), will be lost. Make sure to stash and commit anything you need.
