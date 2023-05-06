import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CampaignBidLog } from "../generated/schema"
import { CampaignBidLog as CampaignBidLogEvent } from "../generated/CrowdFunding/CrowdFunding"
import { handleCampaignBidLog } from "../src/crowd-funding"
import { createCampaignBidLogEvent } from "./crowd-funding-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let campaignID = BigInt.fromI32(234)
    let addr = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let newCampaignBidLogEvent = createCampaignBidLogEvent(
      campaignID,
      addr,
      amount
    )
    handleCampaignBidLog(newCampaignBidLogEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CampaignBidLog created and stored", () => {
    assert.entityCount("CampaignBidLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CampaignBidLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "campaignID",
      "234"
    )
    assert.fieldEquals(
      "CampaignBidLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "addr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CampaignBidLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
