import { addCampaigns, addNewCampaign, deleteCampaign } from "../actionTypes";

const initialState = [];

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case addCampaigns:
      return action.payload.campaigns;
    case addNewCampaign:
      return [...state, action.payload.campaign];
    case deleteCampaign:
      console.log(action.payload);
      return state.filter((e) => e.name != action.payload.campaignName);
    default:
      return state;
  }
};

export default campaignReducer;
