readMe.md

## Casa

#### Requirements

Casa is an online portal that connects home buyers with homes.

1. Responsive design
1. Validation of Inputs
1. Brand elements
1. Help/Support information 
1. Architected to adapt to information model changes
1. Testability
1. Page load and display information
1. Api design to submit information
1. Analytics
1. Split Testing (A/B) testing

#### Product/UX Consideration & Discussion

* Possible User persona's:
  1. First time home buyer (P1)
  1. Real estate investors (P2)
  
The persona's have a similar intent (i.e, to purchase a home) but the motivation could be entirely different. 

A first time home buyer is perhaps looking to live in the property they've purchased. 

While an investor may look at maximizing the return from their investment, either as rental yield or speculating at a higher sale price in the future.

Example: School districts may be important for P1, while not so much for P2.

##### UI/UX: 

##### Property Discovery features:

1. **Search bar**:
a multi-purpose (intent) search box is the easiest way to understand the user's intent. 

The search bar should serve and handle queries about
* Location
* House attributes (bedrooms, bathrooms, type etc..)
* Search by listing ID
* Misc support requests

2. **Tile view**: User prefers the property itself. Requires high quality pictures that look appealing to be successful

3. **Map view**: User prefers location based search, is already aware of the location has an idea on where they're looking for. Requires listings laid down on the map, to be successful, also need to set initial location to current location or assume the current location to be relevant

4. **Filter panel**: Contains dropdowns, sliders to aid filtering. This is useful for users who aren't aware of all the filtering options

##### Layout features:
1.  **Navbar**: with logo and highlevel navigation options
1. **Footer Panel**: Links, resources, branding, legal.
1. **Cookie disclaimer**: Required by law in someplaces


##### Validation of inputs:
 As a large portion of the webapp is used for discovery, hard validation on any of these fields is very restrictive for a user

The validation staretgy should be to wildcard or assume most default parameters for discovery

Field level validation can be performed for fields such as login/sign up and other forms

##### Post Discovery features:
* A page that shows an image carousel for the house
* Price and features of the house
* Detailed list of amenities
* Call to action
* Similar houses, either by location, price or type

##### Responsive UI consideration:
* For smaller screen sizes, embedded map view discovery is not very user friendly, so we hide that option


#### Technical considerations:

##### Base requirements:
1. App must have rich user interaction experience
1. Should be indexable by search engines
1. Modern, clean and accesible UI that looks appealing
1. Ability to A/B test new features
1. Help/Support documentation to create/maintain content


##### Reasoning:
* NextJS: Zero config server-side render framework, that has a very easy deployment process through vercel. 

The framework uses React which is a library that implements a reconcliation algorithm that efficiently renders DOM elements written in JSX

NextJS powerful frontend framework with a growing community and uses React which is a very popular choice,it also enjoys official TypeScript support.

**Why not Gatsby?**
Gatsby shines as a static webpage generator, parts of this webapp require dynamic rendering.

Alternatives: Create-react-app, GatsbyJS, Vue, Ember, Angular...

* TypeScript: imposes type checking on Javascript, adds some features. 

Makes it easier to write cleaner and safe Javascript

* Chakra UI: sleek UI components from a library that has a very open design language.

The component library is also supported by some larger companies like Lattice and Shogun

Alternatives: MaterialUI, react-strap,many more..

> Assuming our backend implements a REST API
* Axios: its a client library that helps with making API requests from a client app, it has better backwards compatibility than fetch, does some JSON transformation of response.

It also provides interceptors for request and response that are handy

Alternatives: fetch, Ajax