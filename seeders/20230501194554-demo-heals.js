'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Heals', [
      {
        activity: 'Practice grounding meditation daily.',
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Walk barefoot on the earth.',
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in physical exercise regularly.',
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Use affirmations for stability.',
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Connect with nature regularly.',
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more healing activities for the Root Chakra (chakra_id: 1) as needed
      {
        activity: 'Engage in creative activities like painting or dancing.',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice self-care rituals, such as taking relaxing baths.',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Explore your sensuality and express it in a healthy way.',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with the color orange, through clothing or objects.',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice emotional release techniques, such as journaling or therapy.',
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in empowering exercises like yoga or martial arts.',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice deep breathing exercises to activate your personal power.',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Set and achieve personal goals to boost self-confidence.',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with the color yellow to stimulate confidence and motivation.',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice self-reflection and develop a strong sense of self-awareness.',
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Heart Chakra (Anahata)
      {
        activity: 'Practice heart-opening yoga poses like Camel or Bridge pose.',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in acts of kindness and compassion towards others.',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Spend time in nature and connect with its beauty and harmony.',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice forgiveness and let go of past hurts.',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with the color green to promote love and healing.',
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Throat Chakra (Vishuddha)
      {
        activity: 'Practice expressive arts like singing, chanting, or storytelling.',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in honest and authentic communication with others.',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice active listening to truly hear and understand others.',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Express your thoughts and feelings through writing or journaling.',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with the color blue to enhance communication.',
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Third Eye Chakra (Ajna)
      {
        activity: 'Practice meditation to enhance intuition and inner vision.',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in visualization exercises to stimulate the third eye.',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with indigo-colored objects or clothing.',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Practice mindfulness to heighten awareness of the present moment.',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Explore intuitive practices like tarot reading or dream interpretation.',
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Crown Chakra (Sahasrara)
      {
        activity: 'Practice meditation to connect with divine consciousness.',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Engage in spiritual practices aligned with your beliefs.',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        activity: 'Surround yourself with white or violet-colored objects or clothing.',
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  
           {
            activity: 'Spend time in silence and stillness to receive higher guidance.',
            chakraID: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            activity: 'Engage in activities that promote a sense of unity and oneness.',
            chakraID: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ], {});
    
      },
    
      down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Heals', null, {});
      }
    };
    
       




    
  

