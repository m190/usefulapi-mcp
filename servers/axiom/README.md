# Axiom MCP by usefulapi

Use your [Axiom](https://axiom.co) account from Claude, Cursor, or any MCP client. Run APL queries and read datasets, monitors, dashboards and saved queries, and add annotations that mark events on charts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://axiom.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://axiom.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http axiom https://axiom.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=axiom&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faxiom.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "axiom": {
      "url": "https://axiom.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Axiom credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/axiom/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Axiom API token** (an Advanced token, created in Axiom → **Settings → API tokens** with dataset read and query access) and your **edge region** (US East 1 or EU Central 1). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `axiom_list_datasets` | read | List datasets |
| `axiom_get_dataset` | read | Get dataset |
| `axiom_list_dataset_fields` | read | List dataset fields |
| `axiom_query` | read | Run APL query |
| `axiom_list_monitors` | read | List monitors |
| `axiom_get_monitor` | read | Get monitor |
| `axiom_get_monitor_history` | read | Get monitor history |
| `axiom_list_dashboards` | read | List dashboards |
| `axiom_get_dashboard` | read | Get dashboard |
| `axiom_list_saved_queries` | read | List saved queries |
| `axiom_list_annotations` | read | List annotations |
| `axiom_create_annotation` | **write** | Create annotation |
| `axiom_usage_status` | meta | Usage status (free-tier meter) |
| `axiom_request_feature` | meta | Request a missing feature |
| `axiom_upgrade` | meta | Upgrade to Pro or Pro+ |
| `axiom_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `axiom_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `axiom_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `axiom_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
