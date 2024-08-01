# To-Do List CRUD app
Following from [the last CRUD app I worked on](https://github.com/geraldiner/acnh-quotes), I tried to create this simple To-Do List from scratch and from memory, while following along with [LearnWithLeon](https://twitch.tv/learnwithleon).

There is a simple form to add a single to-do item, a checkbox to mark it as done or not done, and a trashcan to delete the to-do item. It also lets you know how many items are left to do on the To-Do List.
  
## How It's Made
**Tech used:** HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB
 
The To-Do List is a simple NodeJS app with the information about the to-do list stored in MongoDB.

It follows in the CRUD form:
- Create - adds a to-do item to the list
- Read - gets the information from the database to display on the webpage using an `ejs` template
- Update - updates each to-do item as done/not done with a click of the checkbox
- Delete - deletes a to-do item if the trashcan is clicked

On the client-side, JavaScript handles the `click` events for the checkboxes and trashcans. When clicked, the appropriate request (`delete` for trashcan, `put` for checkboxes) will be sent to my server-side JavaScript to connect to MongoDB and either delete the item or set its 'done' state appropriately.
 
## Optimizations
The major issue with this To-Do List is that it's one to-do list for **everyone** on the internet. I know LearnWithLeon covers authentication with Microsoft authentication, but haven't gotten that far yet. It would be interesting to try out different authentication handlers, like Google Passport, but that might be for another day.
 
## Lessons Learned
 
I think my greatest "fist pump in the air" moment was getting the checkbox functionality working. I'd deviated from what LearnWithLeon was doing by using an icon, which could be clicked to mark the to-do item as done or not done based on its current state.

I knew that I was already using a `class` of `.done` on items that were marked "done", so I had to check whether or not that to-do item had it or not. When making the `PUT` request, I would just have to send the opposite of the current state to make it the opposite.
 










## Other Projects

Check out other stuff I've worked on:

**Secret Santa App**: https://github.com/geraldiner/secret-santa-app

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

## Currently I'm:

- Working full-time at <a target="_blank" href="https://nomnomnow.com">Nom Nom</a>, migrating JavaScript to TypeScript
- Building my brand, <a target="_blank" href="https://happiandco.com">Happi & Co. Studio LLC</a>

But I'm always open to hearing about your next big thing!

## Let's get to know each other!

Connect with me:

**Twitter**: [@GeraldineDesu](https://twitter.com/geraldinedesu)

**LinkedIn**: [in/GeraldineR](https://linkedin.com/in/geraldiner)

**Email**: hello [at] geraldiner [dot] com
