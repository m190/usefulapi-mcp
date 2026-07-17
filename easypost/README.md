# EasyPost MCP by usefulapi

Rate shipments, buy labels, track packages and verify addresses via EasyPost, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your EasyPost API key.

**Live endpoint:** `https://easypost.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/easypost

## Add to Claude

```json
{
  "mcpServers": {
    "easypost": {
      "url": "https://easypost.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your EasyPost API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `easypost_list_shipments` | read | List shipments |
| `easypost_get_shipment` | read | Get shipment |
| `easypost_list_trackers` | read | List trackers |
| `easypost_get_tracker` | read | Get tracker |
| `easypost_list_addresses` | read | List addresses |
| `easypost_get_address` | read | Get address |
| `easypost_verify_address` | **write** | Verify address |
| `easypost_create_shipment` | **write** | Create shipment |
| `easypost_create_tracker` | **write** | Create tracker |
| `easypost_buy_shipment` | **write** | Buy shipment |
| `easypost_refund_shipment` | **write** | Refund shipment |
| `easypost_usage_status` | meta | Usage status (free-tier meter) |
| `easypost_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
