module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
      id: "c375c640-81ff-405a-89a8-460ea2f71755",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      name: "Gucci Bag",
      description: "Black leather gucci bag for special occasions",
      date_uploaded: new Date(),
      date_edited: new Date(),
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85a",
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      name: "Laptop",
      description: "HP core i5 Touch screen ",
      date_uploaded: new Date(),
      date_edited: new Date(),
    },{
      id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97a",
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25",
      name: "Tv",
      description: "52 inches LCD television",
      date_uploaded: new Date(),
      date_edited: new Date(),
    },{
      id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9f",
      userId: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      name: "phones",
      description: "Apple iphones",
      date_uploaded: new Date(),
      date_edited: new Date(),
    }
    ,], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
