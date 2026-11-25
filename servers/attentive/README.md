# Attentive MCP by usefulapi

Use your [Attentive](https://www.attentive.com) account from Claude, Cursor, or any MCP client. Check subscriber opt-ins and custom attributes, read and change segments, and unsubscribe a subscriber. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://attentive.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://attentive.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http attentive https://attentive.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=attentive&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fattentive.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "attentive": {
      "url": "https://attentive.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Attentive credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/attentive/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Attentive custom app API key** (Integrations → custom apps in Attentive). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `attentive_me` | read | Check API key |
| `attentive_get_subscriptions` | read | Get subscription eligibility |
| `attentive_get_custom_attributes` | read | Get custom attributes |
| `attentive_list_segments` | read | List segments |
| `attentive_get_segment` | read | Get a segment |
| `attentive_get_clear_segment_status` | read | Get clear-segment status |
| `attentive_get_bulk_job_status` | read | Get bulk job status |
| `attentive_list_webhooks` | read | List webhooks |
| `attentive_unsubscribe` | **write** | Unsubscribe a subscriber |
| `attentive_create_segment` | **write** | Create a segment |
| `attentive_update_segment` | **write** | Update a segment |
| `attentive_archive_segment` | **write** | Archive a segment |
| `attentive_usage_status` | meta | Usage status (free-tier meter) |
| `attentive_request_feature` | meta | Request a missing feature |
| `attentive_upgrade` | meta | Upgrade to Pro or Pro+ |
| `attentive_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `attentive_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `attentive_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `attentive_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
