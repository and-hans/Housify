# Housify

### So what is Housify and why does it sound like Spotify, Shopify, and all the other -ify's? 

Well first and foremost, I didn't come up with the name. I wanted "UP" like the movie, but that wasn't as professional and 
it was trademarked by Pixar (probably).

But anyways, think of Housify as the site to help people in their decision to purchase a home. 
Buying a home can be stressful, it's likely the largest purchase a person will make in their lifetime. That is not the easiest
thing for a person to have on their head at night. 

If you look at any mortgage calculator online, you'll see some confusing terms that no one has ever seen up to that 
point of their lives. No one (unless your a nerd like me) spends their time looking at concepts like amortization rates, property tax, interest rates, 
down payment, refinancing, et cetera. So, Housify aims to provide information and guidance on everything a person needs to consider
when thinking about buying a home.

Housify provides a central platform for people to learn financial concepts, calculate their estimated monthly home payments, gain insight on the housing
market with the help of machine learning, and create a plan for buying their future home.

This in theory leads to a less stressful home buying experience, a better fraud/scam awareness radar, and little tool people can use to keep track of 
of their property finances even after the house is bought. 

Housify could also be better for the economy (bit of a stretch). If there is anything we learned from the 2008 financial crisis, is that housing can make
or break the economy, and it is important to make sure that housing has a healthy flow of of owners to keep the machine going.

### A lesson from the past

Remember that little event from 2007-2009 called the Great Recession? Well a huge contributor to that economic disaster was the
housing industry.

You see Timmy, mortgages are loans that average people use to buy houses. By average, I mean the middle class. And you know what else?
Middle class people are the majority in most countries (developed countries at least), so anything bad that happens to the middle class affects
the entire economy. Basically, middle class == the economy.

Additionally, houses and mortgages tend to be a very integral part of a countries economy. These mortgages provide the big banks,
credit unions, and other various lenders the money they need to lend other people money. People use these loans to buy things, 
open businesses, pay employees, pay for tuition, charge things on credit, and the list goes on and one. You could say mortgages 
are the bedrock that the economy was built on, but that's a bit subjective.

Wake up Timmy, we haven't gotten to the good part! 

