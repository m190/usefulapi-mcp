# Mailshake MCP by usefulapi

Use your [Mailshake](https://mailshake.com) account from Claude, Cursor, or any MCP client. Read campaigns, replies, leads and activity, pause or resume campaigns and recipients, and close, ignore or reopen leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mailshake.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailshake.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailshake https://mailshake.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailshake&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailshake.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailshake": {
      "url": "https://mailshake.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mailshake credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailshake/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Mailshake API key**, created in Mailshake under **Extensions → API**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailshake_get_account` | read | Get account |
| `mailshake_list_team_members` | read | List team members |
| `mailshake_list_senders` | read | List senders |
| `mailshake_list_campaigns` | read | List campaigns |
| `mailshake_get_campaign` | read | Get campaign |
| `mailshake_list_recipients` | read | List recipients |
| `mailshake_list_leads` | read | List leads |
| `mailshake_list_sent_messages` | read | List sent messages |
| `mailshake_list_replies` | read | List replies |
| `mailshake_list_opens` | read | List opens |
| `mailshake_list_clicks` | read | List link clicks |
| `mailshake_list_created_leads` | read | List created leads |
| `mailshake_list_lead_status_changes` | read | List lead status changes |
| `mailshake_pause_campaign` | **write** | Pause campaign |
| `mailshake_unpause_campaign` | **write** | Unpause campaign |
| `mailshake_pause_recipient` | **write** | Pause recipient |
| `mailshake_unpause_recipient` | **write** | Unpause recipient |
| `mailshake_close_lead` | **write** | Close lead |
| `mailshake_ignore_lead` | **write** | Ignore lead |
| `mailshake_reopen_lead` | **write** | Reopen lead |
| `mailshake_usage_status` | meta | Usage status (free-tier meter) |
| `mailshake_request_feature` | meta | Request a missing feature |
| `mailshake_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mailshake_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mailshake_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mailshake_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mailshake_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
