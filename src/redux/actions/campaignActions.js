import { addCampaigns, addNewCampaign, deleteCampaign } from "../actionTypes";
export const addCampaign = (campaigns) => {
  return {
    type: addCampaigns,
    payload: {
      campaigns: campaigns,
    },
  };
};

export const addSingleCampaign = (campaign) => {
  return {
    type: addNewCampaign,
    payload: {
      campaign: campaign,
    },
  };
};

export const deleteSingleCampaign = (campaignName) => {
  return {
    type: deleteCampaign,
    payload: {
      campaignName: campaignName,
    },
  };
};
