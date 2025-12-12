# art-supply-tracker-django

This is a hybrid React-Django project.

Original React files reside in assets. Compiled/built files reside in static (which also holds CSS and images) and are automatically added on build. Each Django template that uses React loads the appropriate React component from the static folder and renders it within the template.

Currently, this project manages data with SQLite. If, after deployment, this gets a lot of users, I'll reconsider that, but currently SQLite seems like the best choice given its current state as a personal project with only one user.

## In Progress
* Authentication
* Refactoring HTML into React Components for long term maintainability
* Refactoring CSS into modules to prevent conflicts through scoping
* Additional site styling

## To Do
* Wishlist feature
* CRUD for user art supplies
* Search/filter/view existing art supplies
* Categories / database structure for supplies
* User account management