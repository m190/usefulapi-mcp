# Reoon Email Verifier MCP by usefulapi

https://reoon-email-verifier.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://reoon-email-verifier.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http reoon-email-verifier https://reoon-email-verifier.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=reoon-email-verifier&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freoon-email-verifier.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "reoon-email-verifier": {
      "url": "https://reoon-email-verifier.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Reoon Email Verifier credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/reoon-email-verifier/

<!-- connect:end (generated above, edit below) -->

Connect with your Reoon Email Verifier API key. Verification tools can spend vendor credits and require confirmation.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `reoon_account_balance` | read | Check Reoon verification credits |
| `reoon_verify_email` | **write** | Quick-check an email with Reoon |
| `reoon_create_bulk_verification` | **write** | Create a Reoon bulk verification job |
| `reoon_bulk_results` | read | Read Reoon bulk progress and results |
| `reoon_usage_status` | meta | Usage status (free-tier meter) |
| `reoon_request_feature` | meta | Request a missing feature |
| `reoon_upgrade` | meta | Upgrade to Pro or Pro+ |
| `reoon_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `reoon_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `reoon_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `reoon_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
