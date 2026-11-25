# Sender.net MCP by usefulapi

Use your [Sender.net](https://www.sender.net) account from Claude, Cursor, or any MCP client. Read subscribers, groups, segments and campaign statistics, change subscribers and groups, and create draft campaigns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sender-net.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sender-net.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sender-net https://sender-net.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sender-net&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsender-net.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sender-net": {
      "url": "https://sender-net.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sender.net credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sender-net/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Sender API token** (Account settings → auth tokens in Sender). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendernet_list_subscribers` | read | List subscribers |
| `sendernet_get_subscriber` | read | Get a subscriber |
| `sendernet_list_groups` | read | List groups |
| `sendernet_get_group` | read | Get a group |
| `sendernet_list_group_subscribers` | read | List subscribers in a group |
| `sendernet_list_segments` | read | List segments |
| `sendernet_get_segment` | read | Get a segment |
| `sendernet_list_segment_subscribers` | read | List subscribers in a segment |
| `sendernet_list_campaigns` | read | List campaigns |
| `sendernet_get_campaign` | read | Get a campaign |
| `sendernet_get_campaign_stats` | read | Get campaign statistics |
| `sendernet_list_fields` | read | List custom fields |
| `sendernet_add_subscriber` | **write** | Add a subscriber |
| `sendernet_update_subscriber` | **write** | Update a subscriber |
| `sendernet_add_subscribers_to_group` | **write** | Add subscribers to a group |
| `sendernet_remove_subscribers_from_group` | **write** | Remove subscribers from a group |
| `sendernet_create_group` | **write** | Create a group |
| `sendernet_rename_group` | **write** | Rename a group |
| `sendernet_create_campaign` | **write** | Create a draft campaign |
| `sendernet_usage_status` | meta | Usage status (free-tier meter) |
| `sendernet_request_feature` | meta | Request a missing feature |
| `sendernet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sendernet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sendernet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sendernet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sendernet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
