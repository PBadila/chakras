'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Chakras', [
      // Root Chakra (Muladhara)
      {
        name: 'Root Chakra',
        color: 'Red',
        location: 'Base of the spine',
        description: 'The Root Chakra represents stability, grounding, and a sense of safety.',
        age: 'Birth to 1 year',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Sacral Chakra (Svadhisthana)
      {
        name: 'Sacral Chakra',
        color: 'Orange',
        location: 'Lower abdomen',
        description: 'The Sacral Chakra represents creativity, sensuality, and emotional well-being.',
        age: '2 to 3 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Solar Plexus Chakra (Manipura)
      {
        name: 'Solar Plexus Chakra',
        color: 'Yellow',
        location: 'Upper abdomen',
        description: 'The Solar Plexus Chakra represents personal power, confidence, and self-esteem.',
        age: '4 to 5 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Heart Chakra (Anahata)
      {
        name: 'Heart Chakra',
        color: 'Green',
        location: 'Center of the chest',
        description: 'The Heart Chakra represents love, compassion, and connection.',
        age: '6 to 7 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Throat Chakra (Vishuddha)
      {
        name: 'Throat Chakra',
        color: 'Blue',
        location: 'Throat',
        description: 'The Throat Chakra represents communication, self-expression, and authenticity.',
        age: '12 to 14 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Third Eye Chakra (Ajna)
      {
        name: 'Third Eye Chakra',
        color: 'Indigo',
        location: 'Forehead, between the eyebrows',
        description: 'The Third Eye Chakra represents intuition, inner wisdom, and spiritual awareness.',
        age: '16 to 17 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Crown Chakra (Sahasrara)
      {
        name: 'Crown Chakra',
        color: 'Violet or White',
        location: 'Top of the head',
        description: 'The Crown Chakra represents connection to higher consciousness and divine energy.',
        age: 'Late teens to adulthood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Chakras', null, {});
  },

}