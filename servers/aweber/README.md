# AWeber MCP by usefulapi

Use your [AWeber](https://www.aweber.com) account from Claude, Cursor, or any MCP client. Read lists, subscribers, tags and broadcasts, and add or update one subscriber at a time. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://aweber.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://aweber.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http aweber https://aweber.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=aweber&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faweber.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "aweber": {
      "url": "https://aweber.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your AWeber account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/aweber/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to AWeber and approve access. The server stores the tokens per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `aweber_list_accounts` | read | List accounts |
| `aweber_get_account` | read | Get an account |
| `aweber_list_lists` | read | List lists |
| `aweber_get_list` | read | Get a list |
| `aweber_list_custom_fields` | read | List custom fields |
| `aweber_list_tags` | read | List tags |
| `aweber_find_subscribers` | read | Find subscribers |
| `aweber_get_subscriber` | read | Get a subscriber |
| `aweber_list_broadcasts` | read | List broadcasts |
| `aweber_list_campaigns` | read | List campaigns |
| `aweber_add_subscriber` | **write** | Add a subscriber |
| `aweber_update_subscriber` | **write** | Update a subscriber |
| `aweber_usage_status` | meta | Usage status (free-tier meter) |
| `aweber_request_feature` | meta | Request a missing feature |
| `aweber_upgrade` | meta | Upgrade to Pro or Pro+ |
| `aweber_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `aweber_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `aweber_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `aweber_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
