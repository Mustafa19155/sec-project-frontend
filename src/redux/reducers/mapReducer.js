const initialState = [
  {
    _id: "1",
    name: "map 1",
    createdBy: "Mustafa Hassan",
    difficulty: "medium",
    type: "desert",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYCAg9oxJbsKm7g-caJ5bae1sj8tw4L-OMg&usqp=CAU",
    dimensions: "1366x768",
  },
  {
    _id: "2",
    name: "map 2",
    createdBy: "Mustafa Hassan",
    difficulty: "hard",
    type: "hill",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYCAg9oxJbsKm7g-caJ5bae1sj8tw4L-OMg&usqp=CAU",
    dimensions: "1366x768",
  },
];

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mapReducer;
