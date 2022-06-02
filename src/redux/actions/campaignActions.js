import { addCampaigns } from "../actionTypes";
export const addCampaign = (campaigns) => {
  return {
    type: addCampaigns,
    payload: {
      campaigns: campaigns,
    },
  };
};
