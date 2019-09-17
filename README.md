# Project 4: YesChef

## Overview

I have made a website where users post pictures and descriptions of meals they have made at home, allowing other people see your home made recipes and comment on them. User can then share ideas about home cooking!

This is my 4th and final coding project on the 3 month, GA software engineering immersive course.

The project took 1 week to build, and it was done using Node.js and React on the front end. Coupled with Python & Django.py framework on the backend.

![YesChef screen shot](https://user-images.githubusercontent.com/51379192/64771611-2dd77500-d547-11e9-81c4-d9a0c1719df5.png)

# Brief
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.

## Technologies used:

* HTML5, SCSS, JS
* Javascript ES6
* Node.js
* React
* Python
* Django
* Yarn
* Webpack
* Bulma
* filestack-react
* Babel
* Insomnia
* Heroku
* Git
* GitHub

### All features
* User login & out
* Register User
* Edit User information
* Post Meal
* Edit Meal
* Comment on Meal

### Pages:
* Home
* Newsfeed
* Profile
* About

## Login
![login](https://user-images.githubusercontent.com/51379192/64777318-d2f74b00-d551-11e9-8fdf-e19c095cb121.gif)

## View Profile
![profile](https://user-images.githubusercontent.com/51379192/65035752-dfa8e400-d941-11e9-83ed-24807a5e2a26.gif)

## See meal info and comments
![show](https://user-images.githubusercontent.com/51379192/64777449-1487f600-d552-11e9-816b-eb78e5739c08.gif)


## ProjectLog

| Time      | Task         |
| ------------- |:-------------:|
| **1 day**    | Project setup, Designing Models, wireframe,    |
| **2.5  days**     | Backend setup,     |
| **2 day**  | Frontend setup      |
| **1.5 day**  | Styling    |
| **1 day** | Bug fixes    |
| **0.5 day** | Deployment     |

## Challenges

#### Extending the User Model

The First and most significant challenge was extending the user in Django. Using information found online and working with other people in the class we came up with a method.

We were able to extend the User Model in our jwt_auth app folder. This was done by extending the defualt Django user models using an 'AbstractUser' - a feature Django provides.

> jwt_auth.models.py

```
from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

class User(AbstractUser):
    name = models.CharField(max_length=25, blank=True)
    image = models.CharField(max_length=200, blank=True)
    bio = models.CharField(max_length=200, blank=True)
    # add this line... not sure what it does..
    objects = UserManager()
```

#### Displaying different size images.

When uploading images to the site, both using the Django /admin page or the user posting a meal from their profile using React-filestack, neither way standardised the size and aspect of the image added.

When coming to display these different aspect images on both the profile & newsfeed it was difficult to come up with a good solution that looked presentable.

For both the NewsFeed and Profile pages, the meals were displayed in an unstructured format to maintain a full width of the images. A solution I was very happy with.

> Newsfeed.js

![newsfeedNEW](https://user-images.githubusercontent.com/51379192/65037310-467bcc80-d945-11e9-92ee-16d663eaa0eb.gif)

### Moving Forward

* Add a like button to Meals
* Enable users to post many images and display using a carousel.
* Standardise photo sizing for better display.
* Meeting with a UX designer to improve user journey.

## Contact

Freddie Hoy

Email: freddiehoy0@gmail.com

[Portfolio](https://freddiehoy.github.io/) | [LinkedIn](https://www.linkedin.com/in/freddie-hoy/) |
[GitHub](https://github.com/FreddieHoy?tab=repositories)
