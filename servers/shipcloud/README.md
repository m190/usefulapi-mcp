# Shipcloud MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shipcloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shipcloud https://shipcloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shipcloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshipcloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shipcloud": {
      "url": "https://shipcloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shipcloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shipcloud/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shipcloud_get_account` | read | Get account |
| `shipcloud_list_carriers` | read | List carriers |
| `shipcloud_get_default_address` | read | Get a default address |
| `shipcloud_list_shipments` | read | List shipments |
| `shipcloud_get_shipment` | read | Get shipment |
| `shipcloud_get_shipment_quote` | read | Quote a shipment price |
| `shipcloud_create_prepared_shipment` | **write** | Create a prepared shipment (no label) |
| `shipcloud_create_shipment_with_label` | **write** | Buy a shipping label (costs money) |
| `shipcloud_delete_shipment` | **write** | Delete a shipment / cancel its label |
| `shipcloud_list_trackers` | read | List trackers |
| `shipcloud_get_tracker` | read | Get tracker |
| `shipcloud_create_tracker` | **write** | Track a shipment by its tracking number |
| `shipcloud_list_pickup_requests` | read | List pickup requests |
| `shipcloud_get_pickup_request` | read | Get pickup request |
| `shipcloud_create_pickup_request` | **write** | Request a carrier pickup |
| `shipcloud_find_dropoff_locations` | read | Find pickup and drop-off points |
| `shipcloud_list_addresses` | read | List saved addresses |
| `shipcloud_get_address` | read | Get saved address |
| `shipcloud_create_address` | **write** | Save an address |
| `shipcloud_list_orders` | read | List orders |
| `shipcloud_get_order` | read | Get order |
| `shipcloud_list_webhooks` | read | List webhooks |
| `shipcloud_usage_status` | meta | Usage status (free-tier meter) |
| `shipcloud_request_feature` | meta | Request a missing feature |
| `shipcloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shipcloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per Shipcloud customer) | $0 | 50 tool calls / month |
| **Pro** (per Shipcloud customer) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Shipcloud customer) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shipcloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shipcloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shipcloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Account access and data

Connect only your own customer-controlled key under your authorization and processing instructions. Find the key under your account email → API Key. Sandbox keys produce test labels; live keys can incur real carrier charges. Vendor plans, carrier eligibility and charges are separate. This is an independent customer-authorized connection, with no partner approval claimed.

The key is encrypted. Requested sender/recipient addresses, orders and tracking information reach your connected AI client and LLM provider. Connect only data you are authorized to process there. Revoke the key in Shipcloud to stop access; disconnect UsefulAPI to stop this connection. Billing follows customer number, normally across sandbox/live keys and key rotation.

Buying a label, deleting a shipment/cancelling a label and requesting a carrier pickup require explicit confirmation. Pickups may be charged and cannot be cancelled through these tools. Prepared shipments have no label or label charge. An optional notification email causes Shipcloud tracking emails to that address. Notes and results explain uncertain outcomes; no operation is automatically replayed.

Reference lookups and same-instance guards reduce duplicate label purchases but are not atomic across Worker instances. Serialize purchases for each reference. A timeout can occur before a slow carrier completes; check Shipcloud before repeating a purchase. A valid create id and HTTPS label URL are required before reporting a label purchase; deletion requires the documented204 acknowledgement.

All22tools were checked against current vendor documentation and local mocks. No real customer shipping data, labels, pickups or charges were tested.
