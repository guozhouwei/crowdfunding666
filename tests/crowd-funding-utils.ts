import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CampaignBidLog,
  CampaignLog
} from "../generated/CrowdFunding/CrowdFunding"

export function createCampaignBidLogEvent(
  campaignID: BigInt,
  addr: Address,
  amount: BigInt
): CampaignBidLog {
  let campaignBidLogEvent = changetype<CampaignBidLog>(newMockEvent())

  campaignBidLogEvent.parameters = new Array()

  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignID",
      ethereum.Value.fromUnsignedBigInt(campaignID)
    )
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return campaignBidLogEvent
}

export function createCampaignLogEvent(
  campaignID: BigInt,
  receiver: Address,
  goal: BigInt
): CampaignLog {
  let campaignLogEvent = changetype<CampaignLog>(newMockEvent())

  campaignLogEvent.parameters = new Array()

  campaignLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignID",
      ethereum.Value.fromUnsignedBigInt(campaignID)
    )
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )

  return campaignLogEvent
}