Even though mortgages and other loans allow lenders to run their operations, there's still a risk of a person defaulting (not 
being able to pay for) on their mortgages. So, the lending companies decides to securitize a bunch of these mortgages.
What that basically means is that, you take a bunch of mortgages and you put them into box (figuratively), and since the mortgages
generate income from the interest payments (banks don't lend money for free), the box prints out a bunch of money every month. 
For example, a single home may generate $800 a month in interest revenue, so if you put another 2000 homes in a box generating 
$800 a month, that box would end up producing $1,600,000 dollars a month in interest revenue. 

The lender then sells this box to investors. In turn, the lender is happy that the risk is off their back, the investor is happy that their
making a bunch of money from a safe asset (the box), and the insurance agencies are happy that they don't have to do their jobs.

Okay now is the recession related part. But first, the boxes (the mortgage box) are called mortgage bonds. I'll be using the official term from now on.

Mortgage bonds sound really good right? It generates a bunch of money for the investor, and it's very little risk, cause who doesn't pay their mortgage?
People need to pay their mortgages to keep their homes, so it would seem like the top priority for everyone.

But, mortgage bonds were too good. Everyone had their eyes on them and it attracted more greed as it got bigger. Now what happens when more greedy people 
get involved in a good idea? It get starts to get corrupted.

Back then, sub-prime mortgages were the big hype. These sub-prime mortgages were meant for people with less than ideal credit scores. 
It basically allowed people with a bad or little spending history to get mortgages. Now the catch is that these mortgages had higher interest rates
than normal interest rates. This meant that the mortgages would generate more money.

So you see, since the sub-prime mortgages were generating more money, they were abused. These mortgages would be given out to just about anyone. Some
mortgage firms required no income verification in their mortgage approval requirements. And the big lending corporations would buy the mortgages and put
them into bonds for investors to buy.

This process spread across Europe and the US.

Now you may be asking yourself, how are people suppose to pay their mortgage if they don't have any income? And well, they don't. People unable to pay would
default on their mortgages and their home's would be seized by the lender. This also meant that mortgages in the bonds would fail, leading to less money being
generated by the bonds. If enough of the mortgages fail, the bond becomes worthless and investor lose their money. 

Well that's okay, cause the insurance company will pay for the failed mortgage right? Well if the amount of money lost from the failed mortgages exceeds 
the amount of money the insurance company has on them, then the insurance company can't cover all those failed mortgages. Meaning, the would be forced into
bankruptcy.

Okay, well, did a bunch of people eventually default on their mortgages? Absolutely! Some people had multiple mortgages with no money to cover it. 

This managed to go on so long because lenders would offer teaser rates. These teaser rates were lower rates at the start of the mortgage term, that would 
eventually jump up to the agreed rate after a certain period of time. 

Once people realized they couldn't refinance (get a new interest rate) their mortgages after their teaser rate term was up, or couldn't afford the agreed
rate payments anymre, they had to default on their mortgages. This happened to A LOT of people. And since the housing industry is so big, it would bleed
into other industries too. Soon a continous loop of lost jobs and defaults on loans would occur, leading to a nation wide housing crisis.

But wait, what about investors and the lenders? Oh boy, they lost billions of dollars. Well not indivual investors, but banks, funds, and asset management
companies lost billions of dollars. 

So, the middle the class was not only being beaten on the housing side, but their investments (e.g. pensions and savings) were also being crushed.

This gigantic ball of fire would cause the Great Recession and it's affects are still felt to this day.

### Frontend
- I wrote the components in Typescript using the React framework. The routing was also done with React.
- Nearly all of the websites design was stolen from [Flowbite](https://flowbite.com/). I used Flowbite for their premade 
Tailwind CSS components, and used Tailwind CSS for the other modifications needed. Though, I am new to CSS (web dev in general),
so I might be using the components incorrectly.
- Some work still needs to be made implementing the mortgage calculator, additional information needs to be added to the learn
section, and graph page needs to be redone/designed properly.
- Account setup also needs to be implemented. 

### Backend
- Flask is the backbone of the web API. It's light, easy to use, works well with MongoDB, and is great for machine learning 
tasks. But, it's very barebones as I mainly focused on the frontend for the prototype, so the backend was neglected quite a bit. 
- For getting property taxes, I made a web scrapper module to scrap the property tax rates from the Toronto municipal website.
This needs to also scrap data from other cities in the GTA. 
- A quick module was created for the mortgage calculator, but it needs to be changed up to accept inputs for the different 
variable fields.
- MongoDB still needs to be configured. But it may be swapped out for a relational database, like Postgres, in the future. Or,
Postgres could be used for storing machine learning related data, while MongoDB could be used for storing user related data.

### Machine Learning
- I made a random forest regression model using scikit-learn and pandas for forecasting the average income of Ontarians. This
needs to be modified for predicting the other datasets gathered.
- Even though I made a random forest regression model for predictions, I still created a basic neural network. Why? Cause overkill
never hurt anyone. 
  - The network is comprised of 3 inputs, 2 hidden layers with 4 neurons each, and 1 output neuron.
  - For training, I used the residual sum of squares as my loss function (backpropagation), the sigmoid 
  function as my activation function (feed forward), and used a percent difference formula for calculating accuracy.
  - C++ was used to make the neural network, but I need to create a wrapper for it so that I can use it with Python. Currently
  I have been looking at Pybind11 for doing this, but I may just switch to using Python's standard library for it. 
- Ideally no user data would be needed for maintaining this system. But a feedback loop could be setup for fine tuning purposes if needed.

### Server Side
- Docker containers are used for packaging up the backend, frontend, web server (NGINX), and database. Since the web application aims for a more microservice
based approach, docker naturally comes to mind. A docker compose file is used to intertwine all of these services together and allow them to communicate
with eacher other, but it still needs some adjusting to get it working. Kubernetes could possibly be used, but for now the main goal is to get the containers
working properly.
- A CI/CD pipeline needs to be created using Github Actions, but since the application isn't finished yet (let alone the tests), this task has to be put
on hold for a bit.
- Azure App Services is being used for deployment purposes, but since the docker compose file isn't setup properly, only the frontend has been deployed
for protyping purposes. This needs to be properly configured once the docker compose file is fixed.
