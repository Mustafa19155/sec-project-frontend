import { addCampaigns } from "../actionTypes";

const initialState = [];

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case addCampaigns:
      return action.payload.campaigns;
    default:
      return state;
  }
};

export default campaignReducer;
