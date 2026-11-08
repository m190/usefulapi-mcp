# Emailable MCP by usefulapi

Use [Emailable](https://emailable.com) from Claude, Cursor, or any MCP client — check your account and credits, verify single email addresses, run batch verifications (up to 5,000 addresses, with confirmation) and read batch results page by page. Every verification spends credits from your own Emailable account.
Hosted, no local install: connect with your own Emailable credentials.

**Live endpoint:** `https://emailable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/emailable

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://emailable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http emailable https://emailable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=emailable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Femailable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "emailable": {
      "url": "https://emailable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Emailable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/emailable/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `emailable_get_account` | read | Get account and credits |
| `emailable_verify_email` | **write** | Verify one email address |
| `emailable_create_batch` | **write** | Create a batch verification |
| `emailable_get_batch` | read | Get a batch verification |
| `emailable_usage_status` | meta | Usage status (free-tier meter) |
| `emailable_request_feature` | meta | Request a missing feature |
| `emailable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `emailable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `emailable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `emailable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `emailable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Emailable.
