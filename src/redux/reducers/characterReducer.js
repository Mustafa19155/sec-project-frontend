const initialState = [
  {
    _id: "1",
    name: "character 1",
    createdBy: "Mustafa Hassan",
    image:
      "https://api.time.com/wp-content/uploads/2017/06/sonic-most-influential-game-characters.jpg?quality=85",
  },
  {
    _id: "2",
    name: "character 2",
    createdBy: "Mustafa Hassan",
    image:
      "https://api.time.com/wp-content/uploads/2017/06/sonic-most-influential-game-characters.jpg?quality=85",
  },
];

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default characterReducer;
