# Carerix MCP by usefulapi

Use your [Carerix](https://www.carerix.com) account from Claude, Cursor, or any MCP client. Read candidates, companies and vacancies in your own Carerix tenant. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://carerix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://carerix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http carerix https://carerix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=carerix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcarerix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "carerix": {
      "url": "https://carerix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Carerix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/carerix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide **issuer URL**, **client ID** and **client secret** from your own Carerix tenant (confidential-client credentials). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `carerix_list_candidates` | read | List candidates |
| `carerix_list_companies` | read | List companies |
| `carerix_list_vacancies` | read | List vacancies |
| `carerix_usage_status` | meta | Usage status (free-tier meter) |
| `carerix_request_feature` | meta | Request a missing feature |
| `carerix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `carerix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `carerix_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `carerix_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `carerix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
