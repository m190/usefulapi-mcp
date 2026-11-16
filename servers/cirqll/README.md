# Cirqll MCP by usefulapi

Use your [Cirqll](https://api.cirqll.nl) account from Claude, Cursor, or any MCP client. Read customers, contacts, tasks, appointments and sales chances, and create customers, tasks and notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cirqll.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cirqll.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cirqll https://cirqll.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cirqll&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcirqll.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cirqll": {
      "url": "https://cirqll.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you sign in with your Cirqll account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cirqll/

<!-- connect:end (generated above, edit below) -->

On first connect you sign in to Cirqll and approve access. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cirqll_get_me` | read | Get the signed-in user |
| `cirqll_list_customers` | read | List customers |
| `cirqll_get_customer` | read | Get a customer |
| `cirqll_list_contacts` | read | List contacts |
| `cirqll_list_tasks` | read | List tasks |
| `cirqll_list_appointments` | read | List appointments |
| `cirqll_list_chances` | read | List sales chances |
| `cirqll_list_notes` | read | List notes |
| `cirqll_create_customer` | **write** | Create a customer |
| `cirqll_create_task` | **write** | Create a task |
| `cirqll_create_note` | **write** | Create a note |
| `cirqll_usage_status` | meta | Usage status (free-tier meter) |
| `cirqll_request_feature` | meta | Request a missing feature |
| `cirqll_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cirqll_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cirqll_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cirqll_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cirqll_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
