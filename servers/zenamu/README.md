# Zenamu MCP by usefulapi

Use your [Zenamu](https://zenamu.com) account from Claude, Cursor, or any MCP client. Read the class schedule, workshops, clients and pass balances, and grant passes or credits. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zenamu.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenamu.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenamu https://zenamu.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenamu&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenamu.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenamu": {
      "url": "https://zenamu.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenamu credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenamu/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **public API key** (`zen_pub_…`) and your **secret API key** (`zen_live_…`). Find both in Zenamu admin under Settings → General info → API keys. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenamu_list_classes` | read | List classes |
| `zenamu_list_workshops` | read | List workshops |
| `zenamu_list_lecturers` | read | List lecturers |
| `zenamu_list_places` | read | List places |
| `zenamu_list_clients` | read | List clients |
| `zenamu_list_pass_groups` | read | List pass groups |
| `zenamu_grant_credits` | **write** | Grant credits to a client |
| `zenamu_grant_passes` | **write** | Grant entry passes to a client |
| `zenamu_usage_status` | meta | Usage status (free-tier meter) |
| `zenamu_request_feature` | meta | Request a missing feature |
| `zenamu_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zenamu_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zenamu_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zenamu_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zenamu_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
