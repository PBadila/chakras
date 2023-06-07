Dua and welcome to the chakras API!

Chakras:
Root      --> chakraID = 1
Sacral    --> chakraID = 2
Solar     --> chakraID = 3
Heart     --> chakraID = 4
Throat    --> chakraID = 5
Third Eye --> chakraID = 6
Crown     --> chakraID = 7


These are the routes cuurently avilable:

GET all chakras:
/chakras

GET a chakra by id
/chakras/:id  e.g. /chakras/2

GET all healing activities:
/heals

GET all healing activities for a certain chakra by chakraID
/heals/chakra/:id  e.g. /heals/chakra/2

GET a random healing activity for a certain chakra by chakraID
/heals/random/chakra/:id  e.g. /heals/random/chakra/2

GET all herbs:
/herbs

GET all herbs for a certain chakra by chakraID
/herbs/chakra/:id  e.g. /herbs/chakra/2

GET all jounral prompts:
/journals

GET all journal prompts for a certain chakra by chakraID
/journals/chakra/:id  e.g. /journals/chakra/2

GET a random journal prompt for a certain chakra by chakraID
/journals/random/chakra/:id  e.g. /journals/random/chakra/2


NAMASTE

