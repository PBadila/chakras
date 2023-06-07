'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Herbs', [
      {
        name: 'Ashwagandha',
        chakraID: 1,
        properties: 'Grounding and balancing',
        actions: 'Adaptogenic, calming, rejuvenating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dandelion Root',
        chakraID: 1,
        properties: 'Strengthening and promoting stability',
        actions: 'Detoxifying, cleansing, liver support',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Red Ginseng',
        chakraID: 1,
        properties: 'Energizing and supporting vitality',
        actions: 'Stimulant, adaptogenic, immune booster',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hawthorn Berry',
        chakraID: 1,
        properties: 'Nurturing and promoting a sense of security',
        actions: 'Cardiovascular tonic, emotional support, antioxidant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Burdock Root',
        chakraID: 1,
        properties: 'Purifying and supporting physical well-being',
        actions: 'Detoxifying, blood cleanser, skin health',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //sacral
      {
        name: 'Damiana',
        properties: 'Stimulating and enhancing creativity',
        actions: 'Aphrodisiac, mood enhancer, energy booster',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Orange Peel',
        properties: 'Uplifting and promoting joy and pleasure',
        actions: 'Antidepressant, digestive aid, mood enhancer',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shatavari',
        properties: 'Nourishing and supporting reproductive health',
        actions: 'Hormone balancer, fertility enhancer, immune booster',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maca Root',
        properties: 'Energizing and promoting passion and sensuality',
        actions: 'Adaptogenic, libido booster, stamina enhancer',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Calendula',
        properties: 'Soothing and supporting emotional balance',
        actions: 'Anti-inflammatory, calming, skin healer',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

     {
        name: 'Chamomile',
        properties: 'Calming and soothing the digestive system',
        actions: 'Digestive aid, stress reducer, sleep enhancer',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Turmeric',
        properties: 'Energizing and supporting metabolism and digestion',
        actions: 'Anti-inflammatory, liver support, immune booster',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fennel',
        properties: 'Balancing and promoting a healthy appetite and digestion',
        actions: 'Digestive aid, hormone balancer, breath freshener',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ginger',
        properties: 'Warming and invigorating the digestive system',
        actions: 'Digestive aid, circulation booster, immune enhancer',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cinnamon',
        properties: 'Strengthening and promoting digestion and vitality',
        actions: 'Antioxidant, metabolism booster, blood sugar regulator',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rose',
        properties: 'Heart-opening and promoting love and compassion',
        actions: 'Emotional balance, heart health, relaxation',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hawthorn',
        properties: 'Nurturing and supporting heart health',
        actions: 'Cardiovascular support, emotional well-being, circulation',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jasmine',
        properties: 'Uplifting and enhancing feelings of love and connection',
        actions: 'Mood enhancer, relaxation, aphrodisiac',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lavender',
        properties: 'Calming and promoting relaxation and emotional well-being',
        actions: 'Stress relief, sleep aid, anxiety reducer',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Green Tea',
        properties: 'Purifying and supporting overall heart health',
        actions: 'Antioxidant, cardiovascular support, detoxification',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Peppermint',
        properties: 'Refreshing and supporting clear communication',
        actions: 'Mental clarity, respiratory health, digestion',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sage',
        properties: 'Purifying and promoting throat health',
        actions: 'Throat health, cleansing, purifying',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Licorice Root',
        properties: 'Soothing and supporting vocal health',
        actions: 'Vocal health, digestive support, adrenal support',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eucalyptus',
        properties: 'Clearing and promoting respiratory health',
        actions: 'Respiratory health, congestion relief, immune support',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Slippery Elm Bark',
        properties: 'Soothing and supporting throat comfort',
        actions: 'Throat comfort, digestive health, wound healing',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mugwort',
        properties: 'Enhancing intuition and dream work',
        actions: 'Dream work, psychic abilities, relaxation',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gotu Kola',
        properties: 'Supporting mental clarity and focus',
        actions: 'Mental clarity, memory enhancement, stress relief',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blue Lotus',
        properties: 'Opening and expanding consciousness',
        actions: 'Spiritual awakening, relaxation, meditation',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eyebright',
        properties: 'Clarifying and supporting eye health',
        actions: 'Eye health, vision improvement, eye strain relief',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Passionflower',
        properties: 'Calming and promoting relaxation for mental clarity',
        actions: 'Relaxation, anxiety relief, sleep aid',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      name: 'White Sage',
        properties: 'Purifying and promoting spiritual connection',
        actions: 'Cleansing, spiritual rituals, meditation',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lotus',
        properties: 'Enhancing spiritual growth and enlightenment',
        actions: 'Spiritual awakening, meditation, purity',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Frankincense',
        properties: 'Elevating and promoting spiritual awareness',
        actions: 'Meditation, relaxation, spiritual rituals',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lavender',
        properties: 'Calming and supporting meditation and inner peace',
        actions: 'Relaxation, meditation, stress relief',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sandalwood',
        properties: 'Grounding and promoting a sense of spiritual connection',
        actions: 'Meditation, spiritual rituals, relaxation',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Herbs', null, {});
  },

}








