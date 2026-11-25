# Drip MCP by usefulapi

Use your [Drip](https://www.drip.com) account from Claude, Cursor, or any MCP client. Read subscribers, tags, forms, segments, campaigns, broadcasts, workflows and email metrics, and write subscribers, tags and events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://drip.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://drip.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http drip https://drip.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=drip&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdrip.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "drip": {
      "url": "https://drip.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Drip credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/drip/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Drip personal API token**, found in Drip under **User settings**. If the token sees several accounts, also enter the **Drip account ID**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `drip_list_accounts` | read | List accounts |
| `drip_list_subscribers` | read | List subscribers |
| `drip_get_subscriber` | read | Get a subscriber |
| `drip_list_tags` | read | List tags |
| `drip_list_custom_fields` | read | List custom field identifiers |
| `drip_list_campaigns` | read | List email series campaigns |
| `drip_get_campaign` | read | Get an email series campaign |
| `drip_list_broadcasts` | read | List broadcasts |
| `drip_get_broadcast` | read | Get a broadcast |
| `drip_list_workflows` | read | List workflows |
| `drip_get_workflow` | read | Get a workflow |
| `drip_list_forms` | read | List forms |
| `drip_list_segments` | read | List segments |
| `drip_get_email_metrics` | read | Get email metrics |
| `drip_upsert_subscriber` | **write** | Create or update a subscriber |
| `drip_apply_tag` | **write** | Apply a tag to a subscriber |
| `drip_remove_tag` | **write** | Remove a tag from a subscriber |
| `drip_record_event` | **write** | Record a subscriber event |
| `drip_usage_status` | meta | Usage status (free-tier meter) |
| `drip_request_feature` | meta | Request a missing feature |
| `drip_upgrade` | meta | Upgrade to Pro or Pro+ |
| `drip_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `drip_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `drip_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `drip_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
