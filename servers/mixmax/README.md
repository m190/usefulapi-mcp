# Mixmax MCP by usefulapi

Use your [Mixmax](https://www.mixmax.com) account from Claude, Cursor, or any MCP client. Read messages, sequences and templates, and create drafts or add unsubscribes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mixmax.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mixmax.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mixmax https://mixmax.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mixmax&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmixmax.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mixmax": {
      "url": "https://mixmax.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mixmax credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mixmax/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Mixmax personal API token** (Settings → Integrations, API section; Mixmax shows it only once). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mixmax_get_me` | read | Get the token's user id |
| `mixmax_list_messages` | read | List messages |
| `mixmax_get_message` | read | Get a message |
| `mixmax_create_draft` | **write** | Create a draft email |
| `mixmax_list_sequences` | read | List sequences |
| `mixmax_list_sequence_recipients` | read | List sequence recipients |
| `mixmax_list_sequence_folders` | read | List sequence folders |
| `mixmax_get_sequence_folder` | read | Get a sequence folder |
| `mixmax_list_templates` | read | List templates |
| `mixmax_get_template` | read | Get a template |
| `mixmax_list_template_folders` | read | List template folders |
| `mixmax_list_unsubscribes` | read | List unsubscribed addresses |
| `mixmax_add_unsubscribes` | **write** | Add unsubscribed addresses |
| `mixmax_list_meeting_invites` | read | List meeting invites |
| `mixmax_list_teams` | read | List teams |
| `mixmax_usage_status` | meta | Usage status (free-tier meter) |
| `mixmax_request_feature` | meta | Request a missing feature |
| `mixmax_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mixmax_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mixmax_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mixmax_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mixmax_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
