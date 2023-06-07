'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Journals', [
   
      // Root Chakra (Muladhara)
      {
        entry: "Reflect on your sense of stability and security in your life. Are there any areas where you feel grounded and rooted? Are there any areas where you feel unsettled or anxious? Explore ways to enhance your feelings of stability and security.",
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about your connection to nature and the earth. How do you feel when you spend time outdoors? Do you have any rituals or practices that help you feel grounded?",
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore any fears or concerns you may have about your basic needs (e.g., money, shelter, survival). Write about how you can address these fears and cultivate a sense of safety and abundance.",
        chakraID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Sacral Chakra (Svadhisthana)
      {
        entry: "Reflect on your creativity and passions. What activities or hobbies bring you joy and ignite your creative spark? Write about ways to incorporate more of these activities into your life.",
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore your relationship with sensuality and pleasure. How do you embrace your sensuality? Are there any blocks or limiting beliefs you need to address in this area?",
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about your emotions and any patterns you notice. Are there any emotions you tend to suppress or struggle with? How can you create a healthy emotional balance and express your feelings authentically?",
        chakraID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Solar Plexus Chakra (Manipura)
      {
        entry: "Reflect on your personal power and self-confidence. What are your strengths and talents? Write about times when you have felt empowered and confident. Explore ways to cultivate more self-belief and assertiveness.",
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about any areas of your life where you feel a lack of control or insecurity. How can you reclaim your personal power and overcome these challenges?",
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore your relationship with your identity and self-image. Are there any limiting beliefs or self-doubt that you need to address? Write about ways to cultivate self-acceptance and love.",
        chakraID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Heart Chakra (Anahata)
      {
        entry: "Reflect on your capacity to give and receive love. Write about your relationships with others and explore any blocks or barriers to love and connection. How can you cultivate more love, compassion, and forgiveness in your life?",
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about acts of kindness and love that you have experienced or witnessed. How did these moments impact you? How can you spread more love and kindness in the world?",
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore any past hurts or emotional wounds that may be affecting your ability to open your heart fully. Write about ways to heal and release any emotional baggage.",
        chakraID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        entry: "Reflect on your communication style and habits. Are you expressing yourself authentically? Are there any areas where you tend to hold back or struggle to speak your truth? Write about ways to improve and enhance your communication.",
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about any fears or challenges you have when it comes to expressing yourself. Explore ways to overcome these obstacles and cultivate more confidence in your voice.",
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore the power of words and their impact on yourself and others. Write about times when words have affected you deeply. Reflect on how you can use your voice to uplift, inspire, and create positive change.",
        chakraID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        entry: "Reflect on your intuition and inner wisdom. Write about moments when you have trusted your intuition and the outcomes that followed. Explore ways to enhance your connection with your inner guidance.",
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about your dreams and any recurring symbols or messages you notice. Reflect on the insights they may hold for you.",
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore your imagination and visualization abilities. Write about visualizations or guided imagery exercises that have helped you gain clarity or insight.",
        chakraID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Reflect on your connection to something greater than yourself. How do you experience spirituality or a sense of transcendence? Write about moments when you have felt connected to the divine or experienced a sense of oneness.",
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Write about your spiritual practices or rituals. How do they help you cultivate a sense of higher consciousness and inner peace?",
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entry: "Explore your purpose and the meaning of life. What brings you a sense of fulfillment and alignment with your higher self? Write about ways to align your actions with your spiritual values.",
        chakraID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Journals', null, {});
  },

}