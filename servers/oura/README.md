# Oura MCP by usefulapi

Read sleep, readiness, activity, stress, heart rate and workouts from the Oura Ring. Hosted, no local install.

**Live endpoint:** `https://oura.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "oura": {
      "url": "https://oura.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Oura credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oura_get_personal_info` | read | Get personal info |
| `oura_list_documents` | read | List documents from a collection |
| `oura_get_document` | read | Get one document |
| `oura_get_heartrate` | read | Get heart-rate samples |
| `oura_get_ring_battery_level` | read | Get ring battery level |
| `oura_list_webhook_subscriptions` | read | List webhook subscriptions |
| `oura_get_webhook_subscription` | read | Get one webhook subscription |
| `oura_create_webhook_subscription` | **write** | Create a webhook subscription |
| `oura_renew_webhook_subscription` | **write** | Renew a webhook subscription |
| `oura_delete_webhook_subscription` | **write** | Delete a webhook subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
