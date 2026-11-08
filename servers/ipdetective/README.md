# IPDetective MCP by usefulapi

https://ipdetective.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ipdetective.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ipdetective https://ipdetective.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ipdetective&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fipdetective.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ipdetective": {
      "url": "https://ipdetective.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your IPDetective credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ipdetective/

<!-- connect:end (generated above, edit below) -->

Connect your own IPDetective credentials through the hosted sign-in page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ipdetective_account_usage` | read | Check IPDetective allowance |
| `ipdetective_lookup_ip` | read | Investigate an IP address |
| `ipdetective_lookup_batch` | read | Investigate a batch of IP addresses |
| `ipdetective_usage_status` | meta | Usage status (free-tier meter) |
| `ipdetective_request_feature` | meta | Request a missing feature |
| `ipdetective_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ipdetective_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ipdetective_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ipdetective_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ipdetective_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
