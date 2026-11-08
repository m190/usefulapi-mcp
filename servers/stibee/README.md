# Stibee MCP by usefulapi

Use your [Stibee](https://stibee.com) account from Claude, Cursor, or any MCP client. Read subscribers, emails and email stats, and add subscribers and group members. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://stibee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stibee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stibee https://stibee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stibee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstibee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stibee": {
      "url": "https://stibee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stibee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stibee/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Stibee workspace API key** (Workspace settings → API keys in Stibee; keys created before 2025-01-21 do not work). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stibee_list_address_books` | read | List address books |
| `stibee_get_address_book` | read | Get an address book |
| `stibee_list_subscribers` | read | List subscribers |
| `stibee_count_subscribers` | read | Count subscribers |
| `stibee_get_subscriber_stats` | read | Get subscriber email stats |
| `stibee_add_subscriber` | **write** | Add a subscriber |
| `stibee_add_subscribers_batch` | **write** | Add subscribers in bulk |
| `stibee_update_subscriber_fields` | **write** | Update subscriber fields |
| `stibee_list_groups` | read | List groups |
| `stibee_assign_subscriber_to_group` | **write** | Add a subscriber to a group |
| `stibee_release_subscriber_from_group` | **write** | Remove a subscriber from a group |
| `stibee_list_emails` | read | List emails |
| `stibee_get_email` | read | Get an email |
| `stibee_get_email_stats` | read | Get email open and click rates |
| `stibee_get_email_logs` | read | Get email activity log |
| `stibee_usage_status` | meta | Usage status (free-tier meter) |
| `stibee_request_feature` | meta | Request a missing feature |
| `stibee_upgrade` | meta | Upgrade to Pro or Pro+ |
| `stibee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `stibee_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `stibee_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `stibee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
