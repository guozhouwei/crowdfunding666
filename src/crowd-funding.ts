// import { CampaignBidLog } from '../generated/CrowdFunding/CrowdFunding'
import { BidLog } from '../generated/CrowdFunding/CrowdFunding'
import { Funder } from '../generated/schema'
import {Address, BigInt} from "@graphprotocol/graph-ts";

export function handleCampaignBidLog(event: BidLog): void {
  let funder = Funder.load(event.params.campaignID.toString());

  if (funder == null) {
    funder = new Funder(event.params.campaignID.toString());
    funder.bidder = event.params.bidder as Address;
    funder.bidAmount = event.params.bidAmount as BigInt;
    funder.save();
  }
}

// import {
//   CampaignBidLog as CampaignBidLogEvent,
//   CampaignLog as CampaignLogEvent
// } from "../generated/CrowdFunding/CrowdFunding"
// import { CampaignBidLog, CampaignLog } from "../generated/schema"
//
// export function handleCampaignBidLog(event: CampaignBidLogEvent): void {
//   let entity = new CampaignBidLog(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.campaignID = event.params.campaignID
//   entity.addr = event.params.addr
//   entity.amount = event.params.amount
//
//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash
//
//   entity.save()
// }
//
// export function handleCampaignLog(event: CampaignLogEvent): void {
//   let entity = new CampaignLog(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.campaignID = event.params.campaignID
//   entity.receiver = event.params.receiver
//   entity.goal = event.params.goal
//
//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash
//
//   entity.save()
// }
