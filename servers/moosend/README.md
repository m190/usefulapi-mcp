# Moosend MCP by usefulapi

Use [Moosend](https://moosend.com) from Claude, Cursor, or any MCP client — inspect mailing lists, subscribers, segments and campaign analytics, and add subscribers or draft campaigns.
Hosted, no local install: connect with your own Moosend credentials.

**Live endpoint:** `https://moosend.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/moosend

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://moosend.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http moosend https://moosend.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=moosend&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmoosend.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "moosend": {
      "url": "https://moosend.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Moosend credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/moosend/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Moosend API key** (More > Settings > API key).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `moosend_list_mailing_lists` | read | List mailing lists |
| `moosend_get_mailing_list` | read | Get mailing list details |
| `moosend_list_subscribers` | read | List subscribers in a list |
| `moosend_get_subscriber_by_email` | read | Find subscriber by email |
| `moosend_get_subscriber` | read | Get subscriber by ID |
| `moosend_list_segments` | read | List segments of a list |
| `moosend_get_segment` | read | Get segment details |
| `moosend_list_segment_subscribers` | read | List segment subscribers |
| `moosend_list_campaigns` | read | List campaigns |
| `moosend_get_campaign` | read | Get campaign details |
| `moosend_get_campaign_summary` | read | Get campaign summary |
| `moosend_get_campaign_activity` | read | Get campaign recipient activity |
| `moosend_get_campaign_link_activity` | read | Get campaign link clicks |
| `moosend_get_campaign_activity_by_location` | read | Get campaign opens by country |
| `moosend_list_senders` | read | List campaign senders |
| `moosend_create_mailing_list` | **write** | Create a mailing list |
| `moosend_add_subscriber` | **write** | Add or update a subscriber |
| `moosend_update_subscriber` | **write** | Update a subscriber |
| `moosend_unsubscribe_subscriber` | **write** | Unsubscribe from a list |
| `moosend_create_draft_campaign` | **write** | Create a draft campaign |
| `moosend_usage_status` | meta | Usage status (free-tier meter) |
| `moosend_request_feature` | meta | Request a missing feature |
| `moosend_upgrade` | meta | Upgrade to Pro or Pro+ |
| `moosend_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `moosend_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `moosend_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `moosend_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Moosend.
