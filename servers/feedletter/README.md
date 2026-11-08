# FeedLetter MCP by usefulapi

Use your [FeedLetter](https://feedletter.co) account from Claude, Cursor, or any MCP client. Read your surveys, votes and feedback, load Wall of Love feedback, and create new surveys. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://feedletter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://feedletter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http feedletter https://feedletter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=feedletter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffeedletter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "feedletter": {
      "url": "https://feedletter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FeedLetter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/feedletter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **FeedLetter API key** (FeedLetter → Account → API Keys, owner only; a **Read & write** key also lets it create surveys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `feedletter_list_surveys` | read | List surveys |
| `feedletter_get_survey` | read | Get a survey |
| `feedletter_get_wall_of_love` | read | Get a Wall of Love |
| `feedletter_create_survey` | **write** | Create a survey |
| `feedletter_usage_status` | meta | Usage status (free-tier meter) |
| `feedletter_request_feature` | meta | Request a missing feature |
| `feedletter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `feedletter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `feedletter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `feedletter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `feedletter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
