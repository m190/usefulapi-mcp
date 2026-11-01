# TrueContext MCP by usefulapi

Use your [TrueContext](https://truecontext.com) account from Claude, Cursor, or any MCP client. Read FormSpaces, forms, submissions, data sources, groups and users, and fetch fresh data for a dynamic data source. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://truecontext.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://truecontext.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http truecontext https://truecontext.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=truecontext&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftruecontext.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "truecontext": {
      "url": "https://truecontext.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TrueContext credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/truecontext/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **API Key ID** and the **API Key Secret** (an admin creates them under Users & Groups → API Keys). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `truecontext_list_formspaces` | read | List FormSpaces |
| `truecontext_get_formspace` | read | Get a FormSpace |
| `truecontext_list_forms` | read | List forms |
| `truecontext_get_form` | read | Get a form |
| `truecontext_list_form_versions` | read | List form versions |
| `truecontext_get_form_version` | read | Get a form version |
| `truecontext_list_submissions` | read | List form submissions |
| `truecontext_get_submission` | read | Get a form submission |
| `truecontext_list_data_sources` | read | List data sources |
| `truecontext_get_data_source` | read | Get a data source |
| `truecontext_list_destinations` | read | List data destinations |
| `truecontext_list_resources` | read | List resources |
| `truecontext_list_groups` | read | List groups |
| `truecontext_list_users` | read | List users |
| `truecontext_fetch_data_source` | **write** | Fetch a data source now |
| `truecontext_usage_status` | meta | Usage status (free-tier meter) |
| `truecontext_request_feature` | meta | Request a missing feature |
| `truecontext_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `truecontext_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `truecontext_upgrade` (it returns a Stripe Checkout link). Cancel any time with `truecontext_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `truecontext_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
