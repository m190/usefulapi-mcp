# AskNicely MCP by usefulapi

Use your [AskNicely](https://asknicely.com) account from Claude, Cursor, or any MCP client. Read NPS scores, survey responses and contacts, and add contacts or send surveys. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://asknicely.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://asknicely.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http asknicely https://asknicely.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=asknicely&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fasknicely.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "asknicely": {
      "url": "https://asknicely.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AskNicely credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/asknicely/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AskNicely account subdomain** (the part before .asknice.ly) and your **AskNicely API key** (issued to your own user). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `asknicely_get_nps` | read | Get NPS score |
| `asknicely_get_historical_stats` | read | Get email statistics |
| `asknicely_get_contact` | read | Get a contact |
| `asknicely_list_responses` | read | List survey responses |
| `asknicely_list_unsubscribed` | read | List unsubscribed contacts |
| `asknicely_add_contacts` | **write** | Add or update contacts |
| `asknicely_send_survey` | **write** | Send a survey |
| `asknicely_remove_contact` | **write** | Deactivate a contact |
| `asknicely_usage_status` | meta | Usage status (free-tier meter) |
| `asknicely_request_feature` | meta | Request a missing feature |
| `asknicely_upgrade` | meta | Upgrade to Pro or Pro+ |
| `asknicely_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `asknicely_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `asknicely_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `asknicely_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
