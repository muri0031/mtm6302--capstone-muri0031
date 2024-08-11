mtm6302-capstone-muri0031

Karla Murillo Student number: 041106956 Project: Pokedex

# Design Desicions
I decided to use three colors for the design. The primary color is black, the secondary color is yellow, and the tertiary color is white. The design uses yellow to highlight the main parts because it contrasts strongly with the black background. These colors are inspired by one of the most famous Pokeballs in Pokemon.

I chose these fonts: Indie flower,Itim & Imprima, because they match the app's style, which is meant to be fresh and attractive for young people. The buttons have a hover effect that switches the colors to their inverse.

On the home page, all the Pokemon are displayed in small boxes with a Pokeball inside. Each box shows the Pokemon's name, number, and category. If someone clicks on a Pokemon, the website will redirect them to a page with that Pokemon's characteristics, including its abilities, stats, weight, height, and more.

Users can see if a Pokemon has been caught because all caught Pokemon have a small Pokeball above their box. Additionally, on the main page of a caught Pokemon's characteristics, a "caught" sign will be displayed at the top of the page.

When the user is on the page for each Pokemon showing its characteristics, the Pokemon will be displayed inside a Pokeball to highlight it. The characteristics will be shown in different sections around the Pokeball to make it more attractive and easier to read.

On the home page, there's a "show more" button to display 20 more Pokemon. There are also "caught" and "uncaught" buttons to filter the Pokemon based on whether they have been caught.

At the bottom of each Pokemon page, there are two buttons: one to go back to the home page and another to go to the next Pokemon in numerical order.

All these decisions were made based on the user needs and to make the site attractive and easy to understand.

Steps to create the prototype
I created the home page with the main elements and the buttons to filter the Pokemons.

First I started the first html page, which is index.html. After creating that page, I added images for that page and started to create the main.css to style that page. I used flexbox and grid to create columns and rows, depending on each situation.

The first version that I created was the desktop version, I added all the details and after that I used media queries to create tablet and mobile versions, using flexbox and grid to make the page responsive.

I created the page for each Pokemon with the characteristics and the buttons to go back to the home page and to go to the next Pokemon.

I created the CSS for the home page and the pages for each Pokemon. I added style in css and made it responsive with media queries.

I got all the information from https://pokeapi.co/about. I got images, names, descriptions, numbers and evolutions.



## Steps to create the dinamic website
1. First I followed the provided instructions in class to display the first pokemon, once I confirmed that it worked I started added more functions. I erased the current content that I have in inde.html through java with inner html.

2. Then I added the following instructions
inside the function display pokemon I get the document from html for the card to display each pokemon in a card, and with the pokeapi I added, name, number and image.

3. After this I Added an eventListener, so when I click on the name of each pokemon, a new page is displayed to show name, abilities, stats, and categories. I create new div and add class to the new divs, the class name was the same that I had in html, in this case I used the same css to display the information. I just changed some classes because I displayed some other information that I did not have, so I have to update that part in css, but using the same design that I had.

3. The next step was adding a close button to close the new page after reading the information, I added this button to the function to display pokemons in the new page.

4. After that point I created a button to check if the pokemon was caught or uncaught, this button was added to the main page, in each pokemon card.

5. I made sure that I have this in the local storage and that once i refresh the website I don't lose any information. I change the color in css for the caught if it's clicked.

6. I added this information in the eventListener to display the new page for each pokemon, I made sure that this information is checked in the local storage, so once I click in the caught button, I don't have to make any refresh to update the information.

7. I change the let cuurent page to 2 to display 2 more pokemons with the show more button.

8. I made sure that all the buttons are working and the website doesn't have any problems with refresh.


